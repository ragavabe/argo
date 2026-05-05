import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from 'react-icons/fa'
import './Footer.css'

const socialLinks = [
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
  { icon: FaTiktok, href: 'https://tiktok.com', label: 'TikTok' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Planos', href: '#planos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Contato', href: '#contato' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">ARGO</span>
            <p className="footer__tagline">
              Transforme seu corpo, supere seus limites.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Navegação</h4>
            <ul className="footer__links-list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social-col">
            <h4 className="footer__links-title">Redes Sociais</h4>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {currentYear} ARGO Academia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
