import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import usePageMotion from './hooks/usePageMotion.js'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Insights from './pages/Insights.jsx'
import Contact from './pages/Contact.jsx'

const TITLES = {
  '/': "Afrikatek Solutions — Engineering Africa's Digital Future",
  '/services': 'Services — Afrikatek Solutions',
  '/work': 'Work — Afrikatek Solutions',
  '/about': 'About — Afrikatek Solutions',
  '/insights': 'Insights — Afrikatek Solutions',
  '/contact': 'Contact — Afrikatek Solutions',
}

export default function App() {
  const location = useLocation()

  /* scroll to top + set the document title on every route change */
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[location.pathname] || 'Afrikatek Solutions'
  }, [location.pathname])

  /* re-wire reveals / count-ups / parallax / hero line-draw for the new page */
  usePageMotion(location.pathname)

  return (
    <>
      <Nav />
      <main>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
