import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { projectToSectionMap } from '../data/workData'

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="mx-auto max-w-5xl text-center">
      <p className="tag mx-auto">My Projects</p>
      <h2 className="text-3xl font-semibold text-dark">Recent projects & explorations</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base text-dark/70">
        A peek into strategies, visuals, and systems that helped brands show up consistently and
        creatively online.
      </p>
    </div>

    <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => {
        const sectionId = projectToSectionMap[project.slug] || project.slug
        return (
          <motion.article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-soft transition-all duration-300 hover:cursor-pointer hover:shadow-glow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link to={`/selected-work#${sectionId}`} className="block">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full border border-border bg-surfaceStrong px-3 py-1 text-xs font-semibold text-dark shadow-soft">
                  {project.tags.join(' · ')}
                </span>
              </div>
              <div className="space-y-3 px-5 py-6">
                <h3 className="text-lg font-semibold text-dark">{project.title}</h3>
                <p className="text-sm text-dark/70">{project.description}</p>
              </div>
            </Link>
          </motion.article>
        )
      })}
    </div>

    {/* Centered CTA Button */}
    <div className="mt-12 flex justify-center">
      <motion.a
        href="https://docs.google.com/forms/d/e/1FAIpQLSde5eRARppW2UWJe04RFR8oQ5vF9tAoyAsL-vv3LbadIyYf5A/viewform?usp=sharing&ouid=109562173839271511931"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-full bg-accent px-8 py-3 font-serif text-sm font-semibold text-primary transition hover:opacity-90 uppercase tracking-wide"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Let's Connect
      </motion.a>
    </div>
  </section>
)

export default Projects
