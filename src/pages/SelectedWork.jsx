import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { workSections } from '../data/workData'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCarousel from '../components/ImageCarousel'
import ReelPreview from '../components/ReelPreview'
import Lightbox from '../components/Lightbox'

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const SelectedWork = () => {
  const location = useLocation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)

  const handleImageClick = (image) => {
    setLightboxImage(image)
    setLightboxOpen(true)
  }

  useEffect(() => {
    // Handle scrolling to section on mount if hash is present
    const hash = location.hash.replace('#', '') || window.location.hash.replace('#', '')
    if (hash) {
      // Small delay to ensure DOM is ready
      const scrollToSection = () => {
        const element = document.getElementById(hash)
        if (element) {
          const offset = 80 // Account for fixed navbar
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }
      // Try immediately and after a short delay
      scrollToSection()
      setTimeout(scrollToSection, 150)
    }
  }, [location.hash])

  return (
    <div className="min-h-screen bg-primary text-white">
      <Navbar />
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Back Navigation */}
        <section className="bg-[#2A3140] py-8 px-4 sm:px-6 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
              >
                <span>←</span>
                <span>Back to Home</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Work Sections */}
        {workSections.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className="section-padding bg-primary scroll-mt-20"
          >
            <div className="mx-auto max-w-5xl">
              {/* Section Title & Description */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + sectionIndex * 0.1, duration: 0.6 }}
              >
                <div className="mb-3">
                  <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                    {section.title}
                  </h2>
                  {section.subtitle && (
                    <p className="mt-2 font-serif text-xs tracking-wider text-white/60 uppercase">
                      {section.subtitle}
                    </p>
                  )}
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
                  {section.description}
                </p>
              </motion.div>

              {/* Image Display - Carousel for Instagram Carousel sections, Reel Preview for Reel Editing, Grid for others */}
              {section.id.startsWith('instagram-carousel') ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + sectionIndex * 0.1, duration: 0.6 }}
                >
                  <ImageCarousel images={section.images} />
                </motion.div>
              ) : section.id === 'reel-editing' && section.videos ? (
                <motion.div
                  className="mb-10 space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + sectionIndex * 0.1, duration: 0.6 }}
                >
                  {section.videos.map((video, videoIndex) => (
                    <motion.div
                      key={videoIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5 + sectionIndex * 0.1 + videoIndex * 0.1,
                        duration: 0.5,
                      }}
                    >
                      <ReelPreview
                        videoSrc={video.videoSrc}
                        externalLink={video.externalLink}
                        poster={video.poster}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + sectionIndex * 0.1, duration: 0.6 }}
                >
                  {section.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-soft cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5 + sectionIndex * 0.1 + imageIndex * 0.05,
                        duration: 0.5,
                      }}
                      whileHover={{ scale: 1.02 }}
                      onClick={() => handleImageClick(image)}
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={image}
                          alt={`${section.title}${section.subtitle ? ` - ${section.subtitle}` : ''} - Sample ${imageIndex + 1}`}
                          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-110"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Instagram Button (only for Instagram Carousel sections and Reel Editing) */}
              {section.showInstagramButton && section.externalLink && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + sectionIndex * 0.1, duration: 0.6 }}
                >
                  <a
                    href={section.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  >
                    View on Instagram
                  </a>
                </motion.div>
              )}
            </div>
          </section>
        ))}
      </motion.main>
      <Footer />
      <Lightbox
        isOpen={lightboxOpen}
        src={lightboxImage}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}

export default SelectedWork

