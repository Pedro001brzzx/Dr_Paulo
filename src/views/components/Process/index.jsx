import { processSteps } from '../../../models/processSteps'
import { useScrollReveal } from '../../../controllers/useScrollReveal'
import photo1 from '../../../assets/VSP_7003.JPG.jpeg'
import photo2 from '../../../assets/VSP_6950.JPG.jpeg'
import photo3 from '../../../assets/VSP_6867.JPG.jpeg'

const stepPhotos = [photo1, photo2, photo3]

function ProcessStep({ step, photo, index }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`process-step scroll-reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="process-step-photo">
        <img src={photo} alt={step.title} />
      </div>
      <div className="process-step-body">
        <div className="process-step-num">{step.id}</div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </div>
  )
}

export default function Process() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="process" className="section">
      <div className="container">

        <div
          ref={headerRef}
          className={`process-header scroll-reveal${headerVisible ? ' visible' : ''}`}
        >
          <div className="tag-label" style={{ borderColor: 'rgba(179,119,96,.4)', color: '#b37760' }}>
            Processo
          </div>
          <h2 className="section-title">Como funciona o <span>atendimento</span>?</h2>
          <div className="gold-line"></div>
          <p style={{ fontSize: '15px', color: '#555', maxWidth: '520px', lineHeight: '1.7' }}>
            O processo é estruturado para oferecer toda a atenção e cuidado que você merece, com um tratamento personalizado, humanizado e transformador que garante resultados muito melhores e mais duradouros.
          </p>
        </div>

        <div className="process-steps">
          {processSteps.map((step, i) => (
            <ProcessStep key={step.id} step={step} photo={stepPhotos[i]} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
