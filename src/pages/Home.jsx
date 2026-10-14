import { Link } from 'react-router-dom'
import { highlights, programs, testimonials } from '../content'
import { CTABand, Eyebrow, Reveal, Stars, TrustBar } from '../components/ui'
import { Icon } from '../components/chrome'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-decor" aria-hidden="true">
          <span className="float f1">⭐</span><span className="float f2">🖍️</span>
          <span className="float f3">🧱</span><span className="float f4">☀️</span><span className="float f5">🌈</span>
        </div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="hero-badge">🌞 Now Enrolling — Infants to Pre-K in Regina!</span>
            <h1>Give Your Child a <em>Bright Start</em></h1>
            <p className="hero-sub">Now Enrolling at Delight Daycare in Regina, SK</p>
            <p className="hero-text">
              A licensed, loving daycare where Regina&apos;s littlest learners play, explore and grow —
              with caring certified educators, joyful play-based learning and a home-away-from-home feeling every day.
            </p>
            <div className="hero-actions">
              <Link to="/book-a-tour" className="btn btn-primary btn-lg">Book a Tour Today</Link>
              <Link to="/programs" className="btn btn-soft btn-lg">Explore Programs →</Link>
            </div>
            <div className="hero-proof">
              <Stars /><span><strong>Loved by Regina families</strong> · Licensed childcare in Saskatchewan</span>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-img-card">
              <img src="/images/hero-children.jpg" alt="Happy children playing with building blocks at Delight Daycare in Regina" fetchpriority="high" />
              <div className="hero-chip chip-a">🧸 Ages 6 weeks – 5 years</div>
              <div className="hero-chip chip-b">⭐ Play-Based Learning</div>
            </div>
          </div>
        </div>
        <div className="hero-cta-strip">
          <div className="wrap strip-in">
            <span>Ready to see it in person?</span>
            <Link to="/book-a-tour">Book a Tour</Link>
            <span className="dot" aria-hidden="true">•</span>
            <Link to="/enroll">Enroll Now</Link>
            <span className="dot" aria-hidden="true">•</span>
            <a href="tel:+16395381838">{Icon.phone} +1 (639) 538-1838</a>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ---------- HIGHLIGHTS ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Why Families Choose Delight</Eyebrow>
            <h2>A Happy Place to Learn &amp; Grow 🌈</h2>
            <p>Everything a parent hopes for — and everything a child loves — in one bright Regina daycare.</p>
          </Reveal>
          <div className="cards-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <article className={`feature-card tint-${h.color}`}>
                  <span className="feature-icon" aria-hidden="true">{h.icon}</span>
                  <h3>{h.title}</h3><p>{h.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WELCOME / ABOUT PREVIEW ---------- */}
      <section className="section section-soft">
        <div className="wrap split">
          <Reveal>
            <div className="img-stack">
              <img src="/images/classroom.jpg" alt="Bright and welcoming Delight Daycare classroom in Regina, SK" loading="lazy" />
              <img className="img-float" src="/images/snack-time.jpg" alt="Children enjoying a healthy snack together" loading="lazy" />
            </div>
          </Reveal>
          <Reveal>
            <Eyebrow>Welcome to Delight Daycare</Eyebrow>
            <h2>Where Little Learners Shine Bright ☀️</h2>
            <p>
              In the heart of Regina, Saskatchewan, Delight Daycare is a warm, licensed childcare centre built around
              one simple belief: <strong>children learn best when they feel safe, loved and free to play.</strong>
            </p>
            <ul className="check-list">
              <li>Licensed Saskatchewan childcare centre</li>
              <li>Certified early childhood educators who truly care</li>
              <li>Daily outdoor play, healthy snacks &amp; cosy rest time</li>
              <li>Open communication — updates parents actually look forward to</li>
            </ul>
            <div className="btn-row">
              <Link to="/about" className="btn btn-primary">More About Us</Link>
              <Link to="/book-a-tour" className="btn btn-outline">Book a Tour</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROGRAMS PREVIEW ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Our Programs</Eyebrow>
            <h2>Made for Every Little Age 🧱</h2>
            <p>From first cuddles to kindergarten confidence — a program that grows with your child.</p>
          </Reveal>
          <div className="cards-3">
            {programs.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <article className="program-card">
                  <img src={p.image} alt={p.alt} loading="lazy" />
                  <div className="program-body">
                    <span className="age-pill">{p.icon} {p.ages}</span>
                    <h3>{p.name}</h3><p>{p.summary}</p>
                    <Link to={`/programs#${p.id}`} className="text-link">See program details →</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- HOW ENROLLMENT WORKS ---------- */}
      <section className="section section-blue">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Getting Started Is Easy</Eyebrow>
            <h2>Three Simple Steps to Join 🌟</h2>
          </Reveal>
          <div className="steps">
            {[
              { n: '1', icon: '📅', t: 'Book a Tour', d: 'Visit our bright classrooms, meet our educators and ask us anything.', cta: ['Book a Tour', '/book-a-tour'] },
              { n: '2', icon: '💬', t: 'Chat & Choose', d: 'We confirm openings for your child\'s age group and your ideal start date.', cta: ['Contact Us', '/contact'] },
              { n: '3', icon: '🎒', t: 'Enroll & Shine', d: 'Complete simple enrollment forms — then watch your little one bloom!', cta: ['Enroll Now', '/enroll'] },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="step-card">
                  <span className="step-num" aria-hidden="true">{s.n}</span>
                  <span className="step-icon" aria-hidden="true">{s.icon}</span>
                  <h3>{s.t}</h3><p>{s.d}</p>
                  <Link to={s.cta[1]} className="text-link">{s.cta[0]} →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GALLERY STRIP ---------- */}
      <section className="section">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Life at Delight</Eyebrow>
            <h2>Smiles, Sunshine &amp; Small Victories 📸</h2>
            <p>A peek inside our classrooms, activities and outdoor adventures. Photos shared with parent consent.</p>
          </Reveal>
          <Reveal>
            <div className="gallery-strip">
              <img src="/images/art-activity.jpg" alt="Children painting colourful artwork" loading="lazy" />
              <img src="/images/outdoor-play.jpg" alt="Children playing outdoors on a sunny day" loading="lazy" />
              <img src="/images/music-fun.jpg" alt="Children dancing with musical instruments" loading="lazy" />
              <img src="/images/prek-learning.jpg" alt="Pre-K children at story time" loading="lazy" />
            </div>
            <div className="center mt"><Link to="/gallery" className="btn btn-primary">Visit Our Gallery</Link></div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS PREVIEW ---------- */}
      <section className="section section-soft">
        <div className="wrap">
          <Reveal className="center-head">
            <Eyebrow>Regina Parents Say</Eyebrow>
            <h2>Families Who Found Their Place 💛</h2>
          </Reveal>
          <div className="cards-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="quote-card">
                  <Stars n={t.stars} />
                  <blockquote>“{t.quote}”</blockquote>
                  <figcaption><strong>{t.name}</strong><small>{t.detail}</small></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="center mt"><Link to="/testimonials" className="btn btn-outline">Read More Parent Reviews</Link></div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
