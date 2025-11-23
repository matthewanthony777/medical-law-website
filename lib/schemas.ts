// lib/schemas.ts
import { z } from 'zod'

export const NewsletterFormSchema = z.object({
  email: z.string().email('Invalid email.')
})

export const CollaborateFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .min(2, { message: 'Must be at least 2 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email('Invalid email.'),
  position: z
    .string()
    .min(1, { message: 'Please share information about your current position.' }),
  goals: z
    .string()
    .min(1, { message: 'Please tell us what kind of support you are looking for.' })
})