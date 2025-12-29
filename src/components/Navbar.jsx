import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiInstagramLine, RiTwitterXLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#projects' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      window.location.href = href
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="font-serif text-lg font-semibold tracking-wide text-dark">
          Sharvi Laddha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-serif font-medium tracking-wider text-dark/90 md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={(e) => handleNavClick(link.href)}
              className="transition hover:text-accent uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side - Icons and Button */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-dark/80 transition hover:text-accent"
            aria-label="Instagram"
          >
            <RiInstagramLine size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-dark/80 transition hover:text-accent"
            aria-label="Twitter"
          >
            <RiTwitterXLine size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-2 text-sm font-serif font-semibold text-primary transition hover:opacity-90 uppercase tracking-wide"
          >
            GET IN TOUCH
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <RiCloseLine size={24} className="text-dark" />
          ) : (
            <RiMenuLine size={24} className="text-dark" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-t border-white/10 md:hidden">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setIsMobileMenuOpen(false)
                  handleNavClick(link.href)
                }}
                className="font-serif text-sm font-medium tracking-wider text-dark/90 uppercase transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark/80 transition hover:text-accent"
                aria-label="Instagram"
              >
                <RiInstagramLine size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-dark/80 transition hover:text-accent"
                aria-label="Twitter"
              >
                <RiTwitterXLine size={20} />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-full bg-accent px-6 py-2 text-sm font-serif font-semibold text-primary text-center transition hover:opacity-90 uppercase tracking-wide mt-2"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
