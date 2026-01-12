import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { RiMailLine, RiMenuLine, RiCloseLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'My Project', href: '/selected-work' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (hash) => {
    const element = document.getElementById(hash)
    if (element) {
      const offset = 80 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Handle hash scrolling when navigating to home page with hash
    if (location.pathname === '/' && location.hash) {
      const hash = location.hash.replace('#', '')
      setTimeout(() => {
        scrollToSection(hash)
      }, 100)
    }
  }, [location.pathname, location.hash])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      const hash = href.replace('/#', '')
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll after navigation
        e.preventDefault()
        navigate(href)
        setTimeout(() => {
          scrollToSection(hash)
        }, 100)
      } else {
        // On home page, scroll smoothly
        e.preventDefault()
        scrollToSection(hash)
      }
    } else if (href.startsWith('/')) {
      // Internal route without hash - let Link handle it
    } else {
      // Hash-only link (for same page)
      const hashOnly = href.replace('#', '')
      if (location.pathname !== '/') {
        e.preventDefault()
        navigate(`/${href}`)
        setTimeout(() => {
          scrollToSection(hashOnly)
        }, 100)
      } else {
        e.preventDefault()
        scrollToSection(hashOnly)
      }
    }
  }

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      const hash = href.replace('/#', '')
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll after page loads
        e.preventDefault()
        navigate(href)
        // Scroll after navigation completes
        setTimeout(() => {
          scrollToSection(hash)
        }, 100)
      } else {
        // On home page, scroll smoothly
        e.preventDefault()
        scrollToSection(hash)
      }
    }
    // For non-hash links, let Link handle navigation normally
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="font-serif text-lg font-semibold tracking-wide text-dark">
          Sharvi Laddha
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm font-serif font-medium tracking-wider text-dark/90 md:flex">
          {navLinks.map((link) => {
            if (link.href.startsWith('/#')) {
              // Hash links - handle smooth scrolling
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="transition hover:text-accent uppercase"
                >
                  {link.label}
                </a>
              )
            } else if (link.href.startsWith('/')) {
              // Regular route links
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className="transition hover:text-accent uppercase"
                >
                  {link.label}
                </Link>
              )
            }
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="transition hover:text-accent uppercase"
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Right Side - Icons and Button */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="mailto:sharviladdha.work@gmail.com"
            className="text-dark/80 transition hover:text-accent"
            aria-label="Email"
          >
            <RiMailLine size={20} />
          </a>
          <div className="flex flex-col items-center gap-1">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSde5eRARppW2UWJe04RFR8oQ5vF9tAoyAsL-vv3LbadIyYf5A/viewform?usp=sharing&ouid=109562173839271511931"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-6 py-2 text-sm font-serif font-semibold text-primary transition hover:opacity-90 uppercase tracking-wide"
            >
              GET IN TOUCH
            </a>
            <a
              href="mailto:sharviladdha.work@gmail.com"
              className="text-xs text-dark/60 transition hover:text-dark/80"
            >
            </a>
          </div>
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
            {navLinks.map((link) => {
              if (link.href.startsWith('/#')) {
                // Hash links - handle smooth scrolling
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false)
                      handleLinkClick(e, link.href)
                    }}
                    className="font-serif text-sm font-medium tracking-wider text-dark/90 uppercase transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                )
              } else if (link.href.startsWith('/')) {
                // Regular route links
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-sm font-medium tracking-wider text-dark/90 uppercase transition hover:text-accent"
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false)
                    handleNavClick(e, link.href)
                  }}
                  className="font-serif text-sm font-medium tracking-wider text-dark/90 uppercase transition hover:text-accent"
                >
                  {link.label}
                </a>
              )
            })}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:sharviladdha.work@gmail.com"
                className="text-dark/80 transition hover:text-accent"
                aria-label="Email"
              >
                <RiMailLine size={20} />
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 mt-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSde5eRARppW2UWJe04RFR8oQ5vF9tAoyAsL-vv3LbadIyYf5A/viewform?usp=sharing&ouid=109562173839271511931"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full bg-accent px-6 py-2 text-sm font-serif font-semibold text-primary text-center transition hover:opacity-90 uppercase tracking-wide w-full"
              >
                GET IN TOUCH
              </a>
              <a
                href="mailto:sharviladdha.work@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xs text-dark/60 transition hover:text-dark/80"
              >
                Or email me directly
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
