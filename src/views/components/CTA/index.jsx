import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '16px' }}>
          Pronto para <span>transformar</span><br/>sua saúde?
        </h2>
        <p>
          Agende sua consulta agora mesmo e dê o primeiro passo para uma vida com mais energia, equilíbrio hormonal e qualidade real.
        </p>
        <Link to="/checkout" className="btn-primary">
          Agendar consulta agora <span className="arrow">↘</span>
        </Link>
      </div>
    </section>
  )
}
