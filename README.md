# Prashant Khope — Portfolio

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customise

| What | Where |
| --- | --- |
| All text, experience, skills, projects, socials | `src/data/portfolio.ts` |
| Profile photo | drop `profile.jpg` in `public/` and set `photo: "/profile.jpg"` |
| Project images | replace files in `public/projects/` |
| Resume download | add `public/Prashant-Khope-Resume.pdf` |
| Colours / fonts | `@theme` block in `src/app/globals.css` |
| Domain for SEO | `siteConfig.url` in `src/data/portfolio.ts` |

## Structure

```
src/
  app/            layout (SEO, fonts, JSON-LD), page, sitemap, robots
  components/
    layout/       Navbar, Footer
    sections/     Hero, About, Skills, Projects, Experience, Contact
    ui/           Section, Reveal, Button, SocialIcon, BackgroundGlow
  data/           portfolio.ts  ← edit me
  lib/            utils
```

The contact form opens the visitor's email app with the message pre-filled.
To send messages directly from the site, POST the form to Formspree, Resend, or a Next.js route handler.
