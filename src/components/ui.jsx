import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { site } from '../content'
import { Icon } from './chrome'

export function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }),
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export function Stars({ n = 5 }) {
  return <span className="stars" aria-label={`${n} out of 5 stars`}>{'★'.repeat(n)}</span>
}

export function Eyebrow({ children }) {
  return <span className="eyebrow">⭐ {children}</span>
}

export function PageHero({ icon, title, text }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="page-hero-icon" aria-hidden="true">{icon}</span>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div className="wave" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path d="M0,50 C240,90 480,10 720,40 C960,70 1200,20 1440,55 L1440,90 L0,90 Z" /></svg>
      </div>
    </section>
  )
}

export function CTABand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-in">
        <div>
          <span className="cta-sun" aria-hidden="true">☀️</span>
          <h2>Come See the Delight Difference!</h2>
          <p>Spaces for infants to pre-K fill quickly in Regina. Book a friendly, no-pressure tour — we can&apos;t wait to meet your family.</p>
        </div>
        <div className="cta-actions">
          <Link to="/book-a-tour" className="btn btn-white btn-lg">Book a Tour Today</Link>
          <a href={site.phoneHref} className="btn btn-outline-white btn-lg">{Icon.phone} {site.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}

export function TrustBar() {
  const items = [
    { icon: '🏅', big: 'Licensed', small: 'Saskatchewan childcare centre' },
    { icon: '👶', big: '6 wks – 5 yrs', small: 'Infants to pre-K welcome' },
    { icon: '👩‍🏫', big: 'Certified Staff', small: 'Qualified ECE educators' },
    { icon: '🕖', big: 'Mon–Fri 7–5:30', small: 'Hours for working families' },
  ]
  return (
    <div className="wrap trustbar">
      {items.map(i => (
        <div className="trust-item" key={i.big}>
          <span aria-hidden="true">{i.icon}</span>
          <div><strong>{i.big}</strong><small>{i.small}</small></div>
        </div>
      ))}
    </div>
  )
}
