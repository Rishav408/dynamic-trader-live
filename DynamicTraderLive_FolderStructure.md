# Dynamic Trader Live — Production-Ready Folder Structure
## Next.js 14 (App Router) + TypeScript + Tailwind CSS + Firebase

---

```
dynamictraderlive/
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                        # GitHub Actions: lint + type-check on PR
│   │   └── deploy.yml                    # Auto-deploy to Vercel on merge to main
│   └── PULL_REQUEST_TEMPLATE.md
│
├── .husky/
│   ├── pre-commit                        # Run lint-staged before every commit
│   └── commit-msg                        # Enforce conventional commit messages
│
├── public/
│   ├── favicon.ico
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── og-image.jpg                      # Open Graph image (1200x630)
│   ├── og-image-program.jpg              # OG image for /program page
│   ├── og-image-results.jpg              # OG image for /results page
│   ├── site.webmanifest                  # PWA manifest
│   ├── robots.txt
│   ├── sitemap.xml                       # Auto-generated or static
│   │
│   ├── images/
│   │   ├── logo/
│   │   │   ├── dtl-logo-dark.svg         # Logo for dark theme
│   │   │   ├── dtl-logo-light.svg        # Logo for light theme
│   │   │   └── dtl-logo-mark.svg         # Icon-only logomark
│   │   │
│   │   ├── hero/
│   │   │   ├── hero-bg-shapes.svg        # Floating geometric background shapes
│   │   │   └── hero-chart-silhouette.svg # Candlestick chart silhouette
│   │   │
│   │   ├── cohort/
│   │   │   ├── cohort-4-banner.webp
│   │   │   └── live-class-preview.webp
│   │   │
│   │   ├── testimonials/
│   │   │   ├── rahul-m.webp
│   │   │   ├── priya-s.webp
│   │   │   ├── arjun-k.webp
│   │   │   └── ...                       # One per testimonial
│   │   │
│   │   ├── founders/
│   │   │   └── mentor-profile.webp
│   │   │
│   │   ├── dmc/
│   │   │   ├── dmc-framework-diagram.svg # DMC 5-pillar visual
│   │   │   └── order-block-explainer.svg
│   │   │
│   │   └── misc/
│   │       ├── trustpilot-badge.svg
│   │       └── razorpay-badge.svg
│   │
│   └── downloads/
│       ├── dmc-framework-intro.pdf       # Free PDF guide
│       ├── trade-journal-template.xlsx   # Free Excel journal
│       └── prop-firm-checklist.pdf       # Free checklist
│
├── src/
│   │
│   ├── app/                              # Next.js App Router
│   │   ├── layout.tsx                    # Root layout: fonts, theme, Navbar, Footer
│   │   ├── page.tsx                      # Home page (/)
│   │   ├── not-found.tsx                 # Custom 404 page
│   │   ├── error.tsx                     # Global error boundary
│   │   ├── loading.tsx                   # Global loading skeleton
│   │   │
│   │   ├── program/
│   │   │   ├── page.tsx                  # /program
│   │   │   └── loading.tsx
│   │   │
│   │   ├── roadmap/
│   │   │   └── page.tsx                  # /roadmap
│   │   │
│   │   ├── results/
│   │   │   └── page.tsx                  # /results
│   │   │
│   │   ├── resources/
│   │   │   ├── page.tsx                  # /resources (hub)
│   │   │   └── [slug]/
│   │   │       ├── page.tsx              # /resources/[article-slug]
│   │   │       └── loading.tsx
│   │   │
│   │   ├── faq/
│   │   │   └── page.tsx                  # /faq
│   │   │
│   │   ├── apply/
│   │   │   ├── page.tsx                  # /apply (application form)
│   │   │   └── success/
│   │   │       └── page.tsx              # /apply/success (thank you screen)
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx                  # /about (founder credibility)
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx                  # /contact
│   │   │
│   │   ├── legal/
│   │   │   ├── privacy-policy/
│   │   │   │   └── page.tsx
│   │   │   ├── terms/
│   │   │   │   └── page.tsx
│   │   │   └── risk-disclaimer/
│   │   │       └── page.tsx
│   │   │
│   │   └── api/                          # Next.js API Routes (serverless)
│   │       ├── apply/
│   │       │   └── route.ts              # POST /api/apply → save to Firestore
│   │       ├── contact/
│   │       │   └── route.ts              # POST /api/contact → send email
│   │       └── razorpay/
│   │           ├── create-order/
│   │           │   └── route.ts          # POST: create Razorpay order
│   │           └── verify/
│   │               └── route.ts          # POST: verify payment signature
│   │
│   ├── components/
│   │   │
│   │   ├── layout/                       # Global structural components
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx            # Main navbar wrapper
│   │   │   │   ├── NavLinks.tsx          # Center nav links
│   │   │   │   ├── NavDropdown.tsx       # Hover dropdown (Program / Resources)
│   │   │   │   ├── NavCTA.tsx            # "Apply Now" button in navbar
│   │   │   │   ├── MobileDrawer.tsx      # Full-screen mobile nav drawer
│   │   │   │   └── index.ts              # Barrel export
│   │   │   │
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterLinks.tsx       # Link columns
│   │   │   │   ├── FooterLegal.tsx       # Risk disclaimer strip at bottom
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── ThemeToggle/
│   │   │       ├── ThemeToggle.tsx       # Sun/moon toggle button
│   │   │       └── index.ts
│   │   │
│   │   ├── ui/                           # Primitive, reusable UI atoms
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx            # Variants: primary, secondary, ghost, danger
│   │   │   │   ├── Button.types.ts
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Card/
│   │   │   │   ├── Card.tsx              # Glassmorphism card base
│   │   │   │   ├── GlowCard.tsx          # Card with neon border glow
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Badge/
│   │   │   │   ├── Badge.tsx             # Pill badges (cohort tag, module tag)
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Accordion/
│   │   │   │   ├── Accordion.tsx         # FAQ and curriculum accordions
│   │   │   │   ├── AccordionItem.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Carousel/
│   │   │   │   ├── Carousel.tsx          # Testimonial carousel
│   │   │   │   ├── CarouselDots.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.tsx             # Generic modal wrapper
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Input/
│   │   │   │   ├── Input.tsx             # Styled text input
│   │   │   │   ├── Select.tsx            # Styled select dropdown
│   │   │   │   ├── Checkbox.tsx          # Styled checkbox
│   │   │   │   ├── Textarea.tsx          # Styled textarea
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── StarRating/
│   │   │   │   ├── StarRating.tsx        # 5-star display for testimonials
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── SectionLabel/
│   │   │   │   ├── SectionLabel.tsx      # Small eyebrow labels above headings
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── GradientText/
│   │   │   │   ├── GradientText.tsx      # Blue→green gradient text wrapper
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Divider/
│   │   │   │   ├── Divider.tsx           # Gradient line divider between sections
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   └── CounterStat/
│   │   │       ├── CounterStat.tsx       # Animated count-up number stat
│   │   │       └── index.ts
│   │   │
│   │   ├── sections/                     # Page-specific section components
│   │   │   │
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── ProblemSection.tsx
│   │   │   │   ├── DMCFrameworkSection.tsx
│   │   │   │   ├── RoadmapPreviewSection.tsx
│   │   │   │   ├── MetricsStripSection.tsx
│   │   │   │   ├── CohortDetailsSection.tsx
│   │   │   │   ├── TestimonialsSection.tsx
│   │   │   │   └── FinalCTASection.tsx
│   │   │   │
│   │   │   ├── program/
│   │   │   │   ├── ProgramHero.tsx
│   │   │   │   ├── ProgramStatBar.tsx
│   │   │   │   ├── CurriculumSection.tsx
│   │   │   │   ├── WhatsIncludedSection.tsx
│   │   │   │   ├── ToolsSection.tsx
│   │   │   │   ├── CohortScheduleSection.tsx
│   │   │   │   ├── PricingCard.tsx
│   │   │   │   └── ProgramFAQSection.tsx
│   │   │   │
│   │   │   ├── roadmap/
│   │   │   │   ├── RoadmapHero.tsx
│   │   │   │   └── RoadmapTimeline.tsx
│   │   │   │
│   │   │   ├── results/
│   │   │   │   ├── ResultsHero.tsx
│   │   │   │   ├── ResultsStatsBar.tsx
│   │   │   │   ├── TestimonialGrid.tsx
│   │   │   │   ├── TrustpilotSection.tsx
│   │   │   │   └── BeforeAfterSection.tsx
│   │   │   │
│   │   │   ├── resources/
│   │   │   │   ├── ResourcesHero.tsx
│   │   │   │   ├── BlogSection.tsx
│   │   │   │   ├── DownloadsSection.tsx
│   │   │   │   └── TelegramSection.tsx
│   │   │   │
│   │   │   ├── apply/
│   │   │   │   ├── ApplyHero.tsx
│   │   │   │   ├── ApplicationForm.tsx
│   │   │   │   ├── ApplySidebar.tsx
│   │   │   │   └── ApplySuccessScreen.tsx
│   │   │   │
│   │   │   └── shared/
│   │   │       ├── SectionWrapper.tsx    # Consistent section padding wrapper
│   │   │       ├── PageHero.tsx          # Reusable inner-page hero (used across pages)
│   │   │       └── CTABanner.tsx         # Reusable "Apply Now" CTA strip
│   │   │
│   │   └── providers/                    # React context providers
│   │       ├── ThemeProvider.tsx         # next-themes wrapper
│   │       ├── FirebaseProvider.tsx      # Firebase app context
│   │       └── index.ts
│   │
│   ├── lib/                              # Core logic, integrations, utilities
│   │   │
│   │   ├── firebase/
│   │   │   ├── config.ts                 # Firebase app initialization
│   │   │   ├── firestore.ts              # Firestore helpers (get, set, query)
│   │   │   ├── auth.ts                   # Firebase Auth helpers
│   │   │   └── storage.ts                # Firebase Storage helpers (if needed)
│   │   │
│   │   ├── razorpay/
│   │   │   ├── client.ts                 # Razorpay client-side loader
│   │   │   └── server.ts                 # Razorpay server-side (create order, verify)
│   │   │
│   │   ├── email/
│   │   │   └── sendEmail.ts              # Email sender (Nodemailer / Resend)
│   │   │
│   │   ├── analytics/
│   │   │   ├── firebase-analytics.ts     # Firebase Analytics event helpers
│   │   │   └── events.ts                 # All analytics event constants
│   │   │
│   │   └── utils/
│   │       ├── cn.ts                     # clsx + tailwind-merge utility
│   │       ├── formatCurrency.ts         # INR / USD formatting
│   │       ├── formatDate.ts             # Date formatting helpers
│   │       └── validators.ts             # Zod schemas for forms
│   │
│   ├── hooks/                            # Custom React hooks
│   │   ├── useCounterAnimation.ts        # Count-up animation hook
│   │   ├── useScrollReveal.ts            # Intersection Observer scroll reveal
│   │   ├── useTheme.ts                   # Theme state access hook
│   │   ├── useFirestore.ts               # Generic Firestore data hook
│   │   ├── useApplicationForm.ts         # Form state + submission logic
│   │   └── useRazorpay.ts                # Razorpay payment trigger hook
│   │
│   ├── types/                            # TypeScript type definitions
│   │   ├── application.types.ts          # Application form data types
│   │   ├── testimonial.types.ts
│   │   ├── blog.types.ts
│   │   ├── cohort.types.ts
│   │   ├── razorpay.types.ts
│   │   └── index.ts                      # Barrel export for all types
│   │
│   ├── constants/                        # App-wide constants
│   │   ├── cohort.ts                     # Cohort dates, pricing, seat count
│   │   ├── curriculum.ts                 # All 6 modules + sub-topics data
│   │   ├── roadmap.ts                    # 5 stages data
│   │   ├── testimonials.ts               # All testimonial data
│   │   ├── faq.ts                        # All FAQ items
│   │   ├── metrics.ts                    # Stats (200+ students, etc.)
│   │   ├── navLinks.ts                   # Navbar link config + dropdown items
│   │   └── site.ts                       # Site-wide meta: name, URL, social links
│   │
│   └── styles/
│       └── globals.css                   # CSS variables, base resets, custom utilities
│
├── .env.local                            # Local secrets (never commit)
├── .env.example                          # Template for env vars (safe to commit)
├── .eslintrc.json                        # ESLint config (Next.js + TypeScript rules)
├── .prettierrc                           # Prettier formatting rules
├── .gitignore
├── commitlint.config.js                  # Conventional commits enforcement
├── lint-staged.config.js                 # Run lint/format on staged files only
├── next.config.js                        # Next.js config (image domains, redirects)
├── tailwind.config.ts                    # Tailwind: custom tokens, dark mode, fonts
├── tsconfig.json                         # TypeScript strict config
├── package.json
└── README.md                             # Setup, scripts, architecture notes
```

---

## KEY CONFIGURATION FILES EXPLAINED

### `.env.example`
```bash
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# Razorpay
NEXT_PUBLIC_RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=              # Server-side only, never NEXT_PUBLIC_

# Email (Resend or Nodemailer)
RESEND_API_KEY=
CONTACT_EMAIL_TO=contact@dynamictraderlive.com

# App
NEXT_PUBLIC_SITE_URL=https://dynamictraderlive.com
NEXT_PUBLIC_TELEGRAM_URL=https://t.me/dynamictraderlive
```

### `tailwind.config.ts` — Custom Design Token Extension
```ts
extend: {
  colors: {
    brand: {
      blue:  '#00C2FF',
      green: '#00FF94',
      dark:  '#0A0A0F',
    }
  },
  fontFamily: {
    display: ['Syne', 'sans-serif'],
    body:    ['DM Sans', 'sans-serif'],
    mono:    ['Space Mono', 'monospace'],
  },
  backgroundImage: {
    'brand-gradient': 'linear-gradient(135deg, #00C2FF 0%, #00FF94 100%)',
  },
  boxShadow: {
    'glow-blue':  '0 0 20px rgba(0, 194, 255, 0.35)',
    'glow-green': '0 0 20px rgba(0, 255, 148, 0.35)',
  }
}
```

---

## FIRESTORE COLLECTIONS (DATABASE SCHEMA)

```
firestore/
│
├── applications/                         # One doc per apply form submission
│   └── {docId}
│       ├── fullName: string
│       ├── email: string
│       ├── phone: string
│       ├── city: string
│       ├── experience: string
│       ├── hoursPerWeek: string
│       ├── markets: string[]
│       ├── primaryGoal: string
│       ├── referralSource: string
│       ├── message: string
│       ├── status: 'pending' | 'reviewed' | 'accepted' | 'rejected'
│       ├── cohort: string               # e.g. "cohort-4"
│       └── submittedAt: Timestamp
│
├── payments/                             # One doc per verified Razorpay payment
│   └── {docId}
│       ├── applicationId: string         # ref to applications/{docId}
│       ├── razorpayOrderId: string
│       ├── razorpayPaymentId: string
│       ├── razorpaySignature: string
│       ├── amount: number                # in paise (2500000 = ₹25,000)
│       ├── status: 'created' | 'paid' | 'failed'
│       └── paidAt: Timestamp
│
├── testimonials/                         # CMS-style testimonial store
│   └── {docId}
│       ├── name: string
│       ├── city: string
│       ├── cohort: string
│       ├── quote: string
│       ├── rating: number
│       ├── avatarUrl: string
│       ├── featured: boolean
│       └── createdAt: Timestamp
│
└── contactMessages/                      # Contact form submissions
    └── {docId}
        ├── name: string
        ├── email: string
        ├── message: string
        └── submittedAt: Timestamp
```

---

## SCRIPTS IN `package.json`

```json
"scripts": {
  "dev":          "next dev",
  "build":        "next build",
  "start":        "next start",
  "lint":         "next lint",
  "lint:fix":     "next lint --fix",
  "type-check":   "tsc --noEmit",
  "format":       "prettier --write .",
  "format:check": "prettier --check .",
  "test":         "jest",
  "test:watch":   "jest --watch",
  "analyze":      "ANALYZE=true next build",
  "prepare":      "husky install"
}
```

---

## DEPENDENCY LIST

### Production
```
next, react, react-dom
typescript
tailwindcss, postcss, autoprefixer
framer-motion
firebase
next-themes
react-hook-form
@hookform/resolvers
zod
lucide-react
clsx
tailwind-merge
razorpay (server-side SDK)
resend (email)
```

### Development
```
eslint, eslint-config-next
prettier
husky
lint-staged
commitlint, @commitlint/config-conventional
@types/node, @types/react, @types/react-dom
jest, @testing-library/react, @testing-library/jest-dom
@next/bundle-analyzer
```

---

## BARREL EXPORT CONVENTION

Every component folder uses an `index.ts` file:
```ts
// src/components/ui/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button.types';
```

This allows clean imports everywhere:
```ts
import { Button, Card, Badge } from '@/components/ui';
import { HeroSection, MetricsStripSection } from '@/components/sections/home';
import { Navbar, Footer } from '@/components/layout';
```

Configure `tsconfig.json` path alias:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

---

## TOTAL FILE COUNT SUMMARY

| Category             | Files |
|----------------------|-------|
| App pages            | 16    |
| API routes           | 4     |
| Layout components    | 8     |
| UI atoms             | 22    |
| Section components   | 28    |
| Hooks                | 6     |
| Lib / utilities      | 12    |
| Types                | 7     |
| Constants            | 8     |
| Config files         | 9     |
| Public assets        | 20+   |
| **Total**            | **~140** |
```
