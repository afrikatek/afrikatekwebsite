import { ArrowUpRight, ArrowRight } from 'lucide-react'

export default function Insights() {
  return (
    <>
      <section className="phead">
        <div className="gridbg"></div>
        <img className="africa-bg" src="/assets/africa-dots-dark.svg" alt="" aria-hidden="true" />
        <div className="glow gold" style={{ width: '560px', height: '560px', left: '-200px', bottom: '-260px' }}></div>
        <div className="wrap">
          <div className="crumb">Afrikatek / Insights</div>
          <h1>Thinking on tech<br />in Africa.</h1>
          <p className="sub">Practical, jargon-light writing on software, cloud, integration and digital transformation — for the businesses building Africa's digital future.</p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="sec" style={{ paddingBottom: '64px' }}>
        <div className="wrap">
          <a className="work feat" href="#" style={{ minHeight: '440px' }} data-reveal>
            <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1500&q=80')" }}></div>
            <div className="scrim"></div>
            <div className="body">
              <div className="tags"><span className="tag">Cloud</span><span className="tag">Featured</span></div>
              <h3>Why South African businesses are moving to managed cloud.</h3>
              <div className="meta" style={{ maxWidth: '60ch' }}>Running your own servers used to signal control. Now it mostly signals risk and cost. Here's what changes — for security, uptime and the bottom line — when you move to managed cloud.</div>
              <span className="go">Read article · 6 min <ArrowUpRight style={{ width: '16px', height: '16px' }} /></span>
            </div>
          </a>
        </div>
      </section>

      {/* POST GRID */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="posts" data-reveal-stagger>
            <a className="post" href="#">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Integration</span></div>
              <div className="pb"><span className="date">02 Jun 2026 · 8 min</span><h3>Kafka, gRPC and the modern bank.</h3><p className="ex">Event-streaming patterns that let legacy and modern systems finally talk — without a rip-and-replace.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </a>
            <a className="post" href="#">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Workplace</span></div>
              <div className="pb"><span className="date">21 May 2026 · 5 min</span><h3>Microsoft 365 vs Google Workspace for African SMEs.</h3><p className="ex">A practical guide to choosing — and migrating — without the downtime or the drama.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </a>
            <a className="post" href="#">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Security</span></div>
              <div className="pb"><span className="date">09 May 2026 · 7 min</span><h3>Email security basics every business gets wrong.</h3><p className="ex">SPF, DKIM and DMARC, explained plainly — and why they protect your brand, not just your inbox.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </a>
            <a className="post" href="#">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Design</span></div>
              <div className="pb"><span className="date">24 Apr 2026 · 6 min</span><h3>A website is a system, not a brochure.</h3><p className="ex">Why brand-led, conversion-focused web design beats a pretty page that nobody acts on.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </a>
            <a className="post" href="#">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Engineering</span></div>
              <div className="pb"><span className="date">11 Apr 2026 · 9 min</span><h3>Build to last: architecture choices that age well.</h3><p className="ex">The boring, scalable decisions that keep software cheap to run three years after launch.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </a>
            <a className="post" href="#">
              <div className="ph" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80')" }}><span className="cat">Business</span></div>
              <div className="pb"><span className="date">28 Mar 2026 · 5 min</span><h3>Digital transformation, minus the buzzwords.</h3><p className="ex">A grounded checklist for African SMEs that want results, not a 40-slide strategy deck.</p><span className="rm">Read article <ArrowRight style={{ width: '15px', height: '15px' }} /></span></div>
            </a>
          </div>
          <p className="mono-label" style={{ marginTop: '36px' }}>Article topics shown as a content placeholder — ready for your real posts via the CMS of your choice.</p>
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="cta-band">
        <div className="gridbg"></div>
        <div className="glow gold" style={{ width: '640px', height: '640px', right: '-200px', top: '-260px' }}></div>
        <div className="wrap cta-in">
          <div className="ey light" style={{ justifyContent: 'center' }} data-reveal>Stay in the loop</div>
          <h2 className="h2" data-reveal>Get our thinking in your inbox.</h2>
          <p className="sub" data-reveal>Occasional, practical notes on tech for African business. No spam — just useful.</p>
          <div className="actions" data-reveal>
            <span className="mag"><a className="btn btn-gold btn-lg" href="mailto:hello@afrikatek.co.za?subject=Subscribe%20to%20Afrikatek%20Insights">Subscribe by email <span className="arrow">&rarr;</span></a></span>
          </div>
        </div>
      </section>
    </>
  )
}
