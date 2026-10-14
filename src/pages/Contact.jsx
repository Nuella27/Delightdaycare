import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs, site } from '../content'
import { Icon, Socials } from '../components/chrome'
import { ContactForm } from '../components/forms'
import { Eyebrow, PageHero, Reveal } from '../components/ui'

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <>
      <PageHero icon="💌" title="Contact Us"
        text="Questions about openings, fees or programs? We'd love to hear from your family — reach out any way you like." />

      <section className="section">
        <div className="wrap split contact-split">
          <Reveal>
            <Eyebrow>Send Us a Message</Eyebrow>
            <h2>We Reply Within One Business Day 💬</h2>
            <div className="form-card"><ContactForm /></div>
          </Reveal>
          <Reveal>
            <div className="info-card">
              <h3>Visit or Call</h3>
              <a className="info-row" href={site.phoneHref}>{Icon.phone}<span><strong>Call / Text</strong>{site.phoneDisplay}</span></a>
              <a className="info-row" href={`mailto:${site.email}`}>{Icon.mail}<span><strong>Email</strong>{site.email}</span></a>
              <span className="info-row">{Icon.pin}<span><strong>Location</strong>{site.addressLine}<small>{site.addressNote}</small></span></span>
              <span className="info-row">{Icon.clock}<span><strong>Hours</strong>{site.hours.map(h => <span key={h.days} className="hours-line">{h.days}: {h.time}</span>)}</span></span>
              <h4>Follow Our Fun</h4>
              <Socials />
              <Link to="/book-a-tour" className="btn btn-yellow btn-block">📅 Book a Tour Instead</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap narrow">
          <Reveal className="center-head">
            <Eyebrow>Find Us in Regina</Eyebrow>
            <h2>Proudly Serving Regina, SK 🗺️</h2>
          </Reveal>
          <Reveal>
            <div className="map-card">
              <iframe
                title="Map — Delight Daycare, Regina, Saskatchewan"
                src={site.mapEmbed}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="consent-note">📍 Located in Regina, Saskatchewan — call <a href={site.phoneHref}>{site.phoneDisplay}</a> for our full street address and directions before your visit.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap narrow">
          <Reveal className="center-head">
            <Eyebrow>Good Questions</Eyebrow>
            <h2>Frequently Asked Questions ❓</h2>
          </Reveal>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <div className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {f.q}<span aria-hidden="true">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && <p>{f.a}</p>}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <p>Still curious?</p>
            <div className="btn-row center-row">
              <a href={site.phoneHref} className="btn btn-primary">{Icon.phone} Call {site.phoneDisplay}</a>
              <Link to="/book-a-tour" className="btn btn-yellow">Book a Tour Today</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
