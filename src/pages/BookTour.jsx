import { Link } from 'react-router-dom'
import { site } from '../content'
import { Icon } from '../components/chrome'
import { TourForm } from '../components/forms'
import { PageHero, Reveal } from '../components/ui'

export default function BookTour() {
  return (
    <>
      <PageHero icon="📅" title="Book a Tour"
        text="The best way to choose childcare is to see it, feel it and meet the people. Come visit Delight Daycare in Regina!" />

      <section className="section">
        <div className="wrap split contact-split">
          <Reveal>
            <h2>What to Expect on Your Tour 🌞</h2>
            <ol className="expect-list">
              <li><span aria-hidden="true">👋</span><div><strong>A warm welcome</strong><p>Meet our director and educators — and ask us absolutely anything.</p></div></li>
              <li><span aria-hidden="true">🏫</span><div><strong>See the classrooms</strong><p>Explore our infant room, toddler spaces, pre-K classroom and outdoor play area.</p></div></li>
              <li><span aria-hidden="true">🧸</span><div><strong>Feel the day</strong><p>Hear about our daily schedule, meals, naps and play-based learning approach.</p></div></li>
              <li><span aria-hidden="true">💬</span><div><strong>Honest next steps</strong><p>We&apos;ll confirm openings for your child&apos;s age, discuss fees and subsidy, with zero pressure.</p></div></li>
            </ol>
            <div className="info-card slim">
              <h3>Prefer to talk first?</h3>
              <a className="info-row" href={site.phoneHref}>{Icon.phone}<span><strong>{site.phoneDisplay}</strong>Mon–Fri · 7:00 a.m. – 5:30 p.m.</span></a>
              <a className="info-row" href={`mailto:${site.email}`}>{Icon.mail}<span><strong>{site.email}</strong>We reply within one business day</span></a>
              <p className="muted-note">📍 {site.addressLine} — call for our full street address and directions.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="form-card">
              <h2 className="form-title">Request Your Tour 📅</h2>
              <p className="form-sub">Fill this in and we&apos;ll confirm your visit by email or phone. Tours usually take 20–30 minutes — children are very welcome to come along!</p>
              <TourForm />
            </div>
            <p className="under-form">Already sure we&apos;re the one? <Link to="/enroll">Skip ahead and Enroll Now →</Link></p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
