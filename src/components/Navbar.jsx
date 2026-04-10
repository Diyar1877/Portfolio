import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../LanguageContext'
import t from '../translations'
import './Navbar.css'

const sectionIds = ['about', 'skills', 'projects', 'bugbounty', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { lang, setLang } = useLang()
  const tx = t[lang]
  const navRef = useRef(null)

  const links = [
    { label: tx.navAbout, href: '#about', id: 'about' },
    { label: tx.navStack, href: '#skills', id: 'skills' },
    { label: tx.navProjects, href: '#projects', id: 'projects' },
    { label: tx.navSecurity, href: '#bugbounty', id: 'bugbounty' },
    { label: tx.navContact, href: '#contact', id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const offset = window.innerHeight * 0.35
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div className={`nav-overlay ${menuOpen ? 'visible' : ''}`} onClick={() => setMenuOpen(false)} />
      <motion.nav
        ref={navRef}
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <a href="#hero" className="nav-logo">
          <span className="logo-num">1877</span>
        </a>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <span className="nav-index">0{i + 1}</span>
              {link.label}
            </motion.a>
          ))}

          <div className="lang-switch">
            <button
              className={`lang-btn ${lang === 'EN' ? 'active' : ''}`}
              onClick={() => setLang('EN')}
            >
              EN
            </button>
            <span className="lang-divider">/</span>
            <button
              className={`lang-btn ${lang === 'DE' ? 'active' : ''}`}
              onClick={() => setLang('DE')}
            >
              DE
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
