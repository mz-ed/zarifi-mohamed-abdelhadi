import { motion } from "framer-motion"
import { portfolioData } from "../lib/data"
import SectionHeading from "./SectionHeading"

export default function Philosophy() {
  return (
    <section id="philosophy" className="section">
      <div className="container">
        <SectionHeading number="07" title="Philosophy" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="philosophy-card"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="var(--accent-glow)" style={{ marginBottom: 24 }}>
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
          <blockquote>&ldquo;{portfolioData.philosophy}&rdquo;</blockquote>
          <div className="attribution">
            <span className="line" />
            Zarifi Mohamed Abdelhadi
            <span className="line" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
