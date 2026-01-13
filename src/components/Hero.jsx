import { motion } from 'framer-motion'
import heroImage from '../assets/IMG_1228.JPG'

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Hero = () => (
  <section
    id="hero"
    className="relative flex h-[85vh] w-full items-center justify-center bg-primary pt-20 lg:pt-0"
  >
    {/* Centered Hero Image Container */}
    <div className="relative z-0 h-full w-full flex items-center justify-center">
      <div className="relative h-[85%] w-[70%] max-w-lg min-w-[300px] sm:w-[65%] sm:max-w-xl md:w-[60%] md:max-w-2xl">
        <img
          src={heroImage}
          alt="Sharvi Laddha"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>

    {/* Text Overlay - Positioned on top of image */}
    <motion.div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 mt-40"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="mb-3 font-serif text-[2.5rem] font-bold leading-tight tracking-[0.08em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]">
        Sharvi Laddha
      </h1>
      <p className="font-serif text-base font-normal tracking-wide text-white/95 drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)] sm:text-lg md:text-xl lg:text-2xl">
        Content Creator & Social Media Manager
      </p>
    </motion.div>
  </section>
)

export default Hero
