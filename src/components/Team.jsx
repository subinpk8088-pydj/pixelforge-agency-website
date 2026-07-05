import { motion } from 'framer-motion'
import './Team.css'

const members = [
  { name: 'Aryan Mehta',   role: 'Founder & Creative Director', img: 'photo-1507003211169-0a1dd7228f2d', exp: '12 yrs', prev: 'ex-Pentagram' },
  { name: 'Neha Kapoor',   role: 'Lead Brand Designer',          img: 'photo-1573496359142-b8d87734a5a2', exp: '8 yrs',  prev: 'ex-Landor' },
  { name: 'Rahul Sinha',   role: 'Head of Web & Product',        img: 'photo-1500648767791-00dcc994a43e', exp: '9 yrs',  prev: 'ex-IDEO' },
  { name: 'Priya Joshi',   role: 'Motion Designer',              img: 'photo-1438761681033-6461ffad8d80', exp: '6 yrs',  prev: 'ex-Buck' },
]

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-header">
        <p className="section-label">The People</p>
        <h2 className="section-title">Senior Team,<br /><em>Always</em></h2>
        <div className="divider" />
        <p className="team-sub">No account managers, no handoffs to juniors. You work directly with the people doing the work.</p>
      </div>
      <div className="team-grid">
        {members.map((m, i) => (
          <motion.div key={m.name} className="team-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}>
            <div className="team-img-wrap">
              <img src={`https://images.unsplash.com/${m.img}?w=400&q=80`} alt={m.name} loading="lazy" />
            </div>
            <div className="team-info">
              <h3>{m.name}</h3>
              <p className="team-role">{m.role}</p>
              <div className="team-meta">
                <span>{m.exp} exp</span>
                <span className="team-prev">{m.prev}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
