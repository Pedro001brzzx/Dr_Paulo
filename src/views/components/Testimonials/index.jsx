import { useState } from 'react'
import { testimonials } from '../../../models/testimonials'

function TestimonialCard({ quote, result, source }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">
        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
      </div>
      <blockquote>"{quote}"</blockquote>
      <p className="testimonial-result">{result}</p>
      <p className="testimonial-source">{source}</p>
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="testimonials-header">
          <div className="tag-label" style={{ justifyContent: 'center' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Resultados reais
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            O que dizem os <span>pacientes</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'rgba(212,204,180,.6)', fontSize: '15px', marginTop: '12px' }}>
            Depoimentos publicados no Instagram do Dr. Paulo Vieira
          </p>
        </div>

        <div className="testimonial-carousel">
          <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <div className="carousel-track-wrapper">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map(t => (
                <div key={t.id} className="carousel-slide">
                  <TestimonialCard quote={t.quote} result={t.result} source={t.source} />
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
