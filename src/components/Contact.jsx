import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiInstagramLine, RiLinkedinBoxLine, RiMailLine } from 'react-icons/ri'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: RiInstagramLine, handle: '@sharviladdha' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: RiLinkedinBoxLine, handle: '/in/sharviladdha' },
  { label: 'Email', href: 'mailto:hello@sharviladdha.com', icon: RiMailLine, handle: 'hello@sharviladdha.com' },
]

const Contact = () => {
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
    <section id="contact" className="section-padding">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-[40px] border border-border bg-surface p-8 shadow-soft lg:grid-cols-2">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="tag">Let&apos;s Collaborate</p>
          <h2 className="text-3xl font-semibold text-dark">Book me for your next launch</h2>
          <p className="text-base text-dark/70">
            Share a quick brief, upcoming timeline, or even your favorite Pinterest board. I&apos;ll
            respond within 24 hours.
          </p>

          <div className="space-y-4">
            {socials.map(({ label, href, icon: Icon, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 text-left text-dark/80 transition hover:-translate-y-0.5 hover:text-dark"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surfaceStrong text-dark">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-dark">{label}</p>
                  <p className="text-sm text-dark/70">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          className="space-y-4 rounded-3xl border border-border bg-surface p-6 shadow-soft"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          {['name', 'email'].map((field) => (
            <label key={field} className="block text-left text-sm font-medium text-dark/70">
              {field === 'name' ? 'Name' : 'Email'}
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                required
                value={formState[field]}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-dark placeholder:text-dark/60 focus:border-accent focus:outline-none"
                placeholder={field === 'name' ? 'Your name' : 'you@email.com'}
              />
            </label>
          ))}
          <label className="block text-left text-sm font-medium text-dark/70">
            Message
            <textarea
              name="message"
              rows="4"
              required
              value={formState.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-dark placeholder:text-dark/60 focus:border-accent focus:outline-none"
              placeholder="Tell me about your project"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-light shadow-glow transition hover:-translate-y-0.5"
          >
            Send message
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact


