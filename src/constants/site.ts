export const site = {
  name: 'Dynamic Trader Live',
  shortName: 'DTL',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dynamictraderlive.com',
  telegramUrl: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? 'https://t.me/dynamictraderlive',
  description:
    "Stop guessing. Learn the DMC (Dynamic Market Concept) framework with Dynamic Trader Live, India's most structured trading cohort.",
  price: '₹25,000',
  cohort: 'Cohort 4',
  startDate: 'May 11, 2025',
  endDate: '~June 20, 2025',
  seats: 10,
  seatsTaken: 7,
  social: {
    instagram: 'https://instagram.com/dynamictraderlive',
    youtube: 'https://youtube.com/@dynamictraderlive',
  },
};

export const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Program',
    href: '/program',
    items: [
      { label: 'Overview', href: '/program' },
      { label: 'Curriculum & Modules', href: '/program#curriculum' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Cohort Details & Pricing', href: '/program#pricing' },
    ],
  },
  { label: 'Results', href: '/results' },
  {
    label: 'Resources',
    href: '/resources',
    items: [
      { label: 'Blog & Articles', href: '/resources#blog' },
      { label: 'Free Guides (PDF)', href: '/resources#downloads' },
      { label: 'Telegram Community', href: '/resources#telegram' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
];
