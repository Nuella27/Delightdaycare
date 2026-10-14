/**
 * ============================================================
 *  DELIGHT DAYCARE — EASY CONTENT EDITING (your mini-CMS)
 * ============================================================
 *  This ONE file holds almost all of the words, photos and
 *  lists shown on the website. To update the site, edit the
 *  text between the quotes below and save — then rebuild /
 *  redeploy (see README.md). No other files need to change.
 *
 *  Swap in real staff names, real parent reviews (with
 *  permission) and your real social-media page links here.
 * ============================================================
 */

export const site = {
  name: 'Delight Daycare',
  tagline: 'Give Your Child a Bright Start',
  city: 'Regina, Saskatchewan',
  // Display address — add your street address here when ready to publish it.
  addressLine: 'Regina, Saskatchewan, Canada',
  addressNote: 'Serving families across Regina — call us for our full street address and directions.',
  phoneDisplay: '+1 (639) 538-1838',
  phoneHref: 'tel:+16395381838',
  email: 'ebereemichael@gmail.com',
  hours: [
    { days: 'Monday – Friday', time: '7:00 a.m. – 5:30 p.m.' },
    { days: 'Saturday – Sunday', time: 'Closed' },
  ],
  ages: '6 weeks – 5 years',
  // 🔗 Replace these with your real Delight Daycare page links:
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    tiktok: 'https://www.tiktok.com/',
  },
  mapEmbed:
    'https://www.google.com/maps?q=Regina,+Saskatchewan,+Canada&z=12&output=embed',
}

export const highlights = [
  {
    icon: '🛡️',
    title: 'Safe & Nurturing',
    text: 'A licensed, secure and loving environment where every child feels safe, seen and celebrated.',
    color: 'blue',
  },
  {
    icon: '🧩',
    title: 'Play-Based Learning',
    text: 'Children learn best through play — our days are built around curiosity, creativity and discovery.',
    color: 'yellow',
  },
  {
    icon: '💛',
    title: 'Caring Certified Staff',
    text: 'Qualified early childhood educators who know every child by name — and every family by heart.',
    color: 'pink',
  },
  {
    icon: '🌈',
    title: 'Infants to Pre-K',
    text: 'Now enrolling! Gentle infant care, busy toddler programs and school-ready pre-K, all under one roof.',
    color: 'green',
  },
]

export const programs = [
  {
    id: 'infant',
    icon: '👶',
    name: 'Infant Care',
    ages: '6 weeks – 18 months',
    image: '/images/infant-care.jpg',
    alt: 'Caregiver gently holding a happy baby in a cozy infant room',
    summary:
      'A calm, cozy start to life away from home — with cuddles, sensory play and a routine that follows your baby.',
    points: [
      'Low caregiver-to-baby ratios for one-on-one attention',
      'Feeding, nap and diaper routines that follow your home schedule',
      'Tummy time, sensory play, songs and gentle first milestones',
      'Daily updates for parents — feedings, naps and sweet moments',
    ],
  },
  {
    id: 'toddler',
    icon: '🖍️',
    name: 'Toddler Program',
    ages: '18 months – 3 years',
    image: '/images/toddler-play.jpg',
    alt: 'Toddlers drawing together with colourful crayons',
    summary:
      'Built for busy little explorers — language-rich play, first friendships, messy art and lots of movement.',
    points: [
      'Crayons, paint, playdough and building blocks every single day',
      'Stories, songs and simple words that grow early language',
      'Safe indoor and outdoor spaces made for climbing and exploring',
      'Gentle guidance with routines, sharing and early independence',
    ],
  },
  {
    id: 'prek',
    icon: '⭐',
    name: 'Pre-K Program',
    ages: '3 – 5 years',
    image: '/images/prek-learning.jpg',
    alt: 'Pre-K children eagerly raising hands during story time',
    summary:
      'Kindergarten readiness with joy — early literacy, numbers, science discoveries and confident social skills.',
    points: [
      'Letters, sounds, counting and early writing through play',
      'Story time, show-and-tell and hands-on science fun',
      'Music, movement and outdoor play every day',
      'Graduates who start kindergarten confident and curious',
    ],
  },
]

export const schedule = [
  { time: '7:00 – 8:30', activity: 'Warm welcomes & free play', icon: '👋' },
  { time: '8:30 – 9:00', activity: 'Healthy breakfast / morning snack', icon: '🍎' },
  { time: '9:00 – 9:30', activity: 'Circle time — songs, stories & sharing', icon: '🎵' },
  { time: '9:30 – 10:30', activity: 'Play-based learning centres & art', icon: '🎨' },
  { time: '10:30 – 11:30', activity: 'Outdoor play & fresh prairie air', icon: '☀️' },
  { time: '11:30 – 12:15', activity: 'Nutritious lunch together', icon: '🥪' },
  { time: '12:15 – 2:00', activity: 'Nap & quiet rest time', icon: '🌙' },
  { time: '2:00 – 2:30', activity: 'Afternoon snack', icon: '🍌' },
  { time: '2:30 – 3:30', activity: 'Music, movement & group games', icon: '💃' },
  { time: '3:30 – 4:30', activity: 'Outdoor play / nature exploration', icon: '🌳' },
  { time: '4:30 – 5:30', activity: 'Free play, stories & pick-up hugs', icon: '📚' },
]

export const team = [
  {
    name: 'Our Director',
    role: 'Director & Lead Educator',
    emoji: '🌼',
    bio: 'A certified Early Childhood Educator who believes every child deserves to be known, loved and encouraged — and makes sure Delight feels like a second home.',
  },
  {
    name: 'Our Infant Team',
    role: 'Infant Care Educators',
    emoji: '🍼',
    bio: 'Patient, gentle caregivers who specialise in babies\' first milestones, cosy routines and lots of cuddles throughout the day.',
  },
  {
    name: 'Our Classroom Team',
    role: 'Toddler & Pre-K Educators',
    emoji: '🎨',
    bio: 'Playful, qualified educators who turn every day into an adventure of stories, songs, art and discovery for toddlers and pre-K children.',
  },
]
// Tip: replace the three cards above with real names, photos and bios in this file.

export const gallery = [
  { src: '/images/hero-children.jpg', alt: 'Children playing with building blocks in a bright classroom', caption: 'Building & creating together', tag: 'Classrooms' },
  { src: '/images/classroom.jpg', alt: 'Bright, tidy daycare classroom with play corners', caption: 'Our bright classrooms', tag: 'Classrooms' },
  { src: '/images/infant-care.jpg', alt: 'Caregiver cuddling a baby in the infant room', caption: 'Gentle infant care', tag: 'Happy Moments' },
  { src: '/images/toddler-play.jpg', alt: 'Toddlers colouring with crayons', caption: 'Little artists at work', tag: 'Activities' },
  { src: '/images/prek-learning.jpg', alt: 'Pre-K story time with hands raised', caption: 'Story time excitement', tag: 'Activities' },
  { src: '/images/art-activity.jpg', alt: 'Children painting with bright colours', caption: 'Messy, joyful art', tag: 'Activities' },
  { src: '/images/outdoor-play.jpg', alt: 'Children playing outside on a sunny day', caption: 'Sunshine & outdoor play', tag: 'Outdoor Play' },
  { src: '/images/music-fun.jpg', alt: 'Children dancing with musical instruments', caption: 'Music & movement', tag: 'Activities' },
  { src: '/images/snack-time.jpg', alt: 'Children enjoying a healthy snack together', caption: 'Healthy snacks with friends', tag: 'Happy Moments' },
]

export const testimonials = [
  {
    quote:
      'Delight Daycare has been the best decision for our family. Our daughter runs to the door every morning! The teachers know her so well and send us updates and photos throughout the day.',
    name: 'Sarah M.',
    detail: 'Parent of a 3-year-old · Regina',
    stars: 5,
  },
  {
    quote:
      'As first-time parents we were nervous leaving our baby, but the infant team made it so easy. He naps, eats and plays happily — and we always feel informed and involved.',
    name: 'Priya & Daniel K.',
    detail: 'Parents of an infant · Regina',
    stars: 5,
  },
  {
    quote:
      'Our son started shy and is now confident, curious and so ready for kindergarten. The play-based learning really works — he comes home singing, counting and telling us stories.',
    name: 'Melissa T.',
    detail: 'Parent of a pre-K graduate · Regina',
    stars: 5,
  },
  {
    quote:
      'Warm staff, a clean and bright space, healthy food and honest communication. It truly feels like family. I recommend Delight to every parent I meet in Regina.',
    name: 'Amanda R.',
    detail: 'Parent of two · Regina',
    stars: 5,
  },
  {
    quote:
      'The daily schedule, outdoor time and caring routines give our toddler exactly what she needs. We love the balance of fun, learning and rest.',
    name: 'Jordan & Alex L.',
    detail: 'Parents of a toddler · Regina',
    stars: 5,
  },
]
// Tip: replace these with your real Google/Facebook reviews (with parent permission).

export const faqs = [
  {
    q: 'What ages do you accept?',
    a: 'We welcome children from 6 weeks to 5 years old, with dedicated infant, toddler and pre-K programs so every age group gets care and learning made just for them.',
  },
  {
    q: 'Are you a licensed daycare?',
    a: 'Yes — Delight Daycare is a licensed childcare centre in Regina, Saskatchewan, following provincial childcare regulations, safety standards and staff certification requirements.',
  },
  {
    q: 'What are your hours?',
    a: 'We are open Monday to Friday, 7:00 a.m. to 5:30 p.m., to support working families across Regina. We are closed on weekends and statutory holidays.',
  },
  {
    q: 'How do I enroll my child?',
    a: 'Start by booking a tour! Visit us, meet our team and see our classrooms. If we are the right fit, we will walk you through the simple enrollment forms and next available start dates.',
  },
  {
    q: 'What should my child bring each day?',
    a: 'A change of clothes, indoor shoes, weather-ready outerwear, diapers/wipes if needed, and a favourite comfort item for rest time. We will share a full welcome checklist when you enroll.',
  },
  {
    q: 'Do you have space right now?',
    a: 'Spaces for infants to pre-K fill quickly. Call us at +1 (639) 538-1838 or book a tour and we will happily confirm current openings for your child\'s age group.',
  },
]
