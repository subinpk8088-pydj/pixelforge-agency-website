import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <motion.div className="contact-left"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}>
          <p className="section-label">Work With Us</p>
          <h2 className="section-title">Start a<br /><em>Project</em></h2>
          <div className="divider" />
          <p className="contact-desc">We take on 4–6 new projects per quarter. Tell us about yours and we'll get back within 24 hours.</p>
          <div className="contact-details">
            {[['✉️','Email','hello@pixelforge.in'],['📞','Phone','+91 90000 00000'],['📍','Studio','Kochi, Kerala']].map(([icon,label,val]) => (
              <div key={label} className="contact-detail">
                <span>{icon}</span>
                <div><p className="cd-label">{label}</p><p className="cd-val">{val}</p></div>
              </div>
            ))}
          </div>
          <div className="contact-availability">
            <span className="avail-dot" />
            <p>Currently available for Q3 2025 projects</p>
          </div>
        </motion.div>

        <motion.div className="contact-form-wrap"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}>
          {submitted ? (
            <div className="contact-success">
              <span>🎉</span>
              <strong>Message sent!</strong>
              <p>We'll review your brief and get back to you within 24 hours.</p>
            </div>
          ) : (
            <div className="contact-form">
              <div className="cf-row">
                <div className="cf-group"><label>Your Name</label><input type="text" placeholder="Full name" /></div>
                <div className="cf-group"><label>Email</label><input type="email" placeholder="you@company.com" /></div>
              </div>
              <div className="cf-group"><label>Company</label><input type="text" placeholder="Company name" /></div>
              <div className="cf-group">
                <label>Service Needed</label>
                <select>
                  <option>Brand Identity</option>
                  <option>Web Design</option>
                  <option>Motion & Video</option>
                  <option>Digital Product</option>
                  <option>Print & Packaging</option>
                  <option>Creative Strategy</option>
                  <option>Multiple / Not Sure</option>
                </select>
              </div>
              <div className="cf-row">
                <div className="cf-group">
                  <label>Budget Range</label>
                  <select>
                    <option>₹1L – ₹3L</option>
                    <option>₹3L – ₹7L</option>
                    <option>₹7L – ₹15L</option>
                    <option>₹15L+</option>
                  </select>
                </div>
                <div className="cf-group">
                  <label>Timeline</label>
                  <select>
                    <option>ASAP</option>
                    <option>Within 1 month</option>
                    <option>1–3 months</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>
              <div className="cf-group"><label>Tell Us About Your Project</label><textarea placeholder="What are you building? What problem are you trying to solve? What does success look like?" /></div>
              <motion.button className="cf-submit"
                onClick={() => setSubmitted(true)}
                whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                Send Brief →
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
