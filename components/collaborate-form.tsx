// components/collaborate-form.tsx
'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CollaborateFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'

type Inputs = z.infer<typeof CollaborateFormSchema>

export default function CollaborateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(CollaborateFormSchema),
    defaultValues: {
      name: '',
      email: '',
      position: '',
      goals: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    try {
      const result = await sendEmail(data)

      if (result?.error) {
        toast.error('An error occurred! Please try again.')
        return
      }

      toast.success('Message sent successfully!')
      reset()
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error('Failed to send your message. Please try again.')
    }
  }

  return (
    <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8">
      <form onSubmit={handleSubmit(processForm)} className="space-y-6" noValidate>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
            {...register('name')}
          />
          {errors.name?.message && (
            <p className="mt-2 text-sm text-rose-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email address</label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
            {...register('email')}
          />
          {errors.email?.message && (
            <p className="mt-2 text-sm text-rose-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Current Position & Challenges */}
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">Tell Us About Your Situation</label>
          <Textarea
            id="position"
            rows={4}
            placeholder="Share your background, current role, and what brings you to Trials & Tribulations today...."
            className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
            {...register('position')}
          />
          {errors.position?.message && (
            <p className="mt-2 text-sm text-rose-400">
              {errors.position.message}
            </p>
          )}
        </div>

        {/* Goals */}
        <div>
          <label htmlFor="goals" className="block text-sm font-medium text-gray-300 mb-2">How Can We Collaborate?</label>
          <Textarea
            id="goals"
            rows={4}
            placeholder="Let us know what you're looking to achieve - whether it's career guidance, website development, content creation, or contributing to our community..."
            className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
            {...register('goals')}
          />
          {errors.goals?.message && (
            <p className="mt-2 text-sm text-rose-400">
              {errors.goals.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-gray-200 py-3 text-lg font-medium disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Start the Conversation'}
          </Button>
        </div>
      </form>
    </div>
  )
}