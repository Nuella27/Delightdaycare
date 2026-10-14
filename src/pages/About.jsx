import { Link } from 'react-router-dom'
import { team } from '../content'
import { CTABand, Eyebrow, PageHero, Reveal } from '../components/ui'

export default function About() {
  return (
    <>
      <PageHero icon="☀️" title="About Delight Daycare"
        text="A licensed, family-loved daycare in Regina, Saskatchewan — where every child's day begins with a smile." />

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <div className="img-stack">
              <img src="/images/toddler-play.jpg" alt="Delight Daycare educator helping happy toddlers colour and create" loading="lazy" />
              <div className="img-badge">💛 Since day one:<br /><strong>Children first, always</strong></div>
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Our Mission</Eyebrow>
            <h2>Helping Little Learners Shine 🌟</h2>
            <p className="lead">
              Our mission is to give every child in Regina a bright start — a safe, joyful place where they are
              nurtured as individuals, inspired to explore, and prepared with confidence for school and life.
            </p>
            <p>
              We partner closely with parents, because you know your child best. Together, we celebrate every
              milestone — first steps, first words, first friendships — and build the strong foundation your
              child will carry forever.
            </p>
            <div className="btn-row">
              <Link to="/book-a-tour" className="btn btn-primary">Book a Tour Today</Link>
              <Link to="/programs" className="btn btn-outline">Our Programs</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2>How We Believe Children Learn 🧩</h2>
            <p>Play is not a break from learning — for young children, play <em>is</em> learning.</p>
          </Reveal>
          <div className="cards-3">
            {[
              { icon: '🎲', t: 'Play-Based Discovery', d: 'Children explore building blocks, art, water, sand, stories and pretend play — building language, math, science and social skills naturally, at their own pace.' },
              { icon: '💛', t: 'Relationships First', d: 'Warm, consistent caregivers help children feel secure. From that safe base, confidence, kindness and curiosity grow every single day.' },
              { icon: '🌱', t: 'Every Child Is Unique', d: 'We observe, listen and plan for each child\'s interests and stage — so shy beginners and bold explorers alike are gently challenged and cheered on.' },
              { icon: '🤝', t: 'Families Are Partners', d: 'Daily updates, open doors and honest conversation. You\'ll always know how your child ate, slept, played and learned.' },
              { icon: '☀️', t: 'Healthy Bodies, Happy Minds', d: 'nutritious snacks, plenty of outdoor prairie sunshine, music and movement — balanced with cosy rest and quiet time.' },
              { icon: '🛡️', t: 'Safety Without Compromise', d: 'Licensed Saskatchewan standards, secure entry, trained and certified staff, and clean, carefully maintained spaces — always.' },
            ].map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) * 80}>
                <article className="feature-card tint-blue">
                  <span className="feature-icon" aria-hidden="true">{v.icon}</span>
                  <h3>{v.t}</h3><p>{v.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Meet the Team</Eyebrow>
            <h2>The Caring Faces of Delight 👋</h2>
            <p>Certified early childhood educators who chose this work because they love it — and it shows.</p>
          </Reveal>
          <div className="cards-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 80}>
                <article className="team-card">
                  <span className="team-emoji" aria-hidden="true">{m.emoji}</span>
                  <h3>{m.name}</h3>
                  <span className="age-pill">{m.role}</span>
                  <p>{m.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <p className="muted-note">All Delight educators meet Saskatchewan certification requirements, hold current first aid/CPR, and complete background checks — because your trust means everything.</p>
            <div className="btn-row center-row">
              <Link to="/book-a-tour" className="btn btn-primary btn-lg">Meet Us on a Tour</Link>
              <Link to="/enroll" className="btn btn-yellow btn-lg">Enroll Now</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
