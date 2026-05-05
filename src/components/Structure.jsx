import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
/* ============================
   PLACEHOLDER: Troque as imagens abaixo pelas fotos reais da academia.
   Substitua os arquivos na pasta src/assets/images/
   ============================ */
import galleryWeights from '../assets/images/gallery-weights.png'
import galleryFunctional from '../assets/images/gallery-functional.png'
import galleryLounge from '../assets/images/gallery-lounge.png'
import aboutImg from '../assets/images/about.png'
import './Structure.css'

const galleryItems = [
  {
    id: 1,
    src: galleryWeights,
    alt: 'Área de musculação com halteres e equipamentos',
    label: 'Musculação',
  },
  {
    id: 2,
    src: galleryFunctional,
    alt: 'Área de treino funcional com cordas e kettlebells',
    label: 'Funcional',
  },
  {
    id: 3,
    src: galleryLounge,
    alt: 'Vestiário e área de descanso premium',
    label: 'Vestiário',
  },
  {
    id: 4,
    src: aboutImg,
    alt: 'Vista geral da academia ARGO',
    label: 'Espaço Geral',
  },
]

function Structure() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="structure section" id="estrutura">
      <div className="container">
        <div className="structure__header">
          <AnimatedSection>
            <span className="section-label">Nossa Estrutura</span>
          </AnimatedSection>
          <AnimatedSection delay={1}>
            <h2 className="section-title">
              Conheça nosso <span className="structure__title-accent">espaço</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={2}>
            <p className="section-subtitle">
              Mais de 800m² de área dedicada ao seu treino, com equipamentos de última geração
              e ambientes pensados para o seu conforto.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={3}>
          <div className="structure__gallery">
            <div className="structure__main-image">
              <img
                src={galleryItems[activeIndex].src}
                alt={galleryItems[activeIndex].alt}
                className="structure__main-img"
                key={activeIndex}
              />
              <div className="structure__main-label">
                {galleryItems[activeIndex].label}
              </div>
            </div>
            <div className="structure__thumbnails">
              {galleryItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`structure__thumb ${index === activeIndex ? 'structure__thumb--active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver ${item.label}`}
                >
                  <img src={item.src} alt={item.alt} className="structure__thumb-img" />
                  <span className="structure__thumb-label">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Structure
