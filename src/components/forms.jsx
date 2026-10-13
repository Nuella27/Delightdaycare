import { useState } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../content'

/**
 * Sends form submissions to the daycare's inbox via FormSubmit
 * (https://formsubmit.co) — no server needed.
 * ⚠️ One-time setup: the FIRST submission triggers a confirmation
 * email to ebereemichael@gmail.com — click "Activate" in it once
 * and every future submission lands straight in the inbox.
 * If sending ever fails, we fall back to opening the visitor's
 * email app with everything pre-filled, so no enquiry is lost.
 */
async function sendToDaycare(subject, data) {
  const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _subject: subject, _template: 'table', _captcha: 'true', ...data }),
  })
  if (!res.ok) throw new Error('send failed')
}

function useLeadForm(subject) {
  const [state, setState] = useState('idle') // idle | sending | sent | fallback
  const submit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries())
    setState('sending')
    try {
      await sendToDaycare(subject, data)
      setState('sent')
    } catch {
      const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setState('fallback')
    }
  }
  return { state, submit }
}

function Success({ title, children }) {
  return (
    <div className="form-success" role="status">
      <span className="success-icon" aria-hidden="true">🎉</span>
      <h3>{title}</h3>
      <p>{children}</p>
      <p className="success-alt">
        Need us sooner? Call <a href={site.phoneHref}>{site.phoneDisplay}</a> or email{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <Link to="/" className="btn btn-soft">Back to Home</Link>
    </div>
  )
}

const input = (label, name, props = {}) => (
  <label className="field" key={name}>
    <span>{label}</span>
    <input name={name} {...props} />
  </label>
)

export function TourForm() {
  const { state, submit } = useLeadForm('🌞 New Tour Booking — Delight Daycare Website')
  if (state === 'sent') return <Success title="Thank you — your tour request is in!">We&apos;ve received your request and will reply shortly to confirm your tour time. Watch your inbox (and check spam, just in case).</Success>
  if (state === 'fallback') return <Success title="Almost there!">Your email app should have opened with your tour request ready to send. Just press send — or reach us below if it didn&apos;t open.</Success>
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        {input('Your name *', 'Parent Name', { required: true, autoComplete: 'name', placeholder: 'e.g. Jane Smith' })}
        {input('Email address *', 'Email', { required: true, type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
        {input('Phone number *', 'Phone', { required: true, type: 'tel', autoComplete: 'tel', placeholder: '(306) 555-1234' })}
        <label className="field"><span>Child&apos;s age *</span>
          <select name="Child's Age" required defaultValue="">
            <option value="" disabled>Select age…</option>
            <option>Under 6 months</option><option>6 – 12 months</option><option>12 – 18 months</option>
            <option>18 months – 2 years</option><option>2 – 3 years</option><option>3 – 4 years</option><option>4 – 5 years</option>
          </select>
        </label>
        {input('Preferred date *', 'Preferred Tour Date', { required: true, type: 'date' })}
        <label className="field"><span>Preferred time *</span>
          <select name="Preferred Tour Time" required defaultValue="">
            <option value="" disabled>Select time…</option>
            <option>Morning (9:00 – 11:00)</option><option>Midday (11:00 – 1:00)</option>
            <option>Afternoon (1:00 – 3:00)</option><option>Late afternoon (3:00 – 5:00)</option>
          </select>
        </label>
        <label className="field field-full"><span>Anything we should know? (optional)</span>
          <textarea name="Notes" rows="3" placeholder="Questions, start date you're hoping for, allergies — anything at all!" />
        </label>
      </div>
      <button className="btn btn-primary btn-lg btn-block" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : '📅 Request My Tour'}
      </button>
      <p className="form-note">No spam, ever. Your details go only to Delight Daycare at {site.email}.</p>
    </form>
  )
}

export function ContactForm() {
  const { state, submit } = useLeadForm('💌 New Website Message — Delight Daycare')
  if (state === 'sent') return <Success title="Message sent — thank you!">We&apos;ve received your message and will get back to you within one business day.</Success>
  if (state === 'fallback') return <Success title="Almost there!">Your email app should have opened with your message ready to send. Just press send — or reach us below if it didn&apos;t open.</Success>
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        {input('Your name *', 'Name', { required: true, autoComplete: 'name', placeholder: 'e.g. Jane Smith' })}
        {input('Email address *', 'Email', { required: true, type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
        {input('Phone (optional)', 'Phone', { type: 'tel', autoComplete: 'tel', placeholder: '(306) 555-1234' })}
        <label className="field"><span>What is this about?</span>
          <select name="Topic" defaultValue="General question">
            <option>General question</option><option>Enrollment & openings</option><option>Fees & subsidy</option>
            <option>Infant care</option><option>Toddler program</option><option>Pre-K program</option><option>Something else</option>
          </select>
        </label>
        <label className="field field-full"><span>Your message *</span>
          <textarea name="Message" rows="5" required placeholder="How can we help your family?" />
        </label>
      </div>
      <button className="btn btn-primary btn-lg btn-block" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : '💌 Send Message'}
      </button>
      <p className="form-note">Sent directly to {site.email} — we reply within one business day.</p>
    </form>
  )
}

export function EnrollForm() {
  const { state, submit } = useLeadForm('📝 New Enrollment Enquiry — Delight Daycare Website')
  if (state === 'sent') return <Success title="Thank you — we&apos;re excited!">Your enrollment enquiry is in. We&apos;ll contact you to confirm openings for your child&apos;s age group and walk you through the next steps.</Success>
  if (state === 'fallback') return <Success title="Almost there!">Your email app should have opened with your enquiry ready to send. Just press send — or reach us below if it didn&apos;t open.</Success>
  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        {input('Parent / guardian name *', 'Parent Name', { required: true, autoComplete: 'name', placeholder: 'e.g. Jane Smith' })}
        {input('Email address *', 'Email', { required: true, type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
        {input('Phone number *', 'Phone', { required: true, type: 'tel', autoComplete: 'tel', placeholder: '(306) 555-1234' })}
        {input("Child's first name *", "Child's Name", { required: true, placeholder: 'e.g. Noah' })}
        {input("Child's date of birth *", "Child's Date of Birth", { required: true, type: 'date' })}
        <label className="field"><span>Program *</span>
          <select name="Program" required defaultValue="">
            <option value="" disabled>Select program…</option>
            <option>Infant Care (6 weeks – 18 months)</option>
            <option>Toddler Program (18 months – 3 years)</option>
            <option>Pre-K Program (3 – 5 years)</option>
            <option>Not sure yet — please advise</option>
          </select>
        </label>
        {input('Desired start date', 'Desired Start Date', { type: 'date' })}
        <label className="field"><span>Care needed</span>
          <select name="Care Needed" defaultValue="Full-time (Mon–Fri)">
            <option>Full-time (Mon–Fri)</option><option>Part-time</option><option>Flexible / drop-in</option>
          </select>
        </label>
        <label className="field field-full"><span>Anything else? (optional)</span>
          <textarea name="Notes" rows="3" placeholder="Questions about fees, subsidy, food, naps — ask away!" />
        </label>
      </div>
      <button className="btn btn-primary btn-lg btn-block" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : '📝 Send Enrollment Enquiry'}
      </button>
      <p className="form-note">Prefer to see us first? <Link to="/book-a-tour">Book a tour instead</Link> — most families do!</p>
    </form>
  )
}
