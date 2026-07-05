import { motion } from 'framer-motion'
import './Footer.css'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const socials = [
  { name: 'Instagram', href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg> },
  { name: 'Twitter',   href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 5.5c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.6.8-2.5 1-.7-.8-1.8-1.3-2.9-1.3-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.3-4.2-.3.6-.5 1.3-.5 2 0 1.4.7 2.6 1.8 3.3-.7 0-1.3-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1 .1-.3 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.8-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z" strokeLinejoin="round"/></svg> },
  { name: 'LinkedIn',  href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 10v7M7 7v.5M12 10v7M12 13a3 3 0 0 1 6 0v4"/></svg> },
  { name: 'Dribbble',  href: '#', svg: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M8.5 2.5c2 3.5 3 7 3 9.5m-9-6c3.5 1 6.5 1.5 10 1m-2 9c-1-3-2-6-4-9" strokeLinecap="round"/></svg> },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <h2>Ready to Build<br />Something <span>Great?</span></h2>
          <motion.button className="btn-lime" onClick={() => scrollTo('contact')}
            whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
            Start a Project →
          </motion.button>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Pixel<span>Forge</span><span className="dot">.</span></span>
            <p>A creative design agency for brands that want to stand out. Kochi-based, globally minded.</p>
            <div className="footer-socials">
              {socials.map(s => (
                <motion.a key={s.name} href={s.href} aria-label={s.name}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--lime)', borderColor: 'var(--lime)', color: 'var(--navy)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                  {s.svg}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {['Brand Identity','Web Design','Motion & Video','Digital Products','Print & Packaging'].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {[['work','Our Work'],['process','Process'],['team','Team'],['contact','Contact']].map(([id,label]) => (
                <li key={id}><button onClick={() => scrollTo(id)}>{label}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@pixelforge.in">hello@pixelforge.in</a></li>
              <li><a href="tel:+9190000 00000">+91 90000 00000</a></li>
              <li><span>Kochi, Kerala, India</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} PixelForge. All rights reserved. Built by <strong>VertexFlow Digital Solutions</strong>.</p>
          <p className="footer-tag">🎨 Design That Works</p>
        </div>
      </div>
    </footer>
  )
}
