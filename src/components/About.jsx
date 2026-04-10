import { motion } from 'framer-motion'
import { useLang } from '../LanguageContext'
import t from '../translations'
import './About.css'

export default function About() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="about" className="about">
      <div className="section-container">
        <SectionHeader index="01" title={tx.aboutTitle} />

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-intro">
              {tx.aboutIntro}
            </p>
            <p>
              {tx.aboutText}
            </p>
            <p>
              {tx.aboutPhilosophy} <strong>{tx.about1Byte}</strong>{tx.about1ByteText}
              <strong>{tx.about7Layers}</strong>{tx.about7LayersText}
              <strong>{tx.about7Days}</strong>{tx.about7DaysText}
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat-card">
              <span className="stat-value">{tx.statVulnValue}</span>
              <span className="stat-label">{tx.statVulnLabel}</span>
              <span className="stat-sub">{tx.statVulnSub}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">FiAe</span>
              <span className="stat-label">{tx.statCertLabel}</span>
              <span className="stat-sub">{tx.statCertSub}</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">24/7</span>
              <span className="stat-label">{tx.statOnlineLabel}</span>
              <span className="stat-sub">{tx.statOnlineSub}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SectionHeader({ index, title }) {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-line" />
      <span className="section-index">{index}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </motion.div>
  )
}
