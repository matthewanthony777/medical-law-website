import Image from 'next/image'
import Link from 'next/link'
import { getFutureInsights } from '@/lib/future-insights'
import { formatDate } from '@/lib/utils'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

export default async function FutureInsightsPage() {
  const insights = await getFutureInsights()

  return (
    <section className="min-h-screen bg-black text-white pb-24 pt-40">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">The Legal Frontier</h1>
          <p className="text-xl text-gray-300">
            Inside knowledge that separates future legal innovators from those who will be replaced
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 bg-zinc-900/80 border border-white/10 rounded-md text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
          />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <Link 
              href={`/future-insights/${insight.slug}`}
              key={insight.slug}
              className="group bg-zinc-900/50 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/30"
            >
              {insight.image && (
                <div className="h-48 w-full relative overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.title || ''}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {insight.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4 text-sm text-gray-400">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(insight.publishedAt ?? '')}
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2">
                  {insight.title}
                </h2>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {insight.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}