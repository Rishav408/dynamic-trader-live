import Link from 'next/link';
import { Instagram, Send, Youtube } from 'lucide-react';
import { site } from '@/constants/site';

const groups = [
  {
    title: 'Program',
    links: [
      ['Overview', '/program'],
      ['Curriculum', '/program#curriculum'],
      ['Roadmap', '/roadmap'],
      ['Cohort Details', '/program#pricing'],
      ['Pricing & Apply', '/apply'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Blog', '/resources#blog'],
      ['Free Guides', '/resources#downloads'],
      ['Telegram Community', '/resources#telegram'],
      ['FAQ', '/faq'],
      ['Contact', '/contact'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '/legal/privacy-policy'],
      ['Terms & Conditions', '/legal/terms'],
      ['Risk Disclaimer', '/legal/risk-disclaimer'],
      ['Cookie Policy', '/legal/privacy-policy#cookies'],
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[color:var(--bg-surface)]">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-display text-2xl font-bold">
            Dynamic Trader <span className="text-[color:var(--accent)]">Live</span>
          </Link>
          <p className="mt-4 max-w-sm text-[color:var(--text-secondary)]">
            India's most structured trading education cohort. Built for serious traders. Powered
            by DMC.
          </p>
          <div className="mt-5 flex gap-3">
            <Link href={site.telegramUrl} aria-label="Telegram" className="footer-icon">
              <Send size={18} />
            </Link>
            <Link href={site.social.instagram} aria-label="Instagram" className="footer-icon">
              <Instagram size={18} />
            </Link>
            <Link href={site.social.youtube} aria-label="YouTube" className="footer-icon">
              <Youtube size={18} />
            </Link>
          </div>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.08em] text-[color:var(--text-primary)]">
              {group.title}
            </h3>
            <div className="mt-4 grid gap-3">
              {group.links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[color:var(--text-secondary)] transition hover:text-[color:var(--accent)]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container py-5 text-xs leading-6 text-[color:var(--text-muted)]">
          RISK DISCLAIMER: Trading financial instruments including Forex, indices, and
          cryptocurrencies involves substantial risk of loss and is not suitable for all investors.
          Dynamic Trader Live provides trading education only and does not constitute financial
          advice or investment recommendations. Past performance is not indicative of future
          results. Trade responsibly.
          <span className="mt-2 block">
            © 2025 Dynamic Trader Live. All Rights Reserved. India | GST: [GST number]
          </span>
        </div>
      </div>
    </footer>
  );
}
