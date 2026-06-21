import { motion } from "framer-motion"
import { portfolioData } from "../lib/data"
import SectionHeading from "./SectionHeading"

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading number="01" title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="about-grid"
        >
          <div className="about-text">
            {portfolioData.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="edu-card">
            <h3><span className="dot" /> Education</h3>
            <p className="degree">{portfolioData.education.degree}</p>
            <p className="institution">{portfolioData.education.institution}</p>
            <p className="duration">{portfolioData.education.duration}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
