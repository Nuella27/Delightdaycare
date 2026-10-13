import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../content'

export const Icon = {
  phone: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8z"/></svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.4 2 1.8 3.6 3.9 3.9v3c-1.6 0-3-.5-3.9-1.3v6.6c0 3.4-2.4 5.8-5.6 5.8A5.4 5.4 0 0 1 5.5 15.6c0-3 2.4-5.4 5.5-5.4l1.1.1v3.1a2.4 2.4 0 0 0-1.1-.3 2.3 2.3 0 0 0-2.3 2.4 2.3 2.3 0 0 0 2.3 2.3c1.4 0 2.4-1 2.4-2.6V3h3.2z"/></svg>
  ),
}

export function Socials({ className = '' }) {
  return (
    <div className={`socials ${className}`}>
      <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Delight Daycare on Facebook">{Icon.facebook}</a>
      <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Delight Daycare on Instagram">{Icon.instagram}</a>
      <a href={site.socials.tiktok} target="_blank" rel="noreferrer" aria-label="Delight Daycare on TikTok">{Icon.tiktok}</a>
    </div>
  )
}

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/programs', label: 'Programs' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span className="topbar-item hide-sm">{Icon.clock} Mon–Fri · 7:00 a.m. – 5:30 p.m.</span>
          <a className="topbar-item" href={site.phoneHref}>{Icon.phone} {site.phoneDisplay}</a>
          <a className="topbar-item hide-md" href={`mailto:${site.email}`}>{Icon.mail} {site.email}</a>
          <span className="topbar-item hide-sm">Licensed Daycare · Regina, SK</span>
        </div>
      </div>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="wrap header-in">
          <Link to="/" className="logo" aria-label="Delight Daycare — home">
            <span className="logo-sun" aria-hidden="true">☀️</span>
            <span className="logo-text">Delight<small>DAYCARE · REGINA</small></span>
          </Link>
          <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>{l.label}</NavLink>
            ))}
            <Link to="/book-a-tour" className="btn btn-primary nav-cta">Book a Tour Today</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wave wave-footer" aria-hidden="true">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none"><path d="M0,50 C240,90 480,10 720,40 C960,70 1200,20 1440,55 L1440,90 L0,90 Z" /></svg>
      </div>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo light"><span className="logo-sun" aria-hidden="true">☀️</span><span className="logo-text">Delight<small>DAYCARE · REGINA</small></span></Link>
          <p>A warm, licensed daycare in Regina, Saskatchewan where little learners play, grow and shine every day.</p>
          <Socials />
        </div>
        <nav aria-label="Footer">
          <h3>Explore</h3>
          {links.map(l => <Link key={l.to} to={l.to}>{l.label}</Link>)}
          <Link to="/book-a-tour">Book a Tour</Link>
          <Link to="/enroll">Enroll Now</Link>
        </nav>
        <div>
          <h3>Programs</h3>
          <Link to="/programs#infant">Infant Care (6 wks–18 mo)</Link>
          <Link to="/programs#toddler">Toddler Program (18 mo–3 yrs)</Link>
          <Link to="/programs#prek">Pre-K Program (3–5 yrs)</Link>
          <Link to="/programs#schedule">Daily Schedule</Link>
          <Link to="/gallery">Photo Gallery</Link>
        </div>
        <div className="footer-contact">
          <h3>Get in Touch</h3>
          <a href={site.phoneHref}>{Icon.phone} {site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{Icon.mail} {site.email}</a>
          <span>{Icon.pin} {site.addressLine}</span>
          <span>{Icon.clock} Mon–Fri · 7:00 a.m. – 5:30 p.m.</span>
          <Link to="/book-a-tour" className="btn btn-yellow footer-cta">Book a Tour Today</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} Delight Daycare · Regina, Saskatchewan. All rights reserved.</span>
        <span>Licensed Childcare · Daycare in Regina · Childcare Regina SK</span>
      </div>
      {/* Sticky mobile action bar */}
      <div className="mobile-bar">
        <a href={site.phoneHref}>{Icon.phone} Call Us</a>
        <Link to="/book-a-tour" className="mobile-book">📅 Book a Tour</Link>
      </div>
    </footer>
  )
}
