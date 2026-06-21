import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { BrandMark } from './Brand.jsx'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  /* nav scroll state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close the mobile menu whenever the route changes */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  /* lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="wrap nav-in">
          <Link className="brand" to="/" aria-label="Afrikatek home">
            <BrandMark width={28} />
            <span className="wm">Afrikatek<span className="dot">.</span></span>
          </Link>
          <nav>
            <ul className="nav-links">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <span className="mag"><a className="btn btn-gold" href="mailto:hello@afrikatek.co.za">Email us <span className="arrow">&rarr;</span></a></span>
          </div>
          <button className="nav-burger" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        <button className="mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>&times;</button>
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</Link>
        ))}
      </div>
    </>
  )
}
