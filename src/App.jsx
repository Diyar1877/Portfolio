import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LanguageProvider, useLang } from './LanguageContext'
import t from './translations'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import BugBounty from './components/BugBounty'
import Contact from './components/Contact'
import ParticleField from './components/ParticleField'
import ScanLines from './components/ScanLines'
import LoadingScreen from './components/LoadingScreen'
import RocketBg from './components/RocketBg'
import './App.css'

function AppContent() {
  const [loaded, setLoaded] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
  const { lang } = useLang()
  const tx = t[lang]

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      <ParticleField />
      <ScanLines />
      <RocketBg />
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BugBounty />
        <Contact />
      </motion.div>
      <footer className="footer">
        <div className="footer-line" />
        <p className="footer-text">
          <span className="footer-brand">1877</span> &mdash; 1 Byte &middot; 7 Layers &middot; 7 Days &mdash; {tx.footerSlogan}
        </p>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Diyar Mohammed</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
