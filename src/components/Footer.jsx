import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { BrandMark } from './Brand.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="foot">
      <img className="africa-bg" src="/assets/africa-dots-dark.svg" alt="" aria-hidden="true" />
      <div className="wrap foot-main">
        <div>
          <Link className="brand" to="/" style={{ textDecoration: 'none' }}>
            <BrandMark width={26} />
            <span className="wm" style={{ color: '#fff' }}>Afrikatek<span className="dot">.</span></span>
          </Link>
          <p className="blurb">Engineering Africa's digital future. Secure, simple solutions in software, cloud, web and brand — built in South Africa.</p>
          <div className="social">
            <a href="https://www.linkedin.com/company/afrikatek-solutions" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23h-4V8z" /></svg></a>
            <a href="#" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8-9.2L1 2h7.1l4.9 6.4L18.9 2zm-1.2 18h1.9L7.1 4H5.1l12.6 16z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" /></svg></a>
            <a href="mailto:hello@afrikatek.co.za" aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
        <div>
          <h4>Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Software Engineering</Link></li>
            <li><Link to="/services">Cloud Infrastructure</Link></li>
            <li><Link to="/services">Web Design &amp; Dev</Link></li>
            <li><Link to="/services">Systems Integration</Link></li>
            <li><Link to="/services">Brand &amp; Social</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li><a href="mailto:hello@afrikatek.co.za">hello@afrikatek.co.za</a></li>
            <li><a href="tel:+27679725177">+27 67 972 5177</a></li>
            <li>Halfway Gardens, Midrand</li>
            <li>South Africa · 1686</li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-btm">
        <span>© <span id="yr">{year}</span> Afrikatek Solutions (Pty) Ltd</span>
        <span>Engineering Africa's Digital Future</span>
      </div>
    </footer>
  )
}
