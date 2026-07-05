import { motion } from 'framer-motion'
import './Process.css'

const steps = [
  { num: '01', title: 'Discovery',    desc: 'We start by understanding your business, your audience, and what success actually looks like. No assumptions.', duration: '1–2 days' },
  { num: '02', title: 'Strategy',     desc: 'Positioning, creative direction, moodboards, and a project roadmap. Alignment before execution.', duration: '2–3 days' },
  { num: '03', title: 'Design',       desc: 'Iterative design rounds with clear feedback loops. You see real work early — not at the finish line.', duration: '1–3 weeks' },
  { num: '04', title: 'Refinement',   desc: 'Two rounds of revisions included. We sweat the details so you don\'t have to.', duration: '3–5 days' },
  { num: '05', title: 'Delivery',     desc: 'Final files, handoff docs, brand guidelines, and a walkthrough call. Everything you need, nothing you don\'t.', duration: '1–2 days' },
]

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="process-header">
        <p className="section-label">How We Work</p>
        <h2 className="section-title">Our <em>Process</em></h2>
        <div className="divider" />
        <p className="process-sub">Clear, fast, and without surprises. We've refined this across 48 projects.</p>
      </div>
      <div className="process-steps">
        {steps.map((s, i) => (
          <motion.div key={s.num} className="process-step"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>
            <div className="step-left">
              <span className="step-num">{s.num}</span>
              <div className="step-line" />
            </div>
            <div className="step-body">
              <div className="step-top">
                <h3>{s.title}</h3>
                <span className="step-dur">{s.duration}</span>
              </div>
              <p>{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
