# Dynamic Trader Live

Production-grade Next.js 14 marketing and application platform for Dynamic Trader Live, a trust-first trading education cohort.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Firebase Firestore/Auth/Analytics
- Razorpay
- Resend email
- React Hook Form + Zod
- Framer Motion

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Quality

```bash
npm run lint
npm run type-check
npm run build
```

## Notes

Trading copy includes explicit risk disclaimers throughout the site. API routes are production-shaped and become live when Firebase, Razorpay, and Resend environment variables are provided.
