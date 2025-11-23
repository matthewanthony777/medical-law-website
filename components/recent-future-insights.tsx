import Link from 'next/link'
import { getFutureInsights } from '@/lib/future-insights'
import FutureInsights from '@/components/future-insights'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default async function RecentFutureInsights() {
  const insights = await getFutureInsights(3)
  
  return (
    <section className="py-24 bg-black">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-white">Recent Insights</h2>
          <Link
            href="/future-insights"
            className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span>View all</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <FutureInsights insights={insights} />
      </div>
    </section>
  )
}