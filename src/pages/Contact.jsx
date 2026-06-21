import { useRef, useState } from 'react'
import { Turnstile } from '@marsidev/react-turnstile'

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

const SERVICES = [
  'Software engineering',
  'Website design & development',
  'Cloud infrastructure',
  'Email & Microsoft 365',
  'Systems integration',
  'Brand & social',
  'Not sure yet',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', service: SERVICES[0], message: '' })
  const [token, setToken] = useState('')
  const [status, setStatus] = useState({ state: 'idle', msg: '' }) // idle | sending | sent | error
  const turnstileRef = useRef(null)

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  async function onSubmit(e) {
    e.preventDefault()
    if (status.state === 'sending') return

    if (!form.name || !form.email || !form.message) {
      setStatus({ state: 'error', msg: 'Please add your name, email and a short message.' })
      return
    }
    if (SITE_KEY && !token) {
      setStatus({ state: 'error', msg: 'Please complete the verification check below.' })
      return
    }

    setStatus({ state: 'sending', msg: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken: token }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please email us directly.')
      setStatus({ state: 'sent', msg: "Thanks — your message is on its way. We'll be in touch shortly." })
      setForm({ name: '', company: '', email: '', service: SERVICES[0], message: '' })
      setToken('')
      turnstileRef.current?.reset?.()
    } catch (err) {
      setStatus({ state: 'error', msg: err.message })
      turnstileRef.current?.reset?.()
      setToken('')
    }
  }

  const sending = status.state === 'sending'

  return (
    <>
      <section className="phead" style={{ paddingBottom: '60px' }}>
        <div className="gridbg"></div>
        <img className="africa-bg" src="/assets/africa-dots-dark.svg" alt="" aria-hidden="true" />
        <div className="glow gold" style={{ width: '560px', height: '560px', left: '-200px', bottom: '-260px' }}></div>
        <div className="wrap">
          <div className="crumb">Afrikatek / Contact</div>
          <h1>Let's build something<br />that lasts.</h1>
          <p className="sub">The fastest way to reach us is email. Tell us what you're trying to do and we'll reply with a clear, honest view of how to get there.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="cgrid">
            {/* INFO */}
            <div className="cinfo" data-reveal>
              <div className="cblock">
                <div className="k">Email — fastest</div>
                <div className="v"><a href="mailto:hello@afrikatek.co.za" className="cop">hello@afrikatek.co.za</a></div>
              </div>
              <div className="cblock">
                <div className="k">Direct</div>
                <div className="v"><a href="mailto:murukai.mberi@afrikatek.co.za">murukai.mberi@afrikatek.co.za</a><br /><a href="mailto:portia.tsokota@afrikatek.co.za">portia.tsokota@afrikatek.co.za</a></div>
              </div>
              <div className="cblock">
                <div className="k">Phone</div>
                <div className="v"><a href="tel:+27679725177">+27 67 972 5177</a><br /><a href="tel:+27678269716">+27 67 826 9716</a></div>
              </div>
              <div className="cblock">
                <div className="k">Studio</div>
                <div className="v">Unit 169, Silverstream Estate South<br />272 Le Roux Ave, Halfway Gardens<br />Midrand, 1686, South Africa</div>
              </div>
              <div className="cblock">
                <div className="k">Online</div>
                <div className="v"><a href="https://www.afrikatek.co.za">www.afrikatek.co.za</a><br /><a href="https://www.linkedin.com/company/afrikatek-solutions">LinkedIn — Afrikatek Solutions</a></div>
              </div>
            </div>

            {/* FORM */}
            <div data-reveal>
              <form className="form" onSubmit={onSubmit} noValidate>
                <div className="ey" style={{ marginBottom: '24px' }}>Send a message</div>
                <div className="f2">
                  <div className="field"><label htmlFor="name">Name</label><input id="name" type="text" placeholder="Your name" autoComplete="name" value={form.name} onChange={update('name')} /></div>
                  <div className="field"><label htmlFor="company">Company</label><input id="company" type="text" placeholder="Company name" autoComplete="organization" value={form.company} onChange={update('company')} /></div>
                </div>
                <div className="f2">
                  <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" placeholder="you@company.com" autoComplete="email" value={form.email} onChange={update('email')} /></div>
                  <div className="field"><label htmlFor="service">What do you need?</label>
                    <select id="service" value={form.service} onChange={update('service')}>
                      {SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="field"><label htmlFor="msg">Message</label><textarea id="msg" placeholder="Tell us a little about the project, timeline and goals." value={form.message} onChange={update('message')}></textarea></div>

                <div className="field">
                  {SITE_KEY ? (
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={SITE_KEY}
                      onSuccess={setToken}
                      onError={() => setToken('')}
                      onExpire={() => setToken('')}
                      options={{ theme: 'light' }}
                    />
                  ) : (
                    <div className="turnstile-stub"><span className="box"></span> Cloudflare Turnstile mounts here once VITE_TURNSTILE_SITE_KEY is set.</div>
                  )}
                </div>

                <span className="mag" style={{ display: 'block' }}>
                  <button className="btn btn-primary btn-lg" type="submit" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                    {sending ? 'Sending…' : <>Send message <span className="arrow">&rarr;</span></>}
                  </button>
                </span>

                {status.state === 'sent' && (
                  <p style={{ marginTop: '16px', color: 'var(--horizon)', fontWeight: 600, fontSize: '14px' }}>{status.msg}</p>
                )}
                {status.state === 'error' && (
                  <p style={{ marginTop: '16px', color: 'var(--copper)', fontWeight: 600, fontSize: '14px' }}>{status.msg}</p>
                )}

                <p className="mono-label" style={{ marginTop: '16px' }}>Submissions are delivered via Resend to hello@afrikatek.co.za. Prefer email? <a href="mailto:hello@afrikatek.co.za" style={{ color: 'var(--copper)' }}>Write to us directly.</a></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
