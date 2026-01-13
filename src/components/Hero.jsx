import { motion } from 'framer-motion'
import heroImage from '../assets/IMG_1228.JPG'

const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Hero = () => (
  <section
    id="hero"
    className="min-h-[85vh] w-full bg-primary pt-24 lg:pt-32"
  >
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* LEFT: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl">
            <img
              src={heroImage}
              alt="Sharvi Laddha"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h1 className="mb-4 font-serif text-[2.8rem] font-bold leading-tight tracking-wide text-white sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]">
            Sharvi Laddha
          </h1>

          <p className="font-serif text-base tracking-wide text-white/90 sm:text-lg md:text-xl">
            Content Creator & Social Media Manager
          </p>
        </motion.div>

      </div>
    </div>
  </section>
)

export default Hero
