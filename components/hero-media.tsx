'use client'

import { useState } from 'react'
import Image from 'next/image'

interface HeroMediaProps {
  /** Video source URL */
  video?: string
  /** Image source URL (used as video poster or standalone image) */
  image?: string
  /** Alt text for accessibility */
  alt?: string
  /** Additional CSS classes */
  className?: string
}

/**
 * HeroMedia - A responsive media component for the homepage hero section
 * Displays video with fallback to image, includes glow effects and animations
 */
export default function HeroMedia({
  video = '/videos/future-insights/tenet-edit.MP4',
  image = '/images/future-insights/ai-legal-practice.jpg',
  alt = 'Legal Futurism - AI and Legal Innovation',
  className = ''
}: HeroMediaProps) {
  const [mediaError, setMediaError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const hasVideo = Boolean(video) && !mediaError
  const hasImage = Boolean(image)

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container with aspect ratio */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] group">
        {/* Animated glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>

        {/* Media container with border and shadow */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl ring-2 ring-white/10 shadow-2xl bg-black">
          {hasVideo ? (
            <>
              {/* Video element */}
              <video
                src={video}
                poster={image}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  videoLoaded ? 'opacity-100 scale-100 group-hover:scale-105' : 'opacity-0 scale-95'
                }`}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => {
                  console.error('Video failed to load, falling back to image')
                  setMediaError(true)
                }}
              />

              {/* Loading state with poster image */}
              {!videoLoaded && hasImage && (
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover animate-pulse"
                    priority
                  />
                </div>
              )}
            </>
          ) : hasImage ? (
            /* Image fallback */
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
                onError={() => setMediaError(true)}
              />
            </div>
          ) : (
            /* No media placeholder */
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 flex items-center justify-center">
              <div className="text-center space-y-4">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-500 text-sm sm:text-base">Media content loading...</p>
              </div>
            </div>
          )}

          {/* Subtle overlay gradient for better text contrast (optional) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
