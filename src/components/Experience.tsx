import { motion } from "framer-motion"
import { portfolioData } from "../lib/data"
import SectionHeading from "./SectionHeading"

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeading number="02" title="Experience" />

        <div className="timeline">
          {portfolioData.experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="tl-header">
                  <h3><BriefcaseIcon /> {exp.role}</h3>
                  <span className="tl-period">{exp.period}</span>
                </div>
                <div className="tl-meta">
                  <PinIcon /> {exp.company}, {exp.location}
                </div>
                <ul className="tl-points">
                  {exp.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  )
}
