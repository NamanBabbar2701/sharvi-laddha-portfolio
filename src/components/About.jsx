import { motion } from 'framer-motion'

const About = () => (
  <section id="about" className="bg-primary py-20 px-6 lg:py-32">
    <motion.div
      className="mx-auto max-w-4xl text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="mb-12 font-serif text-4xl font-bold tracking-[0.2em] text-dark uppercase sm:text-5xl lg:text-6xl">
        ABOUT SHARVI
      </h2>
      
      <div className="mx-auto space-y-6 text-center font-serif text-base leading-relaxed text-dark/90 sm:text-lg lg:max-w-[60%]">
        <p>
          Sharvi Laddha is a content creator and social media manager based in India. She helps brands grow through aesthetic visuals, engaging storytelling, and modern content strategies. She specializes in designing, editing, and managing impactful digital content for businesses of all kinds.
        </p>
        <p>
          Her work includes social media posts, flyers, brochures, newsletters, video reels, and branding assets. She loves bringing creative ideas to life, helping brands connect with their audiences through thoughtful design and communication.
        </p>
      </div>

      <motion.a
        href="#contact"
        className="mt-12 inline-block rounded-full bg-accent px-8 py-3 font-serif text-sm font-semibold text-primary transition hover:opacity-90 uppercase tracking-wide"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Say Hello
      </motion.a>
    </motion.div>
  </section>
)

export default About
