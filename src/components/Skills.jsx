import { motion } from 'framer-motion'
import { useLang } from '../LanguageContext'
import t from '../translations'
import { SectionHeader } from './About'
import './Skills.css'

const skillData = [
  {
    categoryKey: 'skillClientLayer',
    icon: '{}',
    skills: [
      { name: 'Angular', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'React', level: 50 },
      { name: 'HTML / CSS', level: 100 },
    ],
  },
  {
    categoryKey: 'skillServerLayer',
    icon: '>>',
    skills: [
      { name: 'Symfony / PHP', level: 80 },
      { name: 'SQL / MySQL', level: 60 },
      { name: 'REST APIs', level: 70 },
      { name: 'Linux', level: 90 },
    ],
  },
  {
    categoryKey: 'skillOffSec',
    icon: '##',
    skills: [
      { name: 'Web App Pentesting', level: 60 },
      { name: 'Bug Bounty Hunting', level: 55 },
      { name: 'OWASP Top 10', level: 65 },
      { name: 'Recon & Attack Surface', level: 50 },
    ],
  },
  {
    categoryKey: 'skillArsenal',
    icon: '~/.',
    skills: [
      { name: 'Git', level: 100 },
      { name: 'PhpStorm / IDE', level: 100 },
      { name: 'Burp Suite', level: 80 },
      { name: 'Docker', level: 74 },
      { name: 'MQTT', level: 75 },
      { name: 'Node-RED', level: 60 },
    ],
  },
]

export default function Skills() {
  const { lang } = useLang()
  const tx = t[lang]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <SectionHeader index="02" title={tx.skillsTitle} />

        <div className="skills-grid">
          {skillData.map((group, gi) => (
            <motion.div
              key={group.categoryKey}
              className="skill-group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="skill-group-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{tx[group.categoryKey]}</h3>
              </div>

              <div className="skill-list">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.05 }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: false }}
                        transition={{ duration: 1, delay: gi * 0.1 + si * 0.1 + 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
