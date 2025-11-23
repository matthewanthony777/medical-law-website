'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { NewsletterFormSchema, CollaborateFormSchema } from '@/lib/schemas'
import CollaborateFormEmail from '@/emails/collaborate-form-email'

type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
type CollaborateFormInputs = z.infer<typeof CollaborateFormSchema>

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: CollaborateFormInputs) {
  const result = CollaborateFormSchema.safeParse(data);
  
  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, position, goals } = result.data;
    
    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: 'trialsandtribulationslaw@resend.dev',
      to: ['trialsandtribulationslaw@gmail.com'],
      cc: ['trialsandtribulationslaw@gmail.com'],
      subject: 'New Consultation Request',
      text: `Name: ${name}\nEmail: ${email}\nCurrent Position: ${position}\nGoals: ${goals}`,
      react: CollaborateFormEmail({ name, email, position, goals })
    })

    if (error) {
      console.error("Resend API error:", error);
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error);
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    
    // Add to Resend audience
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    
    if (!audienceId) {
      console.error("Missing RESEND_AUDIENCE_ID environment variable");
      return { error: "Configuration error" };
    }
    
    // Add contact to audience
    const { error } = await resend.contacts.create({
      email: email,
      audienceId: audienceId
    });

    if (error) {
      console.error("Error adding to audience:", error);
      throw new Error('Failed to subscribe')
    }

    // Also send a notification email
    await resend.emails.send({
      from: 'trialsandtribulationslaw@resend.dev',
      to: ['trialsandtribulationslaw@gmail.com'],
      subject: 'New Newsletter Subscription',
      text: `New subscription from: ${email}`
    });

    return { success: true }
  } catch (error) {
    console.error("Subscription error:", error);
    return { error }
  }
}