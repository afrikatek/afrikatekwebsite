import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="phead">
        <div className="gridbg"></div>
        <img className="africa-bg" src="/assets/africa-dots-dark.svg" alt="" aria-hidden="true" />
        <div className="glow gold" style={{ width: '560px', height: '560px', left: '-200px', bottom: '-260px' }}></div>
        <div className="wrap">
          <div className="crumb">Afrikatek / About</div>
          <h1>Built in Africa,<br />for Africa's future.</h1>
          <p className="sub">Afrikatek Solutions was founded to empower businesses across the continent through innovative technology and digital transformation — providing world-class solutions that enable growth, efficiency and long-term success.</p>
        </div>
      </section>

      {/* STORY */}
      <section className="sec">
        <div className="wrap split narrow" style={{ alignItems: 'center' }}>
          <div data-reveal>
            <div className="ey">Our story</div>
            <h2 className="h2" style={{ marginTop: '16px' }}>A senior partner — <span className="ital">not a portal full of forms.</span></h2>
            <p style={{ marginTop: '22px', color: 'var(--graph)', fontSize: '16px', lineHeight: 1.78 }}>We started Afrikatek because too many African businesses were sold technology they couldn't use, by partners who disappeared after launch. We do the opposite: we listen, design what's needed, build it well, and stay on to run it.</p>
            <p style={{ marginTop: '16px', color: 'var(--graph)', fontSize: '16px', lineHeight: 1.78 }}>Today we span software engineering, web, cloud, Microsoft 365, social and brand — and we carry deep enterprise-integration experience from work with major South African banks. From a contract platform for a reinsurance broker to a brand for a mining-engineering firm, the standard is the same.</p>
          </div>
          <div className="media" style={{ height: '500px' }} data-reveal data-parallax="0.04">
            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=80" alt="Afrikatek team at work" />
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="dark-sec sec">
        <div className="gridbg"></div>
        <img className="africa-bg" src="/assets/africa-dots-dark.svg" alt="" aria-hidden="true" style={{ right: '-8%', top: '-10%', width: '48%', height: '120%', opacity: 0.5 }} />
        <div className="glow" style={{ width: '520px', height: '520px', left: '-200px', bottom: '-200px' }}></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="split narrow" style={{ alignItems: 'flex-start' }}>
            <div data-reveal>
              <div className="ey light">Vision</div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.4, color: '#fff', marginTop: '20px', fontStyle: 'italic' }}>To become Africa's most trusted technology partner — empowering businesses through innovative digital solutions that drive growth, transformation and sustainable success.</p>
            </div>
            <div data-reveal>
              <div className="ey light">Mission</div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.4, color: '#fff', marginTop: '20px', fontStyle: 'italic' }}>We design, build and manage innovative digital solutions that help businesses establish strong brands, optimize operations and leverage technology for sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="sec">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="ey">Core values</div>
            <h2 className="h2">What we hold ourselves to.</h2>
          </div>
          <div className="cards" data-reveal-stagger>
            <div className="card"><div className="cn">01</div><h3 className="h3">Innovation</h3><p>We pursue better solutions, not just newer ones — applying technology where it earns its place.</p></div>
            <div className="card"><div className="cn">02</div><h3 className="h3">Excellence</h3><p>Quality is the default. Every solution is held to a high standard of craft, usability and presentation.</p></div>
            <div className="card"><div className="cn">03</div><h3 className="h3">Integrity</h3><p>We are honest about scope, timelines and trade-offs. Trust is earned in the detail.</p></div>
            <div className="card"><div className="cn">04</div><h3 className="h3">Customer success</h3><p>Your outcomes define ours. We measure success by the growth our clients realize.</p></div>
            <div className="card"><div className="cn">05</div><h3 className="h3">Reliability</h3><p>Systems that stay up, support that responds, and partnerships you can plan around.</p></div>
            <div className="card"><div className="cn">06</div><h3 className="h3">Continuous growth</h3><p>We keep learning — sharpening our craft so our clients stay competitive over the long term.</p></div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="sec" style={{ background: 'var(--off)' }}>
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div className="ey">Leadership</div>
            <h2 className="h2">The people behind the work.</h2>
          </div>
          <div className="people" data-reveal-stagger>
            <div className="person">
              <div className="top">
                <div className="avatar">M<div className="shard"></div></div>
                <div><h3>Murukai Gumbo-Mberi</h3><div className="role">Director &amp; Chief Technology Officer</div></div>
              </div>
              <p>Murukai leads technology strategy, software engineering, cloud infrastructure and digital transformation. With a background in mathematics, enterprise software, cloud and solution architecture, he drives the technical vision of Afrikatek.</p>
              <a className="li" href="https://www.linkedin.com/in/murukaimberi" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23h-4V8z" /></svg> linkedin.com/in/murukaimberi</a>
            </div>
            <div className="person">
              <div className="top">
                <div className="avatar">P<div className="shard"></div></div>
                <div><h3>Portia Tsokota</h3><div className="role">Graphic Designer &amp; Quality Engineer</div></div>
              </div>
              <p>Portia leads visual design, brand identity and quality assurance. She makes sure every solution Afrikatek delivers meets a high standard of quality, usability and professional presentation.</p>
              <a className="li" href="https://www.linkedin.com/in/portia-tsokota-a09165aa" target="_blank" rel="noopener"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23h-4V8z" /></svg> linkedin.com/in/portia-tsokota</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="gridbg"></div>
        <div className="imgbg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')" }}></div>
        <div className="glow gold" style={{ width: '640px', height: '640px', right: '-200px', top: '-260px' }}></div>
        <div className="wrap cta-in">
          <div className="ey light" style={{ justifyContent: 'center' }} data-reveal>Work with us</div>
          <h2 className="h2" data-reveal>Let's build something that lasts.</h2>
          <p className="sub" data-reveal>Tell us what you're trying to do. We'll reply with a clear, honest view of how to get there.</p>
          <div className="actions" data-reveal>
            <span className="mag"><a className="btn btn-gold btn-lg" href="mailto:hello@afrikatek.co.za">Email hello@afrikatek.co.za <span className="arrow">&rarr;</span></a></span>
            <Link className="btn btn-light btn-lg" to="/work">See our work</Link>
          </div>
        </div>
      </section>
    </>
  )
}
