import { motion } from "framer-motion"
import { portfolioData } from "../lib/data"
import SectionHeading from "./SectionHeading"

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading number="03" title="Technical Skills" />

        <div className="skills-grid">
          {portfolioData.skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="skill-card"
            >
              <h3><span className="dot" /> {cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span key={j} className="skill-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
