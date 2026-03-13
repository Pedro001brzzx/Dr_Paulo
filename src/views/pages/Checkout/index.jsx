import { Link } from 'react-router-dom'
import { packages } from '../../../models/packages'
import logo from '../../../assets/LOGO_DR_PAULO.png'

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
      <a href={pkg.waLink} className="package-btn" target="_blank" rel="noreferrer">
        Quero este plano
      </a>
    </div>
  )
}

export default function Checkout() {
  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <Link to="/" className="checkout-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Voltar
        </Link>
        <img src={logo} alt="Dr. Paulo Vieira" className="checkout-logo" />
        <div style={{ width: '80px' }} />
      </header>

      <main className="checkout-main">
        <div className="checkout-intro">
          <p className="checkout-tag">Escolha seu plano</p>
          <h1>Agende sua <span>consulta</span></h1>
          <p className="checkout-sub">
            Selecione o plano ideal para o seu acompanhamento e dê o primeiro passo rumo à sua melhor saúde hormonal e metabólica.
          </p>
        </div>

        <div className="packages-grid checkout-grid">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <p className="checkout-note">
          Dúvidas? Fale diretamente com a equipe pelo{' '}
          <a href="https://wa.me/55083999999999" target="_blank" rel="noreferrer">WhatsApp</a>.
        </p>
      </main>
    </div>
  )
}
