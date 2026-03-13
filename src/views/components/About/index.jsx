import { Link } from 'react-router-dom'
import photo1 from '../../../assets/VSP_6520.JPG.jpeg'
import photo2 from '../../../assets/VSP_6953.JPG.jpeg'
import { useScrollReveal } from '../../../controllers/useScrollReveal'

export default function About() {
  const { ref: textRef, visible: textVisible } = useScrollReveal({ threshold: 0.15 })
  const { ref: photo1Ref, visible: photo1Visible } = useScrollReveal({ threshold: 0.15 })
  const { ref: photo2Ref, visible: photo2Visible } = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-inner">

          <div className="about-photos">
            <div
              ref={photo1Ref}
              className={`about-photo-main scroll-reveal${photo1Visible ? ' visible' : ''}`}
              style={{ transform: photo1Visible ? 'translateX(0)' : 'translateX(-40px)' }}
            >
              <img src={photo1} alt="Dr. Paulo Vieira" />
            </div>
            <div
              ref={photo2Ref}
              className={`about-photo-secondary scroll-reveal${photo2Visible ? ' visible' : ''}`}
              style={{ transform: photo2Visible ? 'translateX(0)' : 'translateX(40px)', transitionDelay: '120ms' }}
            >
              <img src={photo2} alt="Dr. Paulo Vieira" />
            </div>
          </div>

          <div
            ref={textRef}
            className={`about-text scroll-reveal${textVisible ? ' visible' : ''}`}
            style={{ transform: textVisible ? 'translateX(0)' : 'translateX(40px)', transitionDelay: '80ms' }}
          >
            <div className="tag-label">Sobre o Dr. Paulo</div>
            <h2 className="section-title">Dr. Paulo <span>Vieira</span></h2>
            <div className="gold-line"></div>

            <div className="about-crm">
              <span className="crm-badge">CRM PB 15156MFC</span>
              <span className="crm-badge">RQE 8926</span>
              <span className="crm-badge">Saúde Hormonal</span>
            </div>

            <p>
              Sou médico graduado pela <strong>UNIFIP</strong>, no município de Patos, na Paraíba, desde 2022. Desde o início da minha formação, desenvolvi uma paixão genuína pela medicina hormonal e metabólica — por acreditar que equilibrar o organismo por dentro é o caminho para uma vida realmente plena.
            </p>
            <p>
              Minha atuação é focada em <strong>modulação hormonal, emagrecimento, suplementação personalizada e qualidade de vida</strong>. Cada tratamento é construído a partir de exames, escuta ativa e um plano real para o seu perfil.
            </p>
            <p>
              Mais do que prescrever, eu <strong>investigo, acompanho e me importo</strong> com cada etapa da sua evolução. Atendo com atenção total, porque acredito que a transformação de um paciente é sempre a maior conquista do médico.
            </p>
            <p>
              Cada resultado celebrado no consultório reforça meu compromisso: ajudar pessoas a terem mais energia, mais saúde e mais vida — de forma segura, humana e sustentável.
            </p>

            <Link to="/checkout" className="btn-primary" style={{ marginTop: '10px' }}>
              Marcar consulta <span className="arrow">↘</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
