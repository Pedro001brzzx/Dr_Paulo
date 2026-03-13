import { features } from '../../../models/features'
import { useScrollReveal } from '../../../controllers/useScrollReveal'

function FeatureCard({ icon, title, description, index }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`feature-card scroll-reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="feature-icon">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default function Features() {
  const { ref: headerRef, visible: headerVisible } = useScrollReveal({ threshold: 0.3 })

  return (
    <section id="features" className="section">
      <div className="container">
        <div
          ref={headerRef}
          className={`features-header scroll-reveal${headerVisible ? ' visible' : ''}`}
        >
          <div className="tag-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Protocolos exclusivos
          </div>
          <h2 className="section-title">O que você encontra no <span>consultório</span>:</h2>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <FeatureCard key={f.id} icon={f.icon} title={f.title} description={f.description} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
