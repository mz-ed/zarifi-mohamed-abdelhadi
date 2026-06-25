import { motion } from "framer-motion";
import { portfolioData } from "../lib/data";
import SectionHeading from "./SectionHeading";

export default function AiResearch() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHeading
          number="05"
          title="Recent AI Research & Deep Learning"
        />

        <div className="research-grid">
          {portfolioData.aiResearch.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="project-card"
            >
              <div className="project-top">
                <FlaskIcon />
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    <ExternalIcon />
                  </a>
                )}
                {!p.link && <ExternalIcon />}
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="proj-tag alt">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--text-muted)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent-light)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginBottom: 16 }}
    >
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
      <path d="M6.453 15h11.094" />
      <path d="M8.5 2h7" />
    </svg>
  );
}
