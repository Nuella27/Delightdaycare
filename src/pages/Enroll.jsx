import { Link } from 'react-router-dom'
import { programs } from '../content'
import { EnrollForm } from '../components/forms'
import { Eyebrow, PageHero, Reveal } from '../components/ui'

export default function Enroll() {
  return (
    <>
      <PageHero icon="🎒" title="Enroll Now"
        text="Ready to give your child a bright start? Send an enrollment enquiry and we'll confirm openings for your child's age group." />

      <section className="section">
        <div className="wrap split contact-split">
          <Reveal>
            <Eyebrow>Before You Enroll</Eyebrow>
            <h2>Most Families Start With a Tour 🌞</h2>
            <p>
              Choosing childcare is a big decision. We warmly recommend a short visit first — meet the educators,
              see the classrooms and make sure Delight feels right for your family.
            </p>
            <div className="cards-stack">
              {programs.map(p => (
                <Link key={p.id} to={`/programs#${p.id}`} className="mini-program">
                  <span aria-hidden="true">{p.icon}</span>
                  <span><strong>{p.name}</strong><small>{p.ages}</small></span>
                  <span className="mini-arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
            <Link to="/book-a-tour" className="btn btn-primary btn-lg">Book a Tour Today</Link>
            <ul className="check-list mt">
              <li>No obligation — tours are friendly and pressure-free</li>
              <li>Ask about the Saskatchewan childcare subsidy</li>
              <li>Waitlist options if your age group is full</li>
            </ul>
          </Reveal>
          <Reveal>
            <div className="form-card">
              <h2 className="form-title">Enrollment Enquiry 📝</h2>
              <p className="form-sub">Tell us a little about your child and we&apos;ll reply with openings, fees and your next steps.</p>
              <EnrollForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
