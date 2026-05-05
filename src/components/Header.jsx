import { useState, useEffect } from 'react'
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi'
import './Header.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Planos', href: '#planos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Contato', href: '#contato' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const handleNavClick = () => {
    setIsMobileOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} id="header">
      <div className="container header__inner">
        <a href="#home" className="header__logo" aria-label="ARGO - Página inicial">
          <span className="header__logo-text">ARGO</span>
        </a>

        <nav className={`header__nav ${isMobileOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="header__nav-link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#planos"
            className="btn btn-primary header__cta-mobile"
            onClick={handleNavClick}
          >
            Matricule-se
          </a>
        </nav>

        <a href="#planos" className="btn btn-primary header__cta-desktop">
          Matricule-se
        </a>

        <button
          className="header__toggle"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="header__overlay" onClick={() => setIsMobileOpen(false)} />
      )}
    </header>
  )
}

export default Header
