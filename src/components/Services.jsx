import { motion } from 'framer-motion'
import { services } from '../data/services'

const Services = () => (
  <section id="services" className="section-padding">
    <div className="mx-auto max-w-5xl text-center">
      <p className="tag mx-auto">Services</p>
      <h2 className="text-3xl font-semibold text-dark">Services that keep your feed alive</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base text-dark/70">
        Modular service offerings to support social-first campaigns, product drops, and evergreen
        storytelling.
      </p>
    </div>

    <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <motion.article
            key={service.title}
            className="group rounded-3xl border border-border bg-surface p-6 text-left shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05 }}
          >
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surfaceStrong text-dark">
              <Icon size={22} />
            </span>
            <h3 className="text-lg font-semibold text-dark">{service.title}</h3>
            <p className="mt-3 text-sm text-dark/70">{service.description}</p>
          </motion.article>
        )
      })}
    </div>
  </section>
)

export default Services


