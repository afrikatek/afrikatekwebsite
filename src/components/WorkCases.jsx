import { Link } from 'react-router-dom'
import { ArrowUpRight, Lock } from 'lucide-react'

/* Live client sites — shared by the Work page and the Home "Selected work" section
   so both render the exact same browser-snippet previews. */
export const CASES = [
  {
    href: 'https://sotbox-engineering-site.webflow.io/',
    host: 'sotbox-engineering-site.webflow.io',
    shot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsotbox-engineering-site.webflow.io%2F?w=1280',
    alt: 'Sotbox Engineering homepage',
    tags: ['Web Design', 'Webflow', 'Brand'],
    title: 'Sotbox Engineering',
    desc: 'A modern site for a mining engineering & manufacturing firm.',
  },
  {
    href: 'https://www.anchorrisktransfer.com/',
    host: 'anchorrisktransfer.com',
    shot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.anchorrisktransfer.com%2F?w=1280',
    alt: 'Anchor Risk Transfer homepage',
    tags: ['Web', 'Microsoft 365', 'Social'],
    title: 'Anchor Risk Transfer',
    desc: 'Brand, web, email & social for a risk-transfer firm in Mauritius.',
  },
  {
    href: 'https://www.assessproconsultants.com/',
    host: 'assessproconsultants.com',
    shot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.assessproconsultants.com%2F?w=1280',
    alt: 'AssessPro Consultants homepage',
    tags: ['Web', 'Email Hosting'],
    title: 'AssessPro Consultants',
    desc: 'Digital presence & email for a risk-assessment firm in Zambia.',
  },
  {
    href: 'https://www.solidriskadvisors.co.za/',
    host: 'solidriskadvisors.co.za',
    shot: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.solidriskadvisors.co.za%2F?w=1280',
    alt: 'Solid Risk Advisors homepage',
    tags: ['Web', 'Social', 'Microsoft 365'],
    title: 'Solid Risk Advisors',
    desc: 'Reinsurance broking — web, social, managed email & the Titanium platform.',
  },
]

export function CaseCards() {
  return (
    <>
      {CASES.map((c) => (
        <a className="case" href={c.href} target="_blank" rel="noopener" key={c.host}>
          <div className="shot">
            <div className="bar">
              <i style={{ background: '#E5654A' }}></i>
              <i style={{ background: '#E0A23C' }}></i>
              <i style={{ background: '#3E8E6F' }}></i>
              <span className="u">{c.host}</span>
            </div>
            <span className="live">Live site</span>
            <div className="view"><img src={c.shot} alt={c.alt} loading="lazy" /></div>
          </div>
          <div className="case-body">
            <div className="tags">{c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <span className="go">Visit live site <ArrowUpRight style={{ width: '16px', height: '16px' }} /></span>
          </div>
        </a>
      ))}
    </>
  )
}

export function BankCard({ to = '/contact' }) {
  return (
    <Link className="bankcard" to={to} data-reveal>
      <div className="gridbg"></div>
      <div className="bk-l">
        <span className="tag">Salesforce</span><span className="tag">Kafka</span><span className="tag">AWS</span><span className="tag">gRPC</span>
        <h3>Enterprise integrations for major South African banks.</h3>
        <p>We consult on and build financial-grade integrations — event streaming, APIs and data flows across Salesforce, Kafka, AWS and gRPC.</p>
      </div>
      <span className="btn btn-gold" style={{ position: 'relative', zIndex: 2, flex: 'none' }}>Confidential — talk to us <Lock style={{ width: '15px', height: '15px' }} /></span>
    </Link>
  )
}
