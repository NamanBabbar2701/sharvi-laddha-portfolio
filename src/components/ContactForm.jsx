import { useState } from 'react'
import { motion } from 'framer-motion'

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Thanks for reaching out! I will get back to you shortly.')
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-primary py-20 px-6 lg:py-32">
      <motion.div
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="rounded-2xl bg-[#1f2530] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.3)] sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-left">
              <span className="mb-2 block font-serif text-sm font-medium text-dark/90 uppercase tracking-wide">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-primary/50 px-4 py-3 font-serif text-dark placeholder:text-dark/50 focus:border-accent focus:outline-none"
                placeholder="Your name"
              />
            </label>

            <label className="block text-left">
              <span className="mb-2 block font-serif text-sm font-medium text-dark/90 uppercase tracking-wide">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-primary/50 px-4 py-3 font-serif text-dark placeholder:text-dark/50 focus:border-accent focus:outline-none"
                placeholder="you@email.com"
              />
            </label>

            <label className="block text-left">
              <span className="mb-2 block font-serif text-sm font-medium text-dark/90 uppercase tracking-wide">
                Message
              </span>
              <textarea
                name="message"
                rows="6"
                required
                value={formState.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/20 bg-primary/50 px-4 py-3 font-serif text-dark placeholder:text-dark/50 focus:border-accent focus:outline-none resize-none"
                placeholder="Tell me about your project"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-accent px-8 py-3 font-serif text-sm font-semibold text-primary transition hover:opacity-90 uppercase tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactForm

