import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="phead">
        <div className="gridbg"></div>
        <img className="africa-bg" src="/assets/africa-dots-dark.svg" alt="" aria-hidden="true" />
        <div className="glow gold" style={{ width: '560px', height: '560px', left: '-200px', bottom: '-260px' }}></div>
        <div className="wrap">
          <div className="crumb">Afrikatek / Services</div>
          <h1>Everything digital,<br />under one roof.</h1>
          <p className="sub">Seven service lines that connect — so strategy, design, engineering, cloud and brand pull in the same direction. One accountable partner, from first line of code to launch and beyond.</p>
        </div>
      </section>

      {/* SERVICE ROWS */}
      <section className="sec">
        <div className="wrap">
          <div className="rows">
            <div className="srow" data-reveal>
              <div className="rn">01</div>
              <div><h3>Software Engineering</h3><div className="sub2">Enterprise software · Solution architecture</div></div>
              <div><p>Custom platforms, APIs and internal tools — architected to scale and built to last. We design the system, write the code, test it properly, and stand behind it in production.</p>
                <ul><li>Java · Spring Boot</li><li>FastAPI</li><li>Angular · React</li><li>JHipster</li><li>Microservices</li></ul></div>
            </div>
            <div className="srow" data-reveal>
              <div className="rn">02</div>
              <div><h3>Website Design</h3><div className="sub2">UX/UI · Brand-led design</div></div>
              <div><p>Interface and experience design grounded in your brand and your customer. We design for clarity and conversion — not decoration — and prototype before we build.</p>
                <ul><li>UX research</li><li>Design systems</li><li>Prototyping</li><li>Accessibility</li></ul></div>
            </div>
            <div className="srow" data-reveal>
              <div className="rn">03</div>
              <div><h3>Website Development</h3><div className="sub2">Web apps · Marketing sites</div></div>
              <div><p>Fast, accessible, maintainable websites and web applications. Modern stacks, clean code, and a build your team can own — from marketing sites to complex web apps.</p>
                <ul><li>React · Vite</li><li>Angular</li><li>Headless CMS</li><li>SEO &amp; performance</li></ul></div>
            </div>
            <div className="srow" data-reveal>
              <div className="rn">04</div>
              <div><h3>Email &amp; Microsoft 365</h3><div className="sub2">Hosting · Migration · Setup</div></div>
              <div><p>Professional, secure business email and the full Microsoft 365 suite — set up, migrated and supported. We have run email and 365 for clients in three countries.</p>
                <ul><li>Microsoft 365</li><li>Email hosting</li><li>Migration</li><li>Security &amp; DKIM/SPF</li></ul></div>
            </div>
            <div className="srow" data-reveal>
              <div className="rn">05</div>
              <div><h3>Cloud Infrastructure</h3><div className="sub2">Azure · AWS · DevOps</div></div>
              <div><p>Architecture, deployment and ongoing management on Azure and AWS — with monitoring, alerting and backups built in. We keep the lights on so you can focus on the business.</p>
                <ul><li>Azure · AWS</li><li>Docker · Kubernetes</li><li>CI/CD</li><li>Grafana · Prometheus</li></ul></div>
            </div>
            <div className="srow" data-reveal>
              <div className="rn">06</div>
              <div><h3>Systems Integration</h3><div className="sub2">Enterprise · Financial-grade</div></div>
              <div><p>We connect systems that were never meant to talk. For major South African banks we integrate across Salesforce, Kafka, AWS and gRPC — securely and at scale.</p>
                <ul><li>Salesforce</li><li>Kafka</li><li>gRPC</li><li>REST · Event streaming</li></ul></div>
            </div>
            <div className="srow" data-reveal>
              <div className="rn">07</div>
              <div><h3>Brand &amp; Social</h3><div className="sub2">Identity · Social media management</div></div>
              <div><p>Brand identity, guidelines and stewardship — plus consistent, on-brand social media management across the channels your audience actually uses.</p>
                <ul><li>Brand identity</li><li>Guidelines</li><li>Social management</li><li>Content</li></ul></div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="sec" style={{ background: 'var(--off)' }}>
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

      {/* PROCESS */}
      <section className="sec">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="ey">How we engage</div>
            <h2 className="h2">A clear path from idea to impact.</h2>
          </div>
          <div className="proc" data-reveal-stagger>
            <div className="pstep"><span className="pnode"></span><h3>Discover &amp; scope</h3><p>We map the problem, your users and constraints — then agree a plan with honest timelines.</p></div>
            <div className="pstep"><span className="pnode"></span><h3>Design &amp; architect</h3><p>Brand-led UX and solution architecture, validated early so there are no surprises later.</p></div>
            <div className="pstep"><span className="pnode"></span><h3>Build &amp; integrate</h3><p>Engineered, tested and integrated into your stack — Salesforce, Kafka, AWS and more.</p></div>
            <div className="pstep"><span className="pnode"></span><h3>Operate &amp; grow</h3><p>Hosting, monitoring, support and iteration. We stay on as a long-term partner.</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="gridbg"></div>
        <div className="imgbg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')" }}></div>
        <div className="glow gold" style={{ width: '640px', height: '640px', right: '-200px', top: '-260px' }}></div>
        <div className="wrap cta-in">
          <div className="ey light" style={{ justifyContent: 'center' }} data-reveal>Let's talk</div>
          <h2 className="h2" data-reveal>Which of these do you need first?</h2>
          <p className="sub" data-reveal>Tell us where you're stuck. We'll reply with a clear, honest view of how to get there.</p>
          <div className="actions" data-reveal>
            <span className="mag"><a className="btn btn-gold btn-lg" href="mailto:hello@afrikatek.co.za">Email hello@afrikatek.co.za <span className="arrow">&rarr;</span></a></span>
            <Link className="btn btn-light btn-lg" to="/work">See the work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
