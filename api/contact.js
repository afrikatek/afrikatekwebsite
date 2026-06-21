import { Resend } from 'resend'

/*
 * POST /api/contact — Vercel serverless function.
 *  1. Validates the payload.
 *  2. Verifies the Cloudflare Turnstile token server-side (siteverify).
 *  3. Delivers the message to CONTACT_TO via Resend.
 *
 * Required env vars (see .env.example):
 *   TURNSTILE_SECRET_KEY, RESEND_API_KEY, CONTACT_FROM, CONTACT_TO
 */

const escapeHtml = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  // If no secret is configured (e.g. local preview), skip verification.
  if (!secret) return { ok: true, skipped: true }
  if (!token) return { ok: false }

  const body = new URLSearchParams()
  body.append('secret', secret)
  body.append('response', token)
  if (ip) body.append('remoteip', ip)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  const data = await res.json().catch(() => ({ success: false }))
  return { ok: !!data.success }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {})
    const { name, company, email, service, message, turnstileToken } = body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required.' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim()
    const verify = await verifyTurnstile(turnstileToken, ip)
    if (!verify.ok) {
      return res.status(400).json({ error: 'Verification failed. Please complete the check and try again.' })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      return res.status(500).json({ error: 'Email service is not configured. Please email hello@afrikatek.co.za directly.' })
    }

    const resend = new Resend(apiKey)
    const to = process.env.CONTACT_TO || 'hello@afrikatek.co.za'
    const from = process.env.CONTACT_FROM || 'Afrikatek Website <website@afrikatek.co.za>'

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#071D26;line-height:1.6">
        <h2 style="margin:0 0 16px">New enquiry from the Afrikatek website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company) || '—'}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service) || '—'}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;border-left:3px solid #C45A23;padding-left:14px">${escapeHtml(message)}</p>
      </div>`

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Website enquiry — ${name}${company ? ` (${company})` : ''}`,
      html,
      text: `New enquiry from the Afrikatek website\n\nName: ${name}\nCompany: ${company || '—'}\nEmail: ${email}\nService: ${service || '—'}\n\nMessage:\n${message}`,
    })

    if (error) {
      return res.status(502).json({ error: 'Could not send the message. Please email hello@afrikatek.co.za directly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected error. Please email hello@afrikatek.co.za directly.' })
  }
}
