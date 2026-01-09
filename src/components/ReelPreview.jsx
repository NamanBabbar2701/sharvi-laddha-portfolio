import { useRef, useState, useEffect } from 'react'

const ReelPreview = ({ videoSrc, externalLink, poster }) => {
  const videoRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || isMobile) return

    if (isHovered) {
      // Desktop: play on hover
      video.play().catch(() => {
        // Handle autoplay restrictions
      })
      setIsPlaying(true)
    } else {
      // Desktop: pause and reset on mouse leave
      video.pause()
      video.currentTime = 0
      setIsPlaying(false)
    }
  }, [isHovered, isMobile])

  const handleVideoInteraction = (e) => {
    // On mobile: allow video interaction but don't prevent container click
    // Video can be played by tapping directly on it
    if (isMobile) {
      const video = videoRef.current
      if (video && video.paused) {
        e.stopPropagation()
        video.play()
        setIsPlaying(true)
      }
    }
  }

  const handleContainerClick = () => {
    // Open Instagram link in new tab
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      className="group relative mb-10 max-w-md mx-auto cursor-pointer"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleContainerClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={poster}
          muted
          loop
          playsInline
          className="h-full w-full object-cover object-center"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={handleVideoInteraction}
        />
        
        {/* Play icon overlay when paused */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity"
            onClick={handleVideoInteraction}
          >
            <div className="rounded-full bg-black/50 p-4 backdrop-blur-sm">
              <svg
                className="h-12 w-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Tap to watch full video text overlay */}
        {!isPlaying && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-300 pointer-events-none">
            <p className="text-xs text-white/80 font-medium">
              Tap to watch full video
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReelPreview

