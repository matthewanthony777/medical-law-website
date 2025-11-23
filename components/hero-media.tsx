'use client'

import { useState, useEffect, useRef } from 'react'
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
  /** Timeout in ms before falling back to image (default: 10000ms) */
  videoTimeout?: number
}

/**
 * HeroMedia - A responsive media component for the homepage hero section
 * Displays video with fallback to image, includes glow effects and animations
 */
export default function HeroMedia({
  video = '/videos/future-insights/tenet-edit.MP4',
  image = '/images/future-insights/ai-legal-practice.jpg',
  alt = 'Legal Futurism - AI and Legal Innovation',
  className = '',
  videoTimeout = 10000
}: HeroMediaProps) {
  const [videoStatus, setVideoStatus] = useState<'loading' | 'loaded' | 'error' | 'timeout'>('loading')
  const [showFallback, setShowFallback] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Timeout mechanism for video loading
  useEffect(() => {
    if (!video) {
      setShowFallback(true)
      return
    }

    // Set timeout for video loading
    console.log(`[HeroMedia] Starting video load timeout (${videoTimeout}ms) for:`, video)
    timeoutRef.current = setTimeout(() => {
      if (videoStatus === 'loading') {
        console.warn('[HeroMedia] Video loading timeout reached, falling back to image')
        setVideoStatus('timeout')
        setShowFallback(true)
      }
    }, videoTimeout)

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [video, videoTimeout, videoStatus])

  const handleVideoLoadedData = () => {
    console.log('[HeroMedia] Video loaded successfully:', video)
    setVideoStatus('loaded')
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Attempt to play the video
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('[HeroMedia] Video play failed:', error)
      })
    }
  }

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videoElement = e.currentTarget
    const error = videoElement.error

    console.error('[HeroMedia] Video error occurred:', {
      code: error?.code,
      message: error?.message,
      src: video,
      networkState: videoElement.networkState,
      readyState: videoElement.readyState
    })

    setVideoStatus('error')
    setShowFallback(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleVideoCanPlay = () => {
    console.log('[HeroMedia] Video can play:', video)
  }

  const handleVideoLoadStart = () => {
    console.log('[HeroMedia] Video load started:', video)
  }

  const hasVideo = Boolean(video)
  const hasImage = Boolean(image)
  const shouldShowVideo = hasVideo && !showFallback

  return (
    <div className={`relative w-full ${className}`}>
      {/* Container with aspect ratio */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] group">
        {/* Animated glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>

        {/* Media container with border and shadow */}
        <div className="relative w-full h-full overflow-hidden rounded-2xl ring-2 ring-white/10 shadow-2xl bg-black">
          {shouldShowVideo ? (
            <>
              {/* Video element - shown immediately */}
              <video
                ref={videoRef}
                src={video}
                poster={image}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={handleVideoLoadedData}
                onError={handleVideoError}
                onCanPlay={handleVideoCanPlay}
                onLoadStart={handleVideoLoadStart}
              />

              {/* Loading indicator - shown while video is loading */}
              {videoStatus === 'loading' && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    {/* Spinner */}
                    <div className="relative w-16 h-16 mx-auto">
                      <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
                      <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base font-medium">Loading video...</p>
                  </div>
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
                onError={() => {
                  console.error('[HeroMedia] Image fallback also failed to load:', image)
                }}
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
                <p className="text-gray-500 text-sm sm:text-base">Media content unavailable</p>
              </div>
            </div>
          )}

          {/* Subtle overlay gradient for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
