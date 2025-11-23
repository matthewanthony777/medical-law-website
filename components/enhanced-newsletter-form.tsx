'use client'

import { z } from 'zod'
import { toast } from 'sonner'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { subscribe } from '@/lib/actions'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function EnhancedNewsletterForm() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: ''
    }
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    try {
      const result = await subscribe(data)

      if (result?.error) {
        toast.error('An error occurred! Please try again.')
        return
      }

      setIsSubscribed(true);
      toast.success('Subscribed successfully!')
      reset()
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error('Failed to subscribe. Please try again.')
    }
  }

  return (
    <section className="py-16 bg-black text-white">
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl sm:text-6xl font-serif font-bold leading-tight mb-6">
            Discover Legal Futures.
          </h2>
          
          <p className="text-xl mb-8">
            Join forward-thinking legal professionals getting insights on AI, creativity, and strategic foresight every week.
          </p>
          
          <div className="mb-4">
            <p className="text-lg mb-6">
              When you join, you'll receive our <span className="font-bold text-indigo-400">Legal Futurist's Toolkit</span> — exclusive frameworks to navigate technological disruption.
            </p>
          </div>

          {isSubscribed ? (
            <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg p-6 max-w-xl mx-auto">
              <h3 className="text-2xl font-bold mb-2">Thank you for subscribing!</h3>
              <p>Check your inbox for the Legal Futurist's Toolkit and your first newsletter.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(processForm)}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <div className="flex-grow">
                <Input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full h-12 bg-black border-white/20 text-white placeholder:text-gray-500"
                  {...register('email')}
                />
                {errors.email?.message && (
                  <p className="mt-1 text-sm text-rose-400 text-left">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 sm:w-auto whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6"
              >
                {isSubmitting ? 'Subscribing...' : 'Get Insights'}
              </Button>
            </form>
          )}
          
          <p className="text-sm text-gray-400 mt-4">
            Join 3,000+ legal professionals. We respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  )
}