import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { programs, schedule } from '../content'
import { CTABand, Eyebrow, PageHero, Reveal } from '../components/ui'

export default function Programs() {
  const { hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    }
  }, [hash])

  return (
    <>
      <PageHero icon="🧱" title="Our Programs"
        text="Play-based early learning for infants, toddlers and pre-K children in Regina, SK — each age group with a program made just for them." />

      <section className="section">
        <div className="wrap program-list">
          {programs.map((p, idx) => (
            <Reveal key={p.id}>
              <article id={p.id} className={`program-detail ${idx % 2 ? 'flip' : ''}`}>
                <img src={p.image} alt={p.alt} loading="lazy" />
                <div>
                  <span className="age-pill">{p.icon} {p.ages}</span>
                  <h2>{p.name}</h2>
                  <p className="lead">{p.summary}</p>
                  <ul className="check-list">
                    {p.points.map(pt => <li key={pt}>{pt}</li>)}
                  </ul>
                  <div className="btn-row">
                    <Link to="/book-a-tour" className="btn btn-primary">Book a Tour</Link>
                    <Link to="/enroll" className="btn btn-outline">Enroll Now</Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Learning approach */}
      <section className="section section-blue">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Our Learning Approach</Eyebrow>
            <h2>Play Today, Ready for Tomorrow 🎓</h2>
            <p>Our educators thoughtfully set up invitations to play — then follow each child&apos;s curiosity.</p>
          </Reveal>
          <div className="cards-4">
            {[
              { icon: '📚', t: 'Language & Literacy', d: 'Stories, songs, rhymes and conversation woven through the whole day.' },
              { icon: '🔢', t: 'Early Math & Science', d: 'Counting blocks, sorting, pouring, planting and wondering “why?”' },
              { icon: '🎨', t: 'Creativity & Art', d: 'Paint, crayons, playdough and music — process over perfection, always.' },
              { icon: '🏃', t: 'Movement & Outdoors', d: 'Daily fresh-air play that builds strong bodies and big appetites for learning.' },
            ].map((a, i) => (
              <Reveal key={a.t} delay={i * 70}>
                <article className="feature-card tint-white">
                  <span className="feature-icon" aria-hidden="true">{a.icon}</span>
                  <h3>{a.t}</h3><p>{a.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Daily schedule */}
      <section className="section" id="schedule">
        <div className="wrap narrow">
          <Reveal className="center-head">
            <Eyebrow>A Day at Delight</Eyebrow>
            <h2>Our Daily Schedule 🕖</h2>
            <p>A gentle, predictable rhythm helps children feel secure — with plenty of flexibility for each age group. (Infants follow their own feeding and sleep cues.)</p>
          </Reveal>
          <Reveal>
            <ol className="schedule-list">
              {schedule.map(s => (
                <li key={s.time}>
                  <span className="sched-time">{s.time}</span>
                  <span className="sched-icon" aria-hidden="true">{s.icon}</span>
                  <span className="sched-activity">{s.activity}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="center mt">
            <p className="muted-note">Times are a friendly guide — play, weather and little moods shape each real day!</p>
            <Link to="/book-a-tour" className="btn btn-primary btn-lg">See a Day in Person — Book a Tour</Link>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
