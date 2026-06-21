import { Link } from 'react-router-dom'
import { Check, Bell } from 'lucide-react'
import { CaseCards, BankCard } from '../components/WorkCases.jsx'

export default function Work() {
  return (
    <>
      <section className="phead">
        <div className="gridbg"></div>
        <img className="africa-bg" src="/assets/africa-dots-dark.svg" alt="" aria-hidden="true" />
        <div className="glow gold" style={{ width: '560px', height: '560px', left: '-200px', bottom: '-260px' }}></div>
        <div className="wrap">
          <div className="crumb">Afrikatek / Work</div>
          <h1>Proof, not promises.</h1>
          <p className="sub">A selection of what we've designed, built and now run — across insurance, reinsurance, mining, risk and banking, in South Africa, Mauritius and Zambia.</p>
        </div>
      </section>

      {/* FEATURED CASE STUDY: TITANIUM */}
      <section className="sec">
        <div className="wrap">
          <div className="split narrow" style={{ alignItems: 'center' }}>
            <div data-reveal data-dash>
              <div className="dash">
                <div className="dash-tag">Titanium · live</div>
                <div className="dash-main">
                  <div className="ring-wrap">
                    <svg className="ring" viewBox="0 0 120 120"><circle className="track" cx="60" cy="60" r="52"></circle><circle className="prog" cx="60" cy="60" r="52" data-offset="26"></circle></svg>
                    <div className="ring-num"><b><span data-to="92">92</span>%</b><small>On-time renewals</small></div>
                  </div>
                  <div className="dash-list">
                    <div className="ditem"><span className="dic ok"><Check /></span> Contract authored &amp; routed</div>
                    <div className="ditem"><span className="dic ok"><Check /></span> E-signature captured</div>
                    <div className="ditem"><span className="dic up"><Bell /></span> Renewal flagged · 30 days</div>
                  </div>
                </div>
                <div className="dash-card">
                  <div className="dash-card-h">Contract portfolio</div>
                  <div className="brow"><span>Active</span><div className="track2"><i style={{ '--w': '88%' }}></i></div><b><span data-to="88">88</span>%</b></div>
                  <div className="brow"><span>In review</span><div className="track2"><i style={{ '--w': '74%' }}></i></div><b><span data-to="74">74</span>%</b></div>
                  <div className="brow"><span>Renewals</span><div className="track2"><i style={{ '--w': '95%' }}></i></div><b><span data-to="95">95</span>%</b></div>
                  <div className="brow"><span>Compliant</span><div className="track2"><i style={{ '--w': '82%' }}></i></div><b><span data-to="82">82</span>%</b></div>
                </div>
              </div>
            </div>
            <div data-reveal>
              <div className="ey">Featured · Product</div>
              <h2 className="h2" style={{ marginTop: '16px' }}>Titanium — contract management for Solid Risk Advisors.</h2>
              <p style={{ marginTop: '20px', color: 'var(--graph)', fontSize: '16px', lineHeight: 1.75 }}>We designed and built Titanium, a secure platform that lets Solid Risk Advisors author, track and manage contracts end-to-end. Built on JHipster with Spring Boot and Angular, it replaced scattered documents with one source of truth — and we host and maintain it.</p>
              <div className="stats" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '18px', marginTop: '34px' }}>
                <div className="stat" style={{ paddingTop: '18px' }}><div className="n" style={{ fontSize: '34px' }}>100%</div><div className="l">Contracts in one system</div></div>
                <div className="stat" style={{ paddingTop: '18px' }}><div className="n" style={{ fontSize: '34px' }}>24/7</div><div className="l">Managed &amp; monitored</div></div>
                <div className="stat" style={{ paddingTop: '18px' }}><div className="n" style={{ fontSize: '34px' }}>ZA</div><div className="l">Built &amp; hosted locally</div></div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '28px' }}>
                {['Spring Boot', 'Java', 'Angular', 'Angular Material', 'MySQL', 'JHipster'].map((t) => (
                  <span className="chip" key={t} style={{ color: 'var(--ink)', background: 'var(--off)', borderColor: 'var(--line)' }}>{t}</span>
                ))}
              </div>
              <span className="mag" style={{ marginTop: '30px', display: 'inline-block' }}><a className="btn btn-primary" href="https://titanium.shield.afrikatek.co.za/" target="_blank" rel="noopener">Visit the platform <span className="arrow">&rarr;</span></a></span>
            </div>
          </div>
        </div>
      </section>

      {/* WORK GRID */}
      <section className="sec" style={{ background: 'var(--off)' }}>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="ey">More work</div>
            <h2 className="h2">Brand, web &amp; managed digital.</h2>
            <p className="lead">Live homepages we designed, built and now manage — hover any preview to scroll the page.</p>
          </div>
          <div className="case-grid" data-reveal-stagger>
            <CaseCards />
          </div>

          {/* BANK (confidential) */}
          <BankCard />
        </div>
      </section>

      {/* MARKETS MAP */}
      <section className="sec markets" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head" data-reveal style={{ maxWidth: 'none', textAlign: 'center' }}>
            <div className="ey" style={{ justifyContent: 'center' }}>Where we work</div>
            <h2 className="h2">Delivering across the continent.</h2>
            <p className="lead" style={{ maxWidth: '56ch', marginLeft: 'auto', marginRight: 'auto' }}>South Africa, Mauritius and Zambia today — and partnering with enterprises wherever the work is.</p>
          </div>
          <div className="market-map" data-reveal>
            <img className="base" src="/assets/africa-dots-ink.svg" alt="Map of Africa showing markets served" />
            <div className="pin" style={{ left: '66%', top: '88%' }}><span className="pulse"></span><svg className="mk" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.4 10.9 7.3 11.7.4.4 1 .4 1.4 0C13.6 20.9 20 15.4 20 10c0-4.4-3.6-8-8-8z"></path><circle cx="12" cy="10" r="3" fill="#fff"></circle></svg><span className="plabel">South Africa</span></div>
            <div className="pin p2" style={{ left: '66%', top: '72%' }}><span className="pulse"></span><svg className="mk" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.4 10.9 7.3 11.7.4.4 1 .4 1.4 0C13.6 20.9 20 15.4 20 10c0-4.4-3.6-8-8-8z"></path><circle cx="12" cy="10" r="3" fill="#fff"></circle></svg><span className="plabel">Zambia</span></div>
            <div className="pin p3" style={{ left: '93%', top: '84%' }}><span className="pulse"></span><svg className="mk" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.6 2 4 5.6 4 10c0 5.4 6.4 10.9 7.3 11.7.4.4 1 .4 1.4 0C13.6 20.9 20 15.4 20 10c0-4.4-3.6-8-8-8z"></path><circle cx="12" cy="10" r="3" fill="#fff"></circle></svg><span className="plabel">Mauritius</span></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="gridbg"></div>
        <div className="imgbg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80')" }}></div>
        <div className="glow gold" style={{ width: '640px', height: '640px', right: '-200px', top: '-260px' }}></div>
        <div className="wrap cta-in">
          <div className="ey light" style={{ justifyContent: 'center' }} data-reveal>Your project next</div>
          <h2 className="h2" data-reveal>Let's add yours to this list.</h2>
          <p className="sub" data-reveal>Tell us what you're building. We'll reply with a clear, honest view of how to get there.</p>
          <div className="actions" data-reveal>
            <span className="mag"><a className="btn btn-gold btn-lg" href="mailto:hello@afrikatek.co.za">Email hello@afrikatek.co.za <span className="arrow">&rarr;</span></a></span>
            <Link className="btn btn-light btn-lg" to="/services">Our services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
