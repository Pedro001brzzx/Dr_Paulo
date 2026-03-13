import { packages } from '../../../models/packages'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="3">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

function PackageCard({ pkg }) {
  return (
    <div className={`package-card${pkg.featured ? ' featured' : ''}`}>
      <span className="package-badge">{pkg.badge}</span>
      <h3>{pkg.name}</h3>
      <p className="package-detail">{pkg.detail}</p>
      <div className="package-price">
        {pkg.price}<span>{pkg.cents}</span>
      </div>
      <ul className="package-check">
        {pkg.items.map((item, i) => (
          <li key={i}>
            <span className="check-icon"><CheckIcon /></span>
            {item}
          </li>
        ))}
      </ul>
      <a href={pkg.waLink} className="package-btn">Quero este plano</a>
    </div>
  )
}

export default function Packages() {
  return (
    <>
      <div className="packages-header">
        <p style={{ fontSize: '15px', color: '#999', marginBottom: '8px' }}>Você merece o melhor cuidado!</p>
        <h2>PACOTES</h2>
      </div>
      <p className="packages-sub">Escolha o plano ideal para o seu acompanhamento</p>

      <div className="packages-grid">
        {packages.map(pkg => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </>
  )
}
