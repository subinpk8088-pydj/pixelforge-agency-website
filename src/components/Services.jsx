import { motion } from 'framer-motion'
import './Services.css'

const services = [
  { num: '01', title: 'Brand Identity',    desc: 'Logo systems, typography, color, guidelines — the full visual language your company deserves.', tags: ['Logo','Guidelines','Naming'] },
  { num: '02', title: 'Web Design',        desc: 'Pixel-perfect UI/UX for marketing sites, SaaS products, and e-commerce. Designed in Figma, handed off clean.', tags: ['UI/UX','Figma','Responsive'] },
  { num: '03', title: 'Motion & Video',    desc: 'Brand animations, product demos, social content. We make things move in ways that make people stop scrolling.', tags: ['Animation','After Effects','Social'] },
  { num: '04', title: 'Digital Products',  desc: 'From MVP wireframes to full product design systems. We work alongside your dev team or build it ourselves.', tags: ['Product Design','Design Systems','Prototyping'] },
  { num: '05', title: 'Print & Packaging', desc: 'Business cards, pitch decks, packaging, signage — offline touchpoints that feel as good as the digital ones.', tags: ['Print','Packaging','Decks'] },
  { num: '06', title: 'Creative Strategy', desc: 'Positioning, messaging architecture, and campaign concepts. The thinking that makes all the other work work.', tags: ['Strategy','Copywriting','Campaigns'] },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <div>
          <p className="section-label">What We Do</p>
          <h2 className="section-title">Our <em>Services</em></h2>
        </div>
        <p className="services-sub">We're a small, senior team. Every project gets our full attention — not a junior with a template.</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div key={s.num} className="service-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            whileHover={{ y: -6, borderColor: 'var(--navy)' }}>
            <div className="service-top">
              <span className="service-num">{s.num}</span>
              <span className="service-arrow">→</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-tags">
              {s.tags.map(t => <span key={t} className="s-tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
