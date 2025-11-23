// components/future-insights.tsx
import Link from 'next/link'
import Image from 'next/image'
import { FutureInsightMetadata } from '@/lib/future-insights'
import { formatDate } from '@/lib/utils'
import MediaDisplay from '@/components/media-display'

export default function FutureInsights({ insights }: { insights: FutureInsightMetadata[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
      {insights.map(insight => (
        <Link
          key={insight.slug}
          href={`/future-insights/${insight.slug}`}
          className="group bg-zinc-900/50 overflow-hidden border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 flex flex-col"
        >
          <div className="h-48 sm:h-52 md:h-48 lg:h-56 w-full relative overflow-hidden">
            <MediaDisplay
              image={insight.image}
              video={insight.video}
              title={insight.title}
              isPreview={true}
              className="h-full transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="p-5 sm:p-6 flex flex-col flex-grow">
            <div className="flex items-center mb-3 sm:mb-4 text-xs sm:text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="truncate">{insight.publishedAt ? formatDate(insight.publishedAt) : 'No date'}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-accent-purple transition-colors duration-300">
              {insight.title || 'Untitled Insight'}
            </h2>

            <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3 flex-grow">
              {insight.summary || 'No summary available'}
            </p>

            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 pt-3 border-t border-white/5">
              <span className="truncate mr-2">{insight.author || 'Unknown author'}</span>
              <span className="text-accent-purple font-medium group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                Read more →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}