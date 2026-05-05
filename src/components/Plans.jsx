import { FiCheck, FiArrowRight } from 'react-icons/fi'
import AnimatedSection from './AnimatedSection'
import './Plans.css'

const plans = [
  {
    id: 'basico',
    name: 'Básico',
    price: '89',
    period: '/mês',
    description: 'Ideal para quem está começando sua jornada fitness.',
    features: [
      'Acesso à musculação',
      'Horário comercial (6h–18h)',
      'Avaliação física mensal',
      'Acesso ao app de treinos',
    ],
    highlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '149',
    period: '/mês',
    description: 'O plano mais escolhido. Experiência completa ARGO.',
    features: [
      'Acesso total à academia',
      'Horário ilimitado (24h)',
      'Personal trainer 2x/semana',
      'Avaliação física quinzenal',
      'Acesso à área funcional',
      'Armário individual',
    ],
    highlighted: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '249',
    period: '/mês',
    description: 'Para quem busca resultados extraordinários.',
    features: [
      'Todos os benefícios Premium',
      'Personal trainer ilimitado',
      'Nutricionista incluso',
      'Acesso VIP ao lounge',
      'Toalhas e suplementos',
      'Aulas exclusivas',
      'Prioridade em horários',
    ],
    highlighted: false,
  },
]

function Plans() {
  return (
    <section className="plans section" id="planos">
      <div className="container">
        <div className="plans__header">
          <AnimatedSection>
            <span className="section-label">Nossos Planos</span>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <h2 className="section-title">
              Escolha o plano <span className="plans__title-accent">ideal para você</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="section-subtitle plans__subtitle">
              Temos opções para todos os perfis. Invista em você e comece sua transformação hoje.
            </p>
          </AnimatedSection>
        </div>

        <div className="plans__grid">
          {plans.map((plan, index) => (
            <AnimatedSection
              key={plan.id}
              delay={index + 1}
              className={`plans__card ${plan.highlighted ? 'plans__card--highlighted' : ''}`}
            >
              {plan.highlighted && (
                <span className="plans__badge">Mais Popular</span>
              )}
              <div className="plans__card-header">
                <h3 className="plans__card-name">{plan.name}</h3>
                <p className="plans__card-desc">{plan.description}</p>
              </div>
              <div className="plans__card-price">
                <span className="plans__card-currency">R$</span>
                <span className="plans__card-value">{plan.price}</span>
                <span className="plans__card-period">{plan.period}</span>
              </div>
              <ul className="plans__card-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="plans__card-feature">
                    <FiCheck className="plans__card-check" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'} plans__card-btn`}
              >
                Matricule-se <FiArrowRight />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Plans
