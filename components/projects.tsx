import Image from 'next/image'
import Link from 'next/link'

import { ProjectMetadata } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2'>
      {projects.map(project => (
        <li key={project.slug} className='group relative'>
          <Link
            href={`/projects/${project.slug}`}
            className='block h-full rounded-xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1'
          >
            {project.image && (
              <div className='h-64 sm:h-56 md:h-60 lg:h-64 w-full overflow-hidden bg-muted relative'>
                <Image
                  src={project.image}
                  alt={project.title || ''}
                  fill
                  className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
                />
                {/* Gradient overlay for better text readability */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </div>
            )}

            {/* Card content - always visible on mobile, hover on desktop */}
            <div className='p-5 sm:p-6 md:absolute md:inset-x-0 md:bottom-0 md:translate-y-2 md:px-6 md:py-5 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100'>
              <h2 className='font-serif text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2 group-hover:text-accent-blue transition-colors duration-300'>
                {project.title}
              </h2>
              <p className='line-clamp-2 text-sm sm:text-base text-gray-300 mb-3'>
                {project.summary}
              </p>
              <div className='flex items-center justify-between'>
                <p className='text-xs sm:text-sm font-light text-gray-400'>
                  {formatDate(project.publishedAt ?? '')}
                </p>
                <span className='text-sm text-accent-blue font-medium group-hover:translate-x-1 transition-transform duration-300'>
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
