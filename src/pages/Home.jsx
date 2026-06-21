import { Link } from 'react-router-dom'
import {
  Code2, Palette, Monitor, Mail, Cloud, Megaphone, GitMerge, ShieldCheck,
  Umbrella, Landmark, HardHat, ClipboardCheck, Briefcase, Rocket,
  ArrowRight,
} from 'lucide-react'
import AfricaNetwork from '../components/AfricaNetwork.jsx'
import { CaseCards, BankCard } from '../components/WorkCases.jsx'

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="gridbg"></div>
        <div className="glow gold" style={{ width: '680px', height: '680px', left: '-220px', bottom: '-260px' }}></div>
        <AfricaNetwork />
        <div className="hero-grad"></div>
        <div className="wrap">
          <div className="ey light">Software · Cloud · Brand · Integration</div>
          <h1 className="display" style={{ marginTop: '26px' }}>
            <span className="kin"><span>Engineering</span></span>
            <span className="kin"><span>Africa's digital</span></span>
            <span className="kin"><span>future<span className="dot">.</span></span></span>
          </h1>
          <p className="sub">We design, build, and manage the technology that helps organizations across Africa establish, modernize, and grow — from a single line of code to brand, cloud, and launch.</p>
          <div className="hero-actions">
            <span className="mag"><a className="btn btn-primary btn-lg" href="mailto:hello@afrikatek.co.za">Start a conversation <span className="arrow">&rarr;</span></a></span>
            <Link className="btn btn-light btn-lg" to="/work">See our work</Link>
          </div>
          <div className="hero-meta" data-reveal>
            <div><div className="n">07</div><div className="l">Core service lines</div></div>
            <div><div className="n">03<span className="dot">.</span></div><div className="l">Countries delivered in</div></div>
            <div><div className="n">Midrand</div><div className="l">Built in South Africa</div></div>
          </div>
        </div>
        <div className="scroll-hint"><span>Scroll</span><span className="line"></span></div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className="dark-sec ink-2" style={{ padding: 0 }}>
        <div className="marquee">
          <div className="marquee-track">
            {[
              'Software Engineering', 'Cloud Infrastructure', 'Website Design & Development', 'Systems Integration',
              'Microsoft 365 & Email', 'Brand Management', 'Social Media', 'DevOps & Monitoring',
              'Software Engineering', 'Cloud Infrastructure', 'Website Design & Development', 'Systems Integration',
              'Microsoft 365 & Email', 'Brand Management', 'Social Media', 'DevOps & Monitoring',
            ].map((item, i) => (
              <span className="marquee-item" key={i}><span className="d"></span>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="sec">
        <div className="wrap split narrow" style={{ alignItems: 'center' }}>
          <div data-reveal>
            <div className="ey">Who we are</div>
            <h2 className="h2" style={{ marginTop: '18px' }}>A senior technology partner — <span className="ital">not a portal full of forms.</span></h2>
            <p className="lead" style={{ marginTop: '24px' }}>Afrikatek Solutions is a South African technology company spanning software engineering, web, cloud, email, social and brand — with deep enterprise integration experience.</p>
            <p style={{ marginTop: '18px', color: 'var(--graph)', fontSize: '16px', lineHeight: 1.75 }}>We were founded to empower businesses across Africa through innovative technology and digital transformation. From a contract-management platform for a reinsurance broker to integrations for major banks, we work as one accountable partner — and we stand behind what we ship.</p>
            <span className="mag" style={{ marginTop: '30px', display: 'inline-block' }}><Link className="btn btn-ghost" to="/about">Our story <span className="arrow">&rarr;</span></Link></span>
          </div>
          <div className="media" style={{ height: '520px' }} data-reveal data-parallax="0.04">
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1100&q=80" alt="Afrikatek team collaborating" />
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="sec" style={{ background: 'var(--off)', paddingTop: '96px' }}>
        <div className="wrap">
          <div className="head-row">
            <div className="section-head" data-reveal>
              <div className="ey">What we do</div>
              <h2 className="h2">Seven ways we move you forward.</h2>
            </div>
            <span className="mag" data-reveal><Link className="btn btn-ghost" to="/services">All services <span className="arrow">&rarr;</span></Link></span>
          </div>
          <div className="cards" data-reveal-stagger>
            <div className="card"><div className="ic"><Code2 /></div><div className="cn">01</div><h3 className="h3">Software Engineering</h3><p>Custom enterprise software and solution architecture — from APIs to full platforms, built to scale.</p></div>
            <div className="card"><div className="ic"><Palette /></div><div className="cn">02</div><h3 className="h3">Website Design</h3><p>Brand-led interface and experience design that turns visitors into customers.</p></div>
            <div className="card"><div className="ic"><Monitor /></div><div className="cn">03</div><h3 className="h3">Website Development</h3><p>Fast, accessible, maintainable websites and web apps, engineered to last.</p></div>
            <div className="card"><div className="ic"><Mail /></div><div className="cn">04</div><h3 className="h3">Email &amp; Microsoft 365</h3><p>Professional, secure business email and Microsoft 365 — configured, migrated, supported.</p></div>
            <div className="card"><div className="ic"><Cloud /></div><div className="cn">05</div><h3 className="h3">Cloud Infrastructure</h3><p>Architecture, deployment and management on Azure and AWS, with monitoring built in.</p></div>
            <div className="card"><div className="ic"><Megaphone /></div><div className="cn">06</div><h3 className="h3">Social Media</h3><p>Consistent, on-brand presence and content across the channels that matter.</p></div>
            <div className="card"><div className="ic"><GitMerge /></div><div className="cn">07</div><h3 className="h3">Systems Integration</h3><p>Salesforce, Kafka, AWS and gRPC integrations for enterprise-grade data flows.</p></div>
            <div className="card feat"><div className="ic"><ShieldCheck /></div><h3 className="h3">Brand Management</h3><p>Identity, guidelines and stewardship that keep your brand coherent as you grow — across every touchpoint.</p></div>
          </div>
        </div>
      </section>

      {/* ===== SELECTED WORK ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="head-row">
            <div className="section-head" data-reveal>
              <div className="ey">Selected work</div>
              <h2 className="h2">Proof, not promises.</h2>
            </div>
            <span className="mag" data-reveal><Link className="btn btn-ghost" to="/work">View all work <span className="arrow">&rarr;</span></Link></span>
          </div>
          <div className="case-grid" data-reveal-stagger>
            <CaseCards />
          </div>
          <BankCard />
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="sec" style={{ background: 'var(--off)' }}>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="ey">How we engage</div>
            <h2 className="h2">A clear path from idea to impact.</h2>
            <p className="lead">One accountable team across the whole journey — no handoffs, no finger-pointing.</p>
          </div>
          <div className="proc" data-reveal-stagger>
            <div className="pstep"><span className="pnode"></span><h3>Discover &amp; scope</h3><p>We map the problem, your users, and the constraints — then agree a plan with honest timelines.</p></div>
            <div className="pstep"><span className="pnode"></span><h3>Design &amp; architect</h3><p>Brand-led UX and solution architecture, validated early so there are no surprises later.</p></div>
            <div className="pstep"><span className="pnode"></span><h3>Build &amp; integrate</h3><p>Engineered, tested and integrated into your stack — Salesforce, Kafka, AWS, and more.</p></div>
            <div className="pstep"><span className="pnode"></span><h3>Operate &amp; grow</h3><p>Hosting, monitoring, support and iteration. We stay on as a long-term partner.</p></div>
          </div>
        </div>
      </section>

      {/* ===== STATS + WHY (dark) ===== */}
      <section className="dark-sec sec">
        <div className="gridbg"></div>
        <div className="glow" style={{ width: '560px', height: '560px', right: '-200px', top: '-220px' }}></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-head" data-reveal>
            <div className="ey light">By the numbers</div>
            <h2 className="h2" style={{ color: '#fff' }}>Trusted across borders.</h2>
          </div>
          <div className="stats" data-reveal data-count>
            <div className="stat"><div className="n"><span data-to="7">7</span></div><div className="l">Core service lines, under one roof</div></div>
            <div className="stat"><div className="n"><span data-to="3">3</span></div><div className="l">Countries: South Africa, Mauritius, Zambia</div></div>
            <div className="stat"><div className="n"><span data-to="6">6</span><span className="u">+</span></div><div className="l">Flagship products &amp; sites delivered</div></div>
            <div className="stat"><div className="n"><span data-to="99.9">99.9</span><span className="u">%</span></div><div className="l">Uptime targets on managed infrastructure</div></div>
          </div>
          <div className="vals" data-reveal-stagger style={{ marginTop: '80px' }}>
            <div className="val"><div className="vn">01</div><h3>End-to-end</h3><p>Strategy, design, engineering and support — one accountable partner, not a chain of vendors.</p></div>
            <div className="val"><div className="vn">02</div><h3>Technical &amp; creative</h3><p>Strong engineering and strong design, working together on every solution we deliver.</p></div>
            <div className="val"><div className="vn">03</div><h3>Enterprise-grade</h3><p>We integrate with Salesforce, Kafka, AWS and gRPC at financial-services scale.</p></div>
            <div className="val"><div className="vn">04</div><h3>Scalable by design</h3><p>Cloud and software architected to grow with your business, not against it.</p></div>
            <div className="val"><div className="vn">05</div><h3>Pan-African reach</h3><p>Delivering across South Africa, Mauritius and Zambia — built for the continent.</p></div>
            <div className="val"><div className="vn">06</div><h3>Long-term focus</h3><p>Partnerships you can plan around. Reliable support that responds when you need it.</p></div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="dark-sec sec" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-head" data-reveal>
            <div className="ey light">Industries we serve</div>
            <h2 className="h2" style={{ color: '#fff' }}>Built for regulated, real-world business.</h2>
          </div>
          <div className="ind-grid" data-reveal-stagger>
            <div className="ind"><div className="ic"><Umbrella /></div><h3>Insurance &amp; Reinsurance</h3><p>Broking platforms, contract management and managed digital operations.</p></div>
            <div className="ind"><div className="ic"><Landmark /></div><h3>Banking &amp; Financial Services</h3><p>Enterprise integration, event streaming and secure data flows.</p></div>
            <div className="ind"><div className="ic"><HardHat /></div><h3>Mining &amp; Manufacturing</h3><p>Brand, web and digital presence for industrial engineering firms.</p></div>
            <div className="ind"><div className="ic"><ClipboardCheck /></div><h3>Risk &amp; Compliance</h3><p>Assessment tools and websites for advisory and consulting practices.</p></div>
            <div className="ind"><div className="ic"><Briefcase /></div><h3>Professional Services</h3><p>Modern websites, email and brand systems that build trust.</p></div>
            <div className="ind"><div className="ic"><Rocket /></div><h3>Startups &amp; SMEs</h3><p>From first launch to scale — the full digital toolkit in one place.</p></div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="sec">
        <div className="wrap split narrow" style={{ alignItems: 'flex-start' }}>
          <div className="section-head" style={{ position: 'sticky', top: '110px' }} data-reveal>
            <div className="ey">Technology stack</div>
            <h2 className="h2">Proven tools, chosen on merit.</h2>
            <p className="lead" style={{ fontSize: '17px', color: 'var(--graph)' }}>We select technology to fit the problem and the team that will live with it — favouring well-supported, scalable platforms over novelty.</p>
          </div>
          <div className="tech-wrap" data-reveal>
            <div className="tech-row"><div className="cat">Backend<span>Services &amp; APIs</span></div><div className="chips"><span className="chip">Java</span><span className="chip">Spring Boot</span><span className="chip">FastAPI</span><span className="chip">Node.js</span></div></div>
            <div className="tech-row"><div className="cat">Frontend<span>Web &amp; mobile</span></div><div className="chips"><span className="chip">Angular</span><span className="chip">React</span><span className="chip">Vite</span><span className="chip">Flutter</span></div></div>
            <div className="tech-row"><div className="cat">Data<span>Databases &amp; streaming</span></div><div className="chips"><span className="chip">PostgreSQL</span><span className="chip">MySQL</span><span className="chip">SQL Server</span><span className="chip">Kafka</span></div></div>
            <div className="tech-row"><div className="cat">Cloud<span>Infrastructure</span></div><div className="chips"><span className="chip">Azure</span><span className="chip">AWS</span><span className="chip">Docker</span><span className="chip">Kubernetes</span></div></div>
            <div className="tech-row"><div className="cat">Integration<span>Enterprise</span></div><div className="chips"><span className="chip">Salesforce</span><span className="chip">gRPC</span><span className="chip">REST</span></div></div>
            <div className="tech-row"><div className="cat">Monitoring<span>Observability</span></div><div className="chips"><span className="chip">Grafana</span><span className="chip">Prometheus</span><span className="chip">OpenSearch</span></div></div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="sec" style={{ background: 'var(--off)' }}>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="ey">In their words</div>
            <h2 className="h2">Partners, not projects.</h2>
          </div>
          <div className="quotes" data-reveal-stagger>
            <div className="quote"><div className="mark">&ldquo;</div><p>Afrikatek built and now runs the system our business depends on every day. They engineer it properly and they answer the phone.</p><div className="by"><div className="av">S</div><div><div className="nm">Solid Risk Advisors</div><div className="rl">Reinsurance broking · South Africa</div></div></div></div>
            <div className="quote"><div className="mark">&ldquo;</div><p>From brand to website to email, they handled the whole digital setup. One partner, one standard — and it shows.</p><div className="by"><div className="av">A</div><div><div className="nm">Anchor Risk Transfer</div><div className="rl">Risk transfer · Mauritius</div></div></div></div>
            <div className="quote"><div className="mark">&ldquo;</div><p>They understood a regulated, technical business and gave us a presence that finally matches the work we do.</p><div className="by"><div className="av">A</div><div><div className="nm">AssessPro Consultants</div><div className="rl">Risk assessment · Zambia</div></div></div></div>
          </div>
          <p className="mono-label" style={{ marginTop: '28px' }}>Representative client outcomes — quotes shown for layout, to be confirmed with each client.</p>
        </div>
      </section>

      {/* ===== INSIGHTS ===== */}
      <section className="sec">
        <div className="wrap">
          <div className="head-row">
            <div className="section-head" data-reveal>
              <div className="ey">Insights</div>
              <h2 className="h2">Thinking on tech in Africa.</h2>
            </div>
            <span className="mag" data-reveal><Link className="btn btn-ghost" to="/insights">All insights <span className="arrow">&rarr;</span></Link></span>
          </div>
          <div className="posts" data-reveal-stagger>
            <Link className="post" to="/insights">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Cloud</span></div>
              <div className="pb"><span className="date">15 Jun 2026 · 6 min</span><h3>Why South African businesses are moving to managed cloud.</h3><p className="ex">Cost, security and uptime — what changes when you stop running servers yourself.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </Link>
            <Link className="post" to="/insights">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Integration</span></div>
              <div className="pb"><span className="date">02 Jun 2026 · 8 min</span><h3>Designing systems that integrate: Kafka, gRPC and the modern bank.</h3><p className="ex">Event-streaming patterns that let legacy and modern systems finally talk.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </Link>
            <Link className="post" to="/insights">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Workplace</span></div>
              <div className="pb"><span className="date">21 May 2026 · 5 min</span><h3>Microsoft 365 vs Google Workspace for African SMEs.</h3><p className="ex">A practical guide to choosing — and migrating — without the downtime.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-band">
        <div className="gridbg"></div>
        <div className="imgbg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')" }}></div>
        <div className="glow gold" style={{ width: '640px', height: '640px', right: '-200px', top: '-260px' }}></div>
        <div className="wrap cta-in">
          <div className="ey light" style={{ justifyContent: 'center' }} data-reveal>Let's talk</div>
          <h2 className="h2" data-reveal>Ready to build something that lasts?</h2>
          <p className="sub" data-reveal>Tell us what you're trying to do. We'll reply with a clear, honest view of how to get there.</p>
          <div className="actions" data-reveal>
            <span className="mag"><a className="btn btn-gold btn-lg" href="mailto:hello@afrikatek.co.za">Email hello@afrikatek.co.za <span className="arrow">&rarr;</span></a></span>
            <Link className="btn btn-light btn-lg" to="/contact">Contact options</Link>
          </div>
        </div>
      </section>
    </>
  )
}
