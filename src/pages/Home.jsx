import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Home = () => (
  <div className="min-h-screen text-dark">
    <Navbar />
    <main className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Projects />
      <ContactForm />
    </main>
    <Footer />
  </div>
)

export default Home


