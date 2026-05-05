import { FiPhone, FiMapPin, FiMessageCircle, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import './Contact.css'

function Contact() {
  return (
    <section className="contact section" id="contato">
      <div className="container">
        <div className="contact__header">
          <AnimatedSection>
            <span className="section-label">Contato</span>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <h2 className="section-title">
              Fale <span className="contact__accent">conosco</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="section-subtitle contact__subtitle">
              Estamos prontos para te ajudar a começar sua jornada. Entre em contato!
            </p>
          </AnimatedSection>
        </div>

        <div className="contact__grid">
          <AnimatedSection className="contact__info" delay={2}>
            <div className="contact__info-card">
              <div className="contact__info-icon"><FiPhone /></div>
              <div>
                <h3 className="contact__info-title">Telefone</h3>
                <p className="contact__info-text">(48) 3456-7890</p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon"><FiMail /></div>
              <div>
                <h3 className="contact__info-title">E-mail</h3>
                <p className="contact__info-text">contato@argoacademia.com.br</p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon"><FiMapPin /></div>
              <div>
                <h3 className="contact__info-title">Endereço</h3>
                <p className="contact__info-text">
                  Av. Paulista, 1234 - Bela Vista<br />
                  São Paulo - SP, 01310-100
                </p>
              </div>
            </div>
            <div className="contact__info-card">
              <div className="contact__info-icon"><FiMessageCircle /></div>
              <div>
                <h3 className="contact__info-title">Horário</h3>
                <p className="contact__info-text">
                  Seg-Sex: 6h – 23h<br />
                  Sáb: 8h – 18h | Dom: 8h – 14h
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5548999999999?text=Olá! Gostaria de saber mais sobre a ARGO."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact__whatsapp"
            >
              <FaWhatsapp className="contact__wa-icon" />
              Fale pelo WhatsApp
            </a>
          </AnimatedSection>

          <AnimatedSection className="contact__map-wrapper" delay={3}>
            <iframe
              title="Localização ARGO Academia"
              className="contact__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1976!2d-46.6544!3d-23.5632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ3LjUiUyA0NsKwMzknMTUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Contact
