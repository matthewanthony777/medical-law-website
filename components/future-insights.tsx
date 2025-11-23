// components/future-insights.tsx
import Link from 'next/link'
import Image from 'next/image'
import { FutureInsightMetadata } from '@/lib/future-insights'
import { formatDate } from '@/lib/utils'
import MediaDisplay from '@/components/media-display'

export default function FutureInsights({ insights }: { insights: FutureInsightMetadata[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {insights.map(insight => (
        <Link 
          key={insight.slug}
          href={`/future-insights/${insight.slug}`}
          className="group bg-zinc-900/50 overflow-hidden border border-white/10 rounded-lg transition-all duration-300 hover:border-white/30"
        >
          <div className="h-48 w-full relative">
            <MediaDisplay 
              image={insight.image}
              video={insight.video}
              title={insight.title}
              isPreview={true}
              className="h-full"
            />
          </div>
          
          <div className="p-6">
            <div className="flex items-center mb-4 text-sm text-gray-400">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {insight.publishedAt ? formatDate(insight.publishedAt) : 'No date'}
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-white/90 transition-colors">
              {insight.title || 'Untitled Insight'}
            </h2>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
              {insight.summary || 'No summary available'}
            </p>
            
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{insight.author || 'Unknown author'}</span>
              <span className="text-white/70 font-medium group-hover:text-white transition-colors">Read more →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}