# ☀️ Delight Daycare — Website

A warm, playful, fully responsive website for **Delight Daycare**, a licensed daycare in **Regina, Saskatchewan, Canada** — built to attract local parents and increase enrollment.

**Live pages:** Home · About Us · Programs · Gallery · Testimonials · Contact · Book a Tour · Enroll Now

## 🚀 Run it

```bash
npm install     # once
npm run dev     # local preview at http://localhost:5173
npm run build   # production build into dist/
npm run preview # preview the production build
```

Deploy the `dist/` folder to Netlify, Vercel, or any static host (SPA fallback rules are already included in `public/_redirects` and `vercel.json`).

## ✏️ Easy content updates (mini-CMS)

Almost all text, photos and lists live in **one file**: [`src/content.js`](src/content.js)

Edit there — no other files need to change — to update:

- Phone, email, address, hours, social-media links
- Programs, daily schedule, team introductions
- Gallery photos & captions, parent testimonials, FAQs

Photos live in `public/images/` — replace a photo file (keep the same name) or point `src/content.js` at a new one.
To grow into a full visual CMS later, the same content file maps 1-to-1 onto a free headless CMS such as Sanity or Contentful.

### Before you launch, personalize these placeholders

- [ ] **Social links** — replace the generic Facebook/Instagram/TikTok URLs in `src/content.js` (`site.socials`) with your real Delight Daycare pages
- [ ] **Street address** — add your full street address (`site.addressLine`) and update the map embed if you want an exact pin
- [ ] **Team cards** — swap the role-based team cards for real names/photos/bios
- [ ] **Testimonials** — replace the sample parent quotes with real reviews (with parent permission)
- [ ] **Domain** — update the `canonical` URL in `index.html` to your real domain

## 📬 Forms — IMPORTANT one-time activation

Contact, Book-a-Tour and Enroll forms send submissions to **ebereemichael@gmail.com** via [FormSubmit](https://formsubmit.co) (no server or backend needed):

1. Submit any form on the site once (e.g. a test tour booking)
2. FormSubmit emails a confirmation to `ebereemichael@gmail.com` — click **Activate**
3. Every future submission arrives in that inbox as a tidy table

If sending ever fails in a visitor's browser, the form automatically falls back to opening their email app with the message pre-filled, so no enquiry is lost.

## 🔍 Local SEO built in

- Title/meta targeting “daycare in Regina” & “childcare Regina SK”
- `ChildCare` LocalBusiness JSON-LD schema (phone, Regina geo, hours) in `index.html`
- Semantic HTML, descriptive image alt text, fast-loading optimized images

Submit the site to **Google Business Profile** and **Google Search Console** after launch for maximum local reach.

## 📞 Site contact details

- Phone: +1 (639) 538-1838
- Email: ebereemichael@gmail.com
- Location: Regina, Saskatchewan, Canada
