import heroPhoto from '../../../assets/VSP_6256.JPG.jpeg'

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-watermark">VIEIRA</div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-crm">CRM PB 15156MFC &nbsp;·&nbsp; RQE 8926</p>
          <h1 className="hero-name">Dr. Paulo<br/>Vieira</h1>
          <p className="hero-title">Saúde Hormonal &amp; Metabólica</p>
          <p className="hero-desc">
            Mais energia, equilíbrio hormonal e composição corporal ideal — com protocolos personalizados, baseados em evidência científica e no acompanhamento próximo que você merece.
          </p>
          <div className="hero-badges">
            <span className="badge">Medicina Hormonal</span>
            <span className="badge">Modulação Metabólica</span>
            <span className="badge">Alta Performance</span>
          </div>
        </div>

        <div className="hero-photo-col">
          <div className="hero-card">
            <div className="hero-card-overlay" />
            <img
              src={heroPhoto}
              alt="Dr. Paulo Vieira"
              className="hero-photo-img"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
