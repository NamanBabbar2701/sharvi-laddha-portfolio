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
    {/* Constrained Hero Image */}
    <div className="relative z-0 h-[500px] w-[200px] mt-45">
      <img
        src={heroImage}
        alt="Sharvi Laddha"
        className="h-full w-full object-cover object-center"
      />
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-[#2A3140]/40" />
    </div>

    {/* Centered Text Overlay */}
    <motion.div
      className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="mb-4 font-serif text-[3rem] font-bold leading-tight tracking-[0.05em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
        Sharvi Laddha
      </h1>
      <p className="font-serif text-lg tracking-wide text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:text-xl md:text-2xl lg:text-3xl">
        Content Creator & Social Media Manager
      </p>
    </motion.div>
  </section>
)

export default Hero
