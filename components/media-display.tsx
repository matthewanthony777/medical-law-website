'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface MediaDisplayProps {
  image?: string
  video?: string
  title?: string
  isPreview?: boolean
  className?: string
}

export default function MediaDisplay({ image, video, title, isPreview = false, className = '' }: MediaDisplayProps) {
  const [mediaError, setMediaError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Always show video if available, for both preview and detail view
  const hasVideo = Boolean(video)
  const hasImage = Boolean(image)
  
  // Setup video playback behavior for preview mode
  useEffect(() => {
    if (videoRef.current && hasVideo && isPreview) {
      // Set up muted autoplay for preview mode
      videoRef.current.muted = true
      videoRef.current.loop = true
      videoRef.current.playsInline = true
      
      // Try to play the video (needed for some browsers)
      const playVideo = async () => {
        try {
          await videoRef.current?.play()
        } catch (err) {
          console.error("Autoplay failed:", err)
        }
      }
      
      playVideo()
    }
  }, [hasVideo, isPreview])
  
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {hasVideo ? (
        // Video display
        <div className="relative w-full h-full aspect-video">
          <video 
            ref={videoRef}
            src={video}
            poster={image}
            controls={!isPreview}
            muted={isPreview}
            loop={isPreview}
            playsInline={isPreview}
            onError={() => setMediaError(true)}
            className="w-full h-full object-cover"
          />
          
          {/* Fallback if video fails to load */}
          {(mediaError && hasImage) && (
            <Image
              src={image!}
              alt={title || 'Article image'}
              fill
              className="object-cover"
              onError={() => setMediaError(true)}
            />
          )}
          
          {/* Complete fallback if both video and image fail */}
          {(mediaError && !hasImage) && (
            <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
                <p className="text-gray-400">{title || 'Media unavailable'}</p>
              </div>
            </div>
          )}
          
          {/* Play button overlay - REMOVED FOR PREVIEW MODE */}
          {/* Only show in non-preview mode if explicitly needed */}
          {false && isPreview && !mediaError && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          )}
        </div>
      ) : hasImage ? (
        // Image display (when no video)
        <div className="relative w-full h-full aspect-video">
          <Image
            src={image!}
            alt={title || 'Article image'}
            fill
            className="object-cover"
            onError={() => setMediaError(true)}
          />
        </div>
      ) : (
        // No media fallback
        <div className="relative w-full h-full aspect-video bg-zinc-900 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-400">{title || 'No media available'}</p>
          </div>
        </div>
      )}
    </div>
  )
}