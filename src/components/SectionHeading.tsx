import { motion } from "framer-motion"

interface Props {
  number: string
  title: string
}

export default function SectionHeading({ number, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "48px",
      }}
    >
      <span className="section-num">{number}</span>
      <div className="section-line" />
      <h2 className="section-title">{title}</h2>
    </motion.div>
  )
}
