// components/newsletter-form.tsx
'use client'

import { z } from 'zod'
import Link from 'next/link'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { NewsletterFormSchema } from '@/lib/schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { subscribe } from '@/lib/actions'
import { Card, CardContent } from '@/components/ui/card'

type Inputs = z.infer<typeof NewsletterFormSchema>

export default function NewsletterForm() {
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

      toast.success('Subscribed successfully!')
      reset()
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error('Failed to subscribe. Please try again.')
    }
  }

  return (
    <section>
      <Card className="rounded-lg border border-white/10 bg-zinc-900">
        <CardContent className="flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Subscribe to our newsletter</h2>
            <p className="text-gray-400">
              Get legal insights, tech updates, and exclusive content.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(processForm)}
            className="flex flex-col items-start gap-3"
          >
            <div className="w-full">
              <Input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Your email address"
                className="w-full bg-black border-white/20 text-white placeholder:text-gray-500"
                {...register('email')}
              />

              {errors.email?.message && (
                <p className="ml-1 mt-2 text-sm text-rose-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full disabled:opacity-50 bg-white text-black hover:bg-gray-200"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>

            <div>
              <p className="text-xs text-gray-400">
                We care about your data. Read our{' '}
                <Link href="/privacy" className="text-white hover:underline">
                  privacy&nbsp;policy.
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}