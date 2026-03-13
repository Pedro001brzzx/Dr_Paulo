export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">

          <div className="contact-info">
            <div className="contact-block">
              <span className="contact-block-title">Endereço</span>
              <p>Clínica Reabilitar</p>
              <p>Av. Rio Branco, 296</p>
              <p>Centro — Patos, PB · CEP 58700-370</p>
            </div>
            <div className="contact-block">
              <span className="contact-block-title">Contato e Agendamento</span>
              <a href="https://wa.me/558497728790">WhatsApp: (84) 9 8772-8790</a>
              <a href="mailto:drpaulovieirendocrino@gmail.com">drpaulovieirendocrino@gmail.com</a>
            </div>
            <a href="https://wa.me/558497728790" className="btn-primary" style={{ background: 'var(--navy)', color: '#fff', marginTop: '8px' }}>
              Falar pelo WhatsApp <span className="arrow">↘</span>
            </a>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.3!2d-37.2795!3d-7.0218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Rio+Branco%2C+296%2C+Centro%2C+Patos+-+PB!5e0!3m2!1spt-BR!2sbr!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Clínica Reabilitar — Patos PB"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
