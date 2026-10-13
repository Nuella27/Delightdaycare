import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../content'
import { CTABand, PageHero, Reveal } from '../components/ui'

const filters = ['All', 'Classrooms', 'Activities', 'Outdoor Play', 'Happy Moments']

export default function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const shown = filter === 'All' ? gallery : gallery.filter(g => g.tag === filter)

  const close = useCallback(() => setLightbox(null), [])
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close])

  return (
    <>
      <PageHero icon="📸" title="Our Gallery"
        text="Classrooms, activities, outdoor play and happy moments at Delight Daycare in Regina. All photos are shared with parent consent." />

      <section className="section">
        <div className="wrap">
          <div className="filter-row" role="group" aria-label="Filter photos">
            {filters.map(f => (
              <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
          <div className="gallery-grid">
            {shown.map((g, i) => (
              <Reveal key={g.src} delay={(i % 3) * 60}>
                <button className="gallery-item" onClick={() => setLightbox(g)} aria-label={`Enlarge photo: ${g.caption}`}>
                  <img src={g.src} alt={g.alt} loading="lazy" />
                  <span className="gallery-caption">{g.caption}<small>{g.tag}</small></span>
                </button>
              </Reveal>
            ))}
          </div>
          <p className="consent-note">🔒 Your child&apos;s privacy matters: photos of children are only ever shared with signed parent/guardian consent, and families may opt out at any time.</p>
        </div>
      </section>

      <CTABand />

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.caption} onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close photo viewer">✕</button>
          <figure onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <figcaption>{lightbox.caption} · {lightbox.tag}</figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
