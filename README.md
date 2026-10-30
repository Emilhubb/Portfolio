
# Emil Kazımov | Portfolio

My personal portfolio website, built to showcase my projects, skills and contact information. It started as a Figma design and grew into a small Next.js app with a few live, interactive touches.

**Live site:** [emilkazimovdev.vercel.app](https://emilkazimovdev.vercel.app)

<img width="1005" height="857" alt="image" src="https://github.com/user-attachments/assets/86d12d79-58ec-44c7-9c31-1255e567eec0" />

---

## Features

- **Dark, neon-accented design system** designed in Figma first, then built in code
- **Fully responsive** layout for mobile, tablet and desktop
- **Spotify playlist section** loaded on demand
- **Duolingo card** showing my language learning progress
- **Quick stats and featured projects** sections with hover animations and image previews
- **Resume page** with education and certificates
- **Contact page** with a working form that sends email through Resend
- **SEO ready** with Open Graph and Twitter card metadata

## Tech Stack

**Framework and language**

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)

**Styling and UI**

- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) and [Aceternity UI](https://ui.aceternity.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) icons

**Integrations and server side**

- [Resend](https://resend.com/) for the contact form emails
- [Axios](https://axios-http.com/) for external requests
- `duolingo-api-js` for the Duolingo card
- Server-side handling of API keys through environment variables

**Deployment**

- [Vercel](https://vercel.com/)

## Project Structure

```
.
├── app/            # Routes and pages (home, resume, contact)
├── components/     # Reusable UI components
├── lib/            # Helpers and utilities
├── public/         # Images, icons and static assets
├── proxy.ts        # Next.js proxy (formerly middleware)
├── .env.example    # Example environment variables
└── ...
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Emilhubb/Portfolio.git

# 2. Go into the project folder
cd Portfolio

# 3. Install dependencies
npm install
```

### Environment variables

Copy the example file and fill in your own values:

```bash
cp .env.example .env.local
```

The keys you need are listed in `.env.example`. Never commit your real `.env.local` file.

### Run locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # Create a production build
npm run start   # Start the production server
npm run lint    # Run ESLint
```

## Other Projects

- [Weather App](https://weatherapp-project-81.vercel.app) (JavaScript, REST API)
- [Currency Converter, extended](https://currency-live-theta.vercel.app) (JavaScript, REST API)
- [Currency Converter, simple](https://currency-converter-project-alpha.vercel.app) (JavaScript, REST API)
- [SecScan](https://secscan-app.vercel.app), a website security scanner (Next.js, Tailwind, TypeScript)

## Contact

- Portfolio: [emilkazimovdev.vercel.app](https://emilkazimovdev.vercel.app)
- LinkedIn: [emil-kazimov](https://www.linkedin.com/in/emil-kazimov-b3b50926a/)
- GitHub: [@Emilhubb](https://github.com/Emilhubb)
- Instagram: [@imemillll](https://www.instagram.com/imemillll/)

---

Designed and built by Emil Kazımov.
