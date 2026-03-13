import { audienceLeft, audienceRight } from '../../../models/audience'
import audiencePhoto from '../../../assets/VSP_6440.JPG.jpeg'
import { useScrollReveal } from '../../../controllers/useScrollReveal'

function AudienceItem({ text, index, direction }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 })
  return (
    <div
      ref={ref}
      className={`audience-item scroll-reveal${visible ? ' visible' : ''}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        transform: visible
          ? 'translateX(0)'
          : direction === 'left' ? 'translateX(-40px)' : 'translateX(40px)',
      }}
    >
      <p>{text}</p>
    </div>
  )
}

export default function Audience() {
  const { ref: introRef, visible: introVisible } = useScrollReveal({ threshold: 0.3 })
  const { ref: photoRef, visible: photoVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="audience" className="section">
      <div className="container">

        <div
          ref={introRef}
          className={`audience-intro scroll-reveal${introVisible ? ' visible' : ''}`}
          style={{ marginBottom: '60px' }}
        >
          <div className="tag-label" style={{ borderColor: 'rgba(179,119,96,.4)', color: '#b37760' }}>
            Para quem é
          </div>
          <h2 className="section-title">
            Para <span>homens e mulheres</span> que querem<br/>mais energia, equilíbrio e estética corporal
          </h2>
        </div>

        <div className="audience-inner">
          <div className="audience-col left">
            {audienceLeft.map((text, i) => (
              <AudienceItem key={i} text={text} index={i} direction="left" />
            ))}
          </div>

          <div
            ref={photoRef}
            className={`audience-center scroll-reveal${photoVisible ? ' visible' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="audience-circle-ring"></div>
            <div className="audience-photo">
              <img
                src={audiencePhoto}
                alt="Dr. Paulo Vieira"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="audience-col right">
            {audienceRight.map((text, i) => (
              <AudienceItem key={i} text={text} index={i} direction="right" />
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ fontSize: '18px', fontWeight: '600', color: '#333', marginBottom: '28px' }}>
            Chegou a hora de ter <strong style={{ color: '#b37760' }}>o corpo e a saúde que você merece.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
