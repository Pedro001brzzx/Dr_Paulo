import logo from '../../../assets/LOGO_DR_PAULO.png'

export default function Footer() {
  return (
    <footer>

      {/* ── Contact + Map ── */}
      <div className="footer-contact">
        <div className="footer-contact-info">
          <div className="footer-contact-block">
            <span className="footer-contact-title">Endereço</span>
            <p>Clínica Reabilitar</p>
            <p>Av. Rio Branco, 296</p>
            <p>Centro — Patos, PB · CEP 58700-370</p>
          </div>
          <div className="footer-contact-block">
            <span className="footer-contact-title">Contato e Agendamento</span>
            <a href="https://wa.me/558497728790">WhatsApp: (84) 9 8772-8790</a>
            <a href="mailto:drpaulovieirendocrino@gmail.com">drpaulovieirendocrino@gmail.com</a>
          </div>
          <a href="https://wa.me/558497728790" className="btn-primary footer-wa-btn">
            Falar pelo WhatsApp <span className="arrow">↘</span>
          </a>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.3!2d-37.2795!3d-7.0218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Rio+Branco%2C+296%2C+Centro%2C+Patos+-+PB!5e0!3m2!1spt-BR!2sbr!4v1"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Clínica Reabilitar — Patos PB"
          />
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer-divider"></div>

      {/* ── Brand row ── */}
      <div className="footer-inner">
        <div className="footer-left">
          <img src={logo} alt="Dr. Paulo Vieira" className="footer-logo-img" />
        </div>
        <div className="footer-right">
          <p className="footer-brand-name">DR. PAULO VIEIRA</p>
          <p className="footer-brand-sub">Saúde Hormonal e Metabólica</p>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="footer-divider"></div>
      <p className="footer-copy">© 2026 Dr. Paulo Vieira · CRM PB 15156MFC · RQE 8926 · Todos os direitos reservados</p>

    </footer>
  )
}
