import { useScrollReveal } from '../../../controllers/useScrollReveal'
import { stats } from '../../../models/stats'

function StatItem({ value, label, index }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.2 })
  return (
    <div
      ref={ref}
      className={`stat-item scroll-reveal${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <StatItem key={i} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
