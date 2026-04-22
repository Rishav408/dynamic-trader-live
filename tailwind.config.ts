import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          amber: '#F5C842',
          orange: '#E8944A',
          base: '#0B0A08',
          surface: '#121008',
          card: '#1A1712',
          border: '#2E2820',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #F5C842 0%, #E8944A 100%)',
        'hero-glow':
          'radial-gradient(ellipse 70% 55% at 28% 45%, rgba(245,200,66,0.20) 0%, rgba(232,148,74,0.12) 30%, transparent 65%)',
      },
      boxShadow: {
        amber: '0 0 32px rgba(245, 200, 66, 0.28)',
        'amber-sm': '0 0 14px rgba(245, 200, 66, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseCta: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.025)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        'pulse-cta': 'pulseCta 5s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
