import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
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
  const shouldReduceMotion = useReducedMotion()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(null)
  const [brochureExpanded, setBrochureExpanded] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleImageClick = (image) => {
    setLightboxImage(image)
    setLightboxOpen(true)
  }

  const handleBrochureToggle = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setBrochureExpanded((prev) => !prev)
    setTimeout(() => setIsAnimating(false), 700)
  }

  useEffect(() => {
    const hash = location.hash.replace('#', '') || window.location.hash.replace('#', '')
    if (hash) {
      const scrollToSection = () => {
        const element = document.getElementById(hash)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
        }
      }
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
        {/* Back */}
        <section className="bg-[#2A3140] py-8 px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        {workSections.map((section, sectionIndex) => {
          /* ---------------- BROCHURE DESIGN ---------------- */
          if (section.id === 'brochure-design') {
            return (
              <section
                key={section.id}
                id={section.id}
                className="section-padding bg-primary scroll-mt-20"
              >
                <div className="mx-auto max-w-5xl">
                  <motion.div
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <h2 className="font-serif text-3xl font-bold">{section.title}</h2>
                    <p className="mt-3 max-w-3xl text-white/80">{section.description}</p>
                  </motion.div>
                </div>

                <div className="w-full flex justify-center">
                  <motion.div layout>
                    <AnimatePresence mode="wait">
                      {/* COLLAPSED */}
                      {!brochureExpanded && (
                        <motion.div
                          key="collapsed"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="cursor-pointer"
                          onClick={handleBrochureToggle}
                        >
                          <img
                            src={section.images[0]}
                            alt="Brochure cover"
                            className="w-[90vw] max-w-[520px] rounded-2xl object-contain"
                          />
                        </motion.div>
                      )}

                      {/* EXPANDED */}
                      {brochureExpanded && (
                        <motion.div
                          key="expanded"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            height: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.4 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="w-[90vw] max-w-[520px] flex flex-col gap-0 rounded-2xl overflow-hidden border border-border bg-surface shadow-soft">
                            {section.images.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`Brochure page ${idx + 1}`}
                                className="w-full object-cover cursor-pointer"
                                onClick={() =>
                                  idx === 0 ? handleBrochureToggle() : handleImageClick(image)
                                }
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </section>
            )
          }

          /* ---------------- OTHER SECTIONS ---------------- */
          return (
            <section
              key={section.id}
              id={section.id}
              className="section-padding bg-primary scroll-mt-20"
            >
              <div className="mx-auto max-w-5xl">
                <motion.div className="mb-10">
                  <h2 className="font-serif text-3xl font-bold">{section.title}</h2>
                  <p className="mt-3 max-w-3xl text-white/80">{section.description}</p>
                </motion.div>

                {section.id.startsWith('instagram-carousel') ? (
                  <ImageCarousel images={section.images} />
                ) : section.id === 'reel-editing' && section.videos ? (
                  section.videos.map((video, i) => (
                    <ReelPreview
                      key={i}
                      videoSrc={video.videoSrc}
                      externalLink={video.externalLink}
                    />
                  ))
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {section.images.map((img, i) => (
                      <div
                        key={i}
                        className="cursor-pointer"
                        onClick={() => handleImageClick(img)}
                      >
                        <img
                          src={img}
                          alt=""
                          className="rounded-2xl object-cover w-full"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )
        })}
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
