import { motion } from 'framer-motion'
import './Hero.css'

const fade = (delay) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.1, 0.25, 1] }
})

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  return (
    <section className="hero" id="home">
      <div className="hero-noise" />
      <div className="hero-inner">
        <div className="hero-text">
          <motion.div className="hero-badge" {...fade(0.1)}>
            <span className="badge-dot" /> Available for new projects
          </motion.div>
          <motion.h1 {...fade(0.25)}>
            We Design<br />Things That<br /><em>Actually Work.</em>
          </motion.h1>
          <motion.p className="hero-sub" {...fade(0.45)}>
            Brand identity, web design, motion, and digital products — built for
            startups and scale-ups that care about the details.
          </motion.p>
          <motion.div className="hero-btns" {...fade(0.6)}>
            <motion.button className="btn-lime" onClick={() => scrollTo('contact')}
              whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              Start a Project
            </motion.button>
            <motion.button className="btn-outline" onClick={() => scrollTo('work')}
              whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              View Our Work
            </motion.button>
          </motion.div>
        </div>
        <motion.div className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80" alt="Creative design workspace" />
          <motion.div className="hero-card card1"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}>
            <strong>48</strong><span>Projects Delivered</span>
          </motion.div>
          <motion.div className="hero-card card2"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}>
            <strong>4.9★</strong><span>Client Rating</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
