import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { Header, Footer } from './components/chrome'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import GalleryPage from './pages/GalleryPage'
import TestimonialsPage from './pages/TestimonialsPage'
import Contact from './pages/Contact'
import BookTour from './pages/BookTour'
import Enroll from './pages/Enroll'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

function NotFound() {
  return (
    <section className="section center notfound">
      <span className="team-emoji" aria-hidden="true">🧭</span>
      <h1>Oops — this page wandered off!</h1>
      <p>Let&apos;s get you back to the fun.</p>
      <div className="btn-row center-row">
        <Link to="/" className="btn btn-primary btn-lg">Back to Home</Link>
        <Link to="/book-a-tour" className="btn btn-yellow btn-lg">Book a Tour</Link>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <ScrollManager />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-a-tour" element={<BookTour />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
