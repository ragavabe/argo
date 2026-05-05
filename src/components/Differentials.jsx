import { FiAward, FiClock, FiUsers, FiWind, FiShield, FiZap } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'
import './Differentials.css'

const items = [
  { icon: FiZap, title: 'Equipamentos Modernos', text: 'Máquinas de última geração das melhores marcas do mundo.' },
  { icon: FiUsers, title: 'Profissionais Qualificados', text: 'Equipe de personal trainers certificados e experientes.' },
  { icon: FiWind, title: 'Ambiente Climatizado', text: 'Temperatura ideal durante todo o ano para seu conforto.' },
  { icon: FiClock, title: 'Horário Flexível', text: 'Funcionamento estendido para se adaptar à sua rotina.' },
  { icon: FiShield, title: 'Segurança Total', text: 'Monitoramento 24h e armários individuais com chave.' },
  { icon: FiAward, title: 'Resultados Comprovados', text: 'Metodologia própria com acompanhamento personalizado.' },
]

function Differentials() {
  return (
    <section className="diff section" id="diferenciais">
      <div className="container">
        <div className="diff__header">
          <AnimatedSection>
            <span className="section-label">Diferenciais</span>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <h2 className="section-title">
              Por que escolher a <span className="diff__accent">ARGO?</span>
            </h2>
          </AnimatedSection>
        </div>
        <div className="diff__grid">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i + 1} className="diff__card">
              <div className="diff__icon-wrapper">
                <item.icon className="diff__icon" />
              </div>
              <h3 className="diff__card-title">{item.title}</h3>
              <p className="diff__card-text">{item.text}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
