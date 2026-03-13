import { Link } from 'react-router-dom'
import { useNavbar } from '../../../controllers/useNavbar'
import logo from '../../../assets/Logo_dr_paulo_correta.png'

export default function Navbar() {
  const { scrolled } = useNavbar()

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        <img src={logo} alt="Dr. Paulo Vieira" className="nav-logo-icon" />
      </a>

      <ul className="nav-links">
        <li><a href="#features">Protocolos</a></li>
        <li><a href="#audience">Para quem é</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#testimonials">Resultados</a></li>
        <li><a href="#process">Como funciona</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <Link to="/checkout" className="nav-cta">Agendar consulta</Link>
    </nav>
  )
}
