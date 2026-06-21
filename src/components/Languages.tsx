import { motion } from "framer-motion"
import { portfolioData } from "../lib/data"
import SectionHeading from "./SectionHeading"

export default function Languages() {
  return (
    <section id="languages" className="section section-alt">
      <div className="container">
        <SectionHeading number="06" title="Languages" />

        <div className="lang-list">
          {portfolioData.languages.map((lang, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="lang-item"
            >
              <div className="lang-info">
                <div>
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
                <span className="lang-pct">{lang.percentage}%</span>
              </div>
              <div className="lang-bar-bg">
                <motion.div
                  className="lang-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
