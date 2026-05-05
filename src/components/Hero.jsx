import { useEffect, useState } from 'react'
import { FiArrowDown } from 'react-icons/fi'
/* ============================
   PLACEHOLDER: Troque a imagem abaixo pela foto real da academia.
   Basta substituir o arquivo em src/assets/images/hero-bg.png
   ============================ */
import heroBg from '../assets/images/hero-bg.png'
import './Hero.css'

function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          src={heroBg}
          alt="Interior da academia ARGO"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      <div className={`container hero__content ${loaded ? 'hero__content--visible' : ''}`}>
        <span className="hero__badge">ACADEMIA PREMIUM</span>
        <h1 className="hero__title">
          Transforme seu corpo,
          <br />
          <span className="hero__title-accent">supere seus limites</span>
        </h1>
        <p className="hero__subtitle">
          Equipamentos de última geração, profissionais qualificados e um
          ambiente que inspira evolução. Na ARGO, cada treino é um passo
          rumo à sua melhor versão.
        </p>
        <div className="hero__actions">
          <a href="#planos" className="btn btn-primary hero__btn">
            Comece agora
          </a>
          <a href="#sobre" className="btn btn-outline hero__btn">
            Conheça a ARGO
          </a>
        </div>
      </div>

      <a href="#sobre" className="hero__scroll" aria-label="Scroll para próxima seção">
        <FiArrowDown className="hero__scroll-icon" />
      </a>
    </section>
  )
}

export default Hero
