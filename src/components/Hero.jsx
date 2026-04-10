import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../LanguageContext'
import t from '../translations'
import './Hero.css'

export default function Hero() {
  const { lang } = useLang()
  const tx = t[lang]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" className="hero">
      <img src="/moon.png" alt="" className={`hero-moon ${scrolled ? 'moon-hidden' : ''}`} />
      <div className="hero-grid-overlay" />

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h1 className="hero-name">
            <span className="hero-name-first">Diyar</span>
            <span className="hero-name-last">Mohammed</span>
          </h1>

          <div className="hero-tagline">
            <span className="tagline-bracket">&lt;</span>
            <span className="tagline-text">{tx.heroTagline}</span>
            <span className="tagline-cursor">_</span>
            <span className="tagline-bracket">/&gt;</span>
          </div>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {tx.heroSub}
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <a href="#projects" className="cta-btn cta-primary">
            <span className="cta-icon">&gt;</span> {tx.heroCta1}
          </a>
          <a href="#contact" className="cta-btn cta-secondary">
            <span className="cta-icon">#</span> {tx.heroCta2}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
