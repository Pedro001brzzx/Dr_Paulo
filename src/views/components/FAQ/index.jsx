import { faqs } from '../../../models/faqs'
import { useFaq } from '../../../controllers/useFaq'

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => onToggle(faq.id)}>
        <p dangerouslySetInnerHTML={{ __html: faq.questionHtml || faq.question }} />
        <span className="faq-icon"><ChevronIcon /></span>
      </button>
      <div className="faq-answer">
        <div className="faq-answer-inner">
          <p>{faq.answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { openId, toggle } = useFaq(1)

  return (
    <div style={{ marginBottom: '80px' }}>
      <div className="faq-header">
        <div className="tag-label" style={{ borderColor: 'rgba(179,119,96,.4)', color: '#b37760', justifyContent: 'center' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          Sua dúvida pode estar aqui
        </div>
        <h2 className="section-title">FAQ — <span>Perguntas Frequentes</span></h2>
      </div>

      <div className="faq-list">
        {faqs.map(faq => (
          <FaqItem key={faq.id} faq={faq} isOpen={openId === faq.id} onToggle={toggle} />
        ))}
      </div>
    </div>
  )
}
