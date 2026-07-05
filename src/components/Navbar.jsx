import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = ['Services', 'Work', 'Process', 'Team']
const ids   = ['services', 'work', 'process', 'team']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo">
          Pixel<span>Forge</span><span className="dot">.</span>
        </a>
        <ul className="nav-links">
          {links.map((l, i) => (
            <li key={l}>
              <button className="nav-link-btn" onClick={() => scrollTo(ids[i])}>
                {l}<span className="nav-underline" />
              </button>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <motion.button className="nav-cta" onClick={() => scrollTo('contact')}
            whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Start a Project
          </motion.button>
        </div>
        <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.22 }}>
            {links.map((l, i) => (
              <button key={l} onClick={() => scrollTo(ids[i])}>{l}</button>
            ))}
            <motion.button className="mobile-cta" whileTap={{ scale: 0.95 }} onClick={() => scrollTo('contact')}>
              Start a Project →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
