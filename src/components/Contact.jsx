import { motion } from 'framer-motion'
import { useLang } from '../LanguageContext'
import t from '../translations'
import { SectionHeader } from './About'
import './Contact.css'

const contacts = [
  {
    label: 'LinkedIn',
    value: 'Diyar Mohammed',
    href: 'https://www.linkedin.com/in/diyar-mohammed-321019370/',
    icon: 'in',
  },
  {
    label: 'Email',
    value: 'diyarkhalidmohammed@gmail.com',
    href: 'mailto:diyarkhalidmohammed@gmail.com',
    icon: '@',
  },
  {
    label: 'Phone',
    value: '+49 173 970 7736',
    href: 'tel:+491739707736',
    icon: '#',
  },
]

export default function Contact() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <SectionHeader index="05" title={tx.contactTitle} />

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="contact-text">
            {tx.contactText}
          </p>

          <div className="contact-cards">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="contact-icon">{c.icon}</span>
                <div className="contact-info">
                  <span className="contact-label">{c.label}</span>
                  <span className="contact-value">{c.value}</span>
                </div>
                <span className="contact-arrow">&rarr;</span>
              </motion.a>
            ))}
          </div>

          <div className="contact-terminal">
            <div className="terminal-header">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
            </div>
            <div className="terminal-body">
              <p><span className="t-prompt">$</span> <span className="t-cmd">whoami</span></p>
              <p className="t-output">{tx.termWhoami}</p>
              <p><span className="t-prompt">$</span> <span className="t-cmd">cat /etc/status</span></p>
              <p className="t-output">{tx.termStatus}</p>
              <p><span className="t-prompt">$</span> <span className="t-cmd">dig location.1877.dev</span></p>
              <p className="t-output">{tx.termLocation}</p>
              <p><span className="t-prompt">$</span> <span className="t-cmd">nmap -sV mindset.local</span></p>
              <p className="t-output">PORT&nbsp;&nbsp;STATE&nbsp;&nbsp;SERVICE</p>
              <p className="t-output">443&nbsp;&nbsp;&nbsp;open&nbsp;&nbsp;&nbsp;{tx.termService}</p>
              <p><span className="t-prompt">$</span> <span className="t-cursor">_</span></p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
