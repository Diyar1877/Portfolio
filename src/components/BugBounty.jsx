import { motion } from 'framer-motion'
import { useLang } from '../LanguageContext'
import t from '../translations'
import { SectionHeader } from './About'
import './BugBounty.css'

function getReports(tx) {
  return [
    {
      id: '#3652133',
      platform: 'Syfe',
      title: 'S3 Bucket Public Listing & Download',
      severity: 'Medium',
      type: 'Misconfiguration',
      description: tx.bbReport1Desc,
      method: tx.bbReport1Method,
    },
    {
      id: '#3652218',
      platform: 'Syfe',
      title: 'Subdomain Takeover via Dangling CNAME',
      severity: 'Medium',
      type: 'Subdomain Takeover',
      description: tx.bbReport2Desc,
      method: tx.bbReport2Method,
    },
    {
      id: '#3655598',
      platform: 'CLEAR',
      title: 'CORS Misconfiguration \u2014 Credentialed Cross-Origin Access',
      severity: 'Medium',
      type: 'CORS',
      description: tx.bbReport3Desc,
      method: tx.bbReport3Method,
    },
  ]
}

const severityColor = {
  Critical: '#ff0040',
  High: '#ff4400',
  Medium: '#ff8800',
  Low: '#ffcc00',
}

export default function BugBounty() {
  const { lang } = useLang()
  const tx = t[lang]
  const reports = getReports(tx)

  return (
    <section id="bugbounty" className="bugbounty">
      <div className="section-container">
        <SectionHeader index="04" title={tx.bbTitle} />

        <motion.div
          className="bb-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bb-handle">
            <span className="handle-at">@</span>dido1877
            <span className="handle-platform">{tx.bbOnPlatform}</span>
          </div>
        </motion.div>

        <div className="bb-reports">
          {reports.map((report, i) => (
            <motion.div
              key={report.id}
              className="bb-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bb-card-top">
                <div className="bb-meta">
                  <span className="bb-id">{report.id}</span>
                  <span
                    className="bb-severity"
                    style={{ color: severityColor[report.severity], borderColor: severityColor[report.severity] + '40' }}
                  >
                    {report.severity}
                  </span>
                  <span className="bb-type">{report.type}</span>
                </div>
                <span className="bb-platform">{report.platform}</span>
              </div>

              <h4 className="bb-title">{report.title}</h4>
              <p className="bb-desc">{report.description}</p>

              <div className="bb-method">
                <span className="bb-method-label">{tx.bbMethodLabel}</span>
                <span>{report.method}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bb-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="note-icon">&gt;_</span>
          {tx.bbNote}
        </motion.div>
      </div>
    </section>
  )
}
