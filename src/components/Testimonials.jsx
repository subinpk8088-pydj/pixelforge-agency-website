import { motion } from 'framer-motion'
import './Testimonials.css'

const reviews = [
  { text: "PixelForge didn't just make us look good — they made us look right. The rebrand changed how investors and clients see us overnight.", name: 'Kiran Patel', role: 'CEO, Nexus Labs', img: 'photo-1560250097-0b93528c311a' },
  { text: "I've worked with five agencies. PixelForge is the first one that felt like a genuine partner — they pushed back when we were wrong and moved fast when we were right.", name: 'Sana Mirza', role: 'Head of Product, Varda Health', img: 'photo-1573497019940-1c28c88b4f3e' },
  { text: "The website they designed for us converted 40% better than our old one within the first month. That's not a small thing.", name: 'Dev Sharma', role: 'Founder, Drift Studio', img: 'photo-1472099645785-5658abf4ff4e' },
]

export default function Testimonials() {
  return (
    <section className="testi-section" id="testimonials">
      <div className="testi-header">
        <p className="section-label">Kind Words</p>
        <h2 className="section-title">What Clients <em>Say</em></h2>
        <div className="divider" style={{ margin: '0 auto' }} />
      </div>
      <div className="testi-grid">
        {reviews.map((r, i) => (
          <motion.div key={r.name} className="testi-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}>
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text">"{r.text}"</p>
            <div className="testi-author">
              <img src={`https://images.unsplash.com/${r.img}?w=80&q=80`} alt={r.name} />
              <div><strong>{r.name}</strong><span>{r.role}</span></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
