import { useState } from 'react'
import { motion } from 'framer-motion'
import './Work.css'

const projects = [
  { title: 'Nexus Labs Rebrand',   cat: 'Brand Identity', img: 'photo-1561070791-2526d30994b5', year: '2024', color: '#aaee44' },
  { title: 'Drift Studio Website', cat: 'Web Design',      img: 'photo-1467232004584-a241de8bcf5d', year: '2024', color: '#0f1c3f' },
  { title: 'Varda Health App',     cat: 'Product Design',  img: 'photo-1576153192396-180ecef2a715', year: '2024', color: '#6c63ff' },
  { title: 'Finlo Brand System',   cat: 'Brand Identity',  img: 'photo-1558618666-fcd25c85cd64', year: '2023', color: '#ff6b6b' },
  { title: 'Capsule Motion Reel',  cat: 'Motion',          img: 'photo-1574717024653-61fd2cf4d44d', year: '2023', color: '#ffd23f' },
  { title: 'Motiv AI Dashboard',   cat: 'Product Design',  img: 'photo-1551288049-bebda4e38f71', year: '2023', color: '#4ecdc4' },
]

const cats = ['All', 'Brand Identity', 'Web Design', 'Product Design', 'Motion']

export default function Work() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.cat === active)

  return (
    <section className="work-section" id="work">
      <div className="work-header">
        <div>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Recent <em>Projects</em></h2>
        </div>
        <div className="work-filters">
          {cats.map(c => (
            <motion.button key={c} className={`work-filter ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)} whileTap={{ scale: 0.93 }}>
              {c}
            </motion.button>
          ))}
        </div>
      </div>
      <div className="work-grid">
        {filtered.map((p, i) => (
          <motion.div key={p.title} className="work-card"
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -8 }}>
            <div className="work-img-wrap">
              <img src={`https://images.unsplash.com/${p.img}?w=700&q=80`} alt={p.title} loading="lazy" />
              <div className="work-overlay">
                <span className="work-view">View Project →</span>
              </div>
              <span className="work-year">{p.year}</span>
            </div>
            <div className="work-info">
              <span className="work-cat" style={{ color: p.color }}>{p.cat}</span>
              <h3>{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
