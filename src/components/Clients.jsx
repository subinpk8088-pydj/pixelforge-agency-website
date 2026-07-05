import { motion } from 'framer-motion'
import './Clients.css'

const clients = ['Nexus Labs','Drift Studio','Varda Health','Finlo','Capsule','Motiv AI','Stackly','Auros']

export default function Clients() {
  return (
    <section className="clients-section">
      <p className="clients-label">Trusted by founders and teams at</p>
      <div className="clients-track-wrap">
        <div className="clients-track">
          {[...clients,...clients].map((c,i) => (
            <span key={i} className="client-name">{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
