import { motion } from 'framer-motion'
import { useLang } from '../LanguageContext'
import t from '../translations'
import { SectionHeader } from './About'
import './Projects.css'

function getProjects(tx) {
  return [
    {
      title: 'Safety Doors',
      url: 'https://safety-doors.com',
      description: tx.project1Desc,
      tech: ['Angular', 'Symfony', 'TypeScript', 'PHP', 'MySQL', 'NGXS'],
      role: tx.project1Role,
      highlights: [tx.project1H1, tx.project1H2, tx.project1H3, tx.project1H4],
    },
    {
      title: 'Safety Doors Video',
      url: 'https://video.safety-doors.app',
      description: tx.project2Desc,
      tech: ['Angular', 'Python', 'Flask', 'TypeScript', 'Material Design'],
      role: tx.project2Role,
      highlights: [tx.project2H1, tx.project2H2, tx.project2H3, tx.project2H4],
    },
  ]
}

export default function Projects() {
  const { lang } = useLang()
  const tx = t[lang]
  const projects = getProjects(tx)

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <SectionHeader index="03" title={tx.projectsTitle} />

        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="project-header">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span className="link-arrow">&nearr;</span> Live
                </a>
              </div>
              <span className="project-role">{project.role}</span>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-highlights">
              {project.highlights.map(h => (
                <div key={h} className="highlight-item">
                  <span className="highlight-marker">&gt;</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="project-tech">
              {project.tech.map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>

            <div className="project-glow" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
