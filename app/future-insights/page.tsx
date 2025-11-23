import Image from 'next/image'
import Link from 'next/link'
import { getFutureInsights } from '@/lib/future-insights'
import { formatDate } from '@/lib/utils'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import FutureInsights from '@/components/future-insights'

export default async function FutureInsightsPage() {
  const insights = await getFutureInsights()

  return (
    <section className="min-h-screen bg-black text-white pb-16 sm:pb-24 pt-32 sm:pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">
            <span className="gradient-text-blue-purple">The Legal Frontier</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Inside knowledge that separates future legal innovators from those who will be replaced
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 sm:py-4 bg-zinc-900/80 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all duration-300"
          />
        </div>

        {/* Articles Grid */}
        <FutureInsights insights={insights} />
      </div>
    </section>
  )
}