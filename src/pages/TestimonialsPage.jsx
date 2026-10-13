import { Link } from 'react-router-dom'
import { testimonials } from '../content'
import { CTABand, PageHero, Reveal, Stars } from '../components/ui'

export default function TestimonialsPage() {
  return (
    <>
      <PageHero icon="💛" title="What Regina Parents Say"
        text="Real words from local families who trust Delight Daycare with their most precious people." />

      <section className="section">
        <div className="wrap">
          <Reveal className="rating-banner">
            <Stars /><strong>Families across Regina recommend Delight Daycare</strong>
            <span>Warm staff · Play-based learning · Communication parents love</span>
          </Reveal>
          <div className="cards-3 mt">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 80}>
                <figure className="quote-card tall">
                  <span className="quote-mark" aria-hidden="true">“</span>
                  <Stars n={t.stars} />
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><strong>{t.name}</strong><small>{t.detail}</small></figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={160}>
              <div className="quote-card cta-card">
                <span className="team-emoji" aria-hidden="true">🌞</span>
                <h3>Your family could be next!</h3>
                <p>Come meet us, tour our classrooms and see why Regina parents choose Delight.</p>
                <Link to="/book-a-tour" className="btn btn-primary">Book a Tour Today</Link>
                <Link to="/enroll" className="btn btn-outline">Enroll Now</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
