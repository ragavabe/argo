import AnimatedSection from './AnimatedSection'
/* ============================
   PLACEHOLDER: Troque a imagem abaixo pela foto real da academia.
   Basta substituir o arquivo em src/assets/images/about.png
   ============================ */
import aboutImg from '../assets/images/about.png'
import './About.css'

function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about__inner">
        <AnimatedSection className="about__image-wrapper">
          <div className="about__image-frame">
            <img src={aboutImg} alt="Interior da academia ARGO" className="about__image" />
            <div className="about__image-accent" />
          </div>
          <div className="about__experience">
            <span className="about__experience-number">7+</span>
            <span className="about__experience-text">Anos de<br />Experiência</span>
          </div>
        </AnimatedSection>

        <div className="about__content">
          <AnimatedSection delay={1}>
            <span className="section-label">Sobre nós</span>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <h2 className="section-title">
              Mais que uma academia,<br />
              <span className="about__title-accent">um estilo de vida</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={3}>
            <p className="about__text">
              A <strong>ARGO</strong> nasceu da paixão por transformação. Somos uma academia
              premium que combina tecnologia de ponta, profissionais altamente capacitados e
              um ambiente que inspira evolução a cada treino.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={4}>
            <p className="about__text">
              Nossa missão é proporcionar uma experiência completa de treinamento, onde
              cada detalhe foi pensado para maximizar seus resultados e tornar sua jornada
              fitness a mais agradável possível.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={5}>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">500+</span>
                <span className="about__stat-label">Alunos ativos</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">25+</span>
                <span className="about__stat-label">Equipamentos</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">7</span>
                <span className="about__stat-label">Profissionais</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About
