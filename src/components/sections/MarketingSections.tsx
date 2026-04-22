'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  BarChart3,
  Brain,
  CalendarDays,
  Check,
  Clock,
  Download,
  Landmark,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Users,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import {
  articles,
  curriculum,
  dmcPillars,
  faqs,
  includedItems,
  metrics,
  problemCards,
  roadmapStages,
  testimonials,
} from '@/constants/content';
import { site } from '@/constants/site';
import {
  applicationSchema,
  contactSchema,
  type ApplicationInput,
  type ContactInput,
} from '@/lib/utils/validators';
import { useApplicationForm } from '@/hooks/useApplicationForm';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Checkbox,
  GlowCard,
  Input,
  Section,
  SectionHeader,
  Select,
  StarRating,
  Textarea,
} from '@/components/ui';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  TrendingDown,
  Brain,
  Landmark,
  BarChart3,
  Droplets: Sparkles,
  ShieldCheck,
};

export function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const counter = useCounterAnimation(value);
  return (
    <div className="card px-5 py-5 text-center">
      <div className="stat-value">
        <span ref={counter.ref}>{counter.value}</span>
        {suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="hero-bg relative flex min-h-svh items-center overflow-hidden py-16">
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_390px]">
          <div className="max-w-4xl">
            <Badge>Cohort 4 · May 11, 2025 · Only 10 Seats</Badge>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.95] tracking-[-0.02em] text-[color:var(--text-primary)]">
              Stop Guessing.
              <br />
              Start Trading Like{' '}
              <span className="hero-underline text-gradient italic">Institutions.</span>
            </h1>
            <p className="mt-6 max-w-[560px] text-lg leading-[1.75] text-[color:var(--text-secondary)]">
              A premium 5-6 week cohort built on the Dynamic Mentorship Concept™. Three phases.
              Institutional framework. Lifelong community.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/apply">Apply for This Cohort</Button>
              <Button href="/program" variant="secondary">
                Explore Program
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 font-mono text-sm text-[color:var(--text-muted)]">
              <span>✦ Rs 25,000 one-time</span>
              <span>✦ Only 10 seats</span>
              <span>✦ Live + mentorship</span>
            </div>
          </div>

          <GlowCard className="hidden animate-float lg:block">
            <div className="flex items-center justify-between">
              <Badge>DMC Setup</Badge>
              <span className="font-mono text-xs text-[color:var(--text-muted)]">LONDON OPEN</span>
            </div>
            <div className="mt-8 space-y-4">
              {[
                ['Liquidity Sweep', 'Confirmed'],
                ['Order Block', 'Active Zone'],
                ['Risk Model', '1:3 RR'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                  <span className="text-[color:var(--text-secondary)]">{label}</span>
                  <span className="font-mono text-sm text-[color:var(--accent)]">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 h-28 rounded-lg border border-[var(--border)] bg-[linear-gradient(180deg,rgba(245,200,66,0.08),transparent)] p-4">
              <div className="flex h-full items-end gap-3">
                {[32, 58, 44, 76, 61, 92, 70].map((height, index) => (
                  <span
                    key={index}
                    className="w-full rounded-t bg-brand-gradient opacity-85"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </GlowCard>
        </div>

        <div className="mt-16 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <CounterStat key={metric.label} {...metric} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <Section>
      <SectionHeader title="Why 95% of Retail Traders Fail in the Market" />
      <div className="grid gap-5 md:grid-cols-3">
        {problemCards.map((card) => {
          const Icon = iconMap[card.icon];
          return (
            <Card key={card.title} className="border-l-4 border-l-[color:var(--accent)]">
              <Icon className="text-[color:var(--accent)]" size={30} />
              <h3 className="mt-5 font-serif text-3xl font-bold">{card.title}</h3>
              <p className="mt-3 leading-7 text-[color:var(--text-secondary)]">{card.body}</p>
            </Card>
          );
        })}
      </div>
      <p className="mx-auto mt-10 max-w-3xl text-center text-xl leading-8 text-[color:var(--text-primary)]">
        Dynamic Trader Live exists to fix exactly this. The DMC Framework gives you the same
        structured edge institutions use.
        <span className="mt-4 block font-mono text-sm uppercase tracking-[0.12em] text-[color:var(--accent)]">
          There's a Better Way ↓
        </span>
      </p>
    </Section>
  );
}

export function DMCFrameworkSection() {
  return (
    <Section className="bg-[color:var(--bg-surface)]">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            align="left"
            eyebrow="DMC Framework"
            title="The DMC Framework - Your Trading Edge"
            subtitle="Dynamic Market Concept (DMC) is a proprietary institutional methodology that combines price structure, liquidity zones, and market psychology into one actionable system."
          />
          <Button href="/program">See Full Curriculum</Button>
        </div>
        <GlowCard>
          <div className="grid gap-4">
            {dmcPillars.map(([icon, title, body], index) => {
              const Icon = iconMap[icon];
              return (
                <div key={title} className="flex gap-4 rounded-lg bg-[color:var(--bg-surface)] p-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-gradient text-[#0B0A08]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[color:var(--text-muted)]">
                      Pillar {index + 1}
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{title}</h3>
                    <p className="text-[color:var(--text-secondary)]">{body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </GlowCard>
      </div>
    </Section>
  );
}

export function RoadmapTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 lg:grid-cols-5">
      {roadmapStages.map((stage, index) => (
        <Card key={stage.title} className="border-l-4 border-l-[color:var(--accent)]">
          <div className="font-mono text-5xl font-bold text-[color:var(--text-muted)]">
            {String(index + 1).padStart(2, '0')}
          </div>
          <Badge className="mt-4">{stage.week}</Badge>
          <h3 className="mt-4 font-serif text-3xl font-bold">{stage.title}</h3>
          {!compact ? (
            <p className="mt-2 text-sm italic text-[color:var(--text-secondary)]">"{stage.quote}"</p>
          ) : null}
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--text-secondary)]">
            {stage.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <Check size={16} className="mt-0.5 shrink-0 text-[color:var(--accent)]" />
                {bullet}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}

export function RoadmapPreviewSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Roadmap"
        title="Your Trading Transformation - Stage by Stage"
        subtitle="A precise 6-week progression from market foundations to funded trader readiness."
      />
      <RoadmapTimeline compact />
      <div className="mt-10 text-center">
        <Button href="/roadmap">See Full Roadmap</Button>
      </div>
    </Section>
  );
}

export function MetricsStripSection() {
  return (
    <section className="bg-[color:var(--bg-surface)] py-10">
      <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['₹25,000', 'One-Time'],
          ['5-6 Weeks', 'Live Program'],
          ['10 Seats', 'Per Cohort'],
          ['$500K', 'Funding Path'],
        ].map(([value, label]) => (
          <div key={label} className="text-center">
            <div className="font-mono text-3xl font-bold text-gradient">{value}</div>
            <div className="text-sm text-[color:var(--text-secondary)]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CohortDetailsSection() {
  return (
    <Section>
      <SectionHeader title="The Cohort Experience" />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <GlowCard>
          <Badge>COHORT 4</Badge>
          <dl className="mt-6 grid gap-4 text-[color:var(--text-secondary)]">
            {[
              ['Starting', site.startDate],
              ['Duration', '5-6 Weeks'],
              ['Format', 'Live Online Classes + Mentorship'],
              ['Seats', 'Only 10 Remaining'],
              ['Price', '₹25,000 (One-Time)'],
            ].map(([term, value]) => (
              <div key={term} className="flex justify-between gap-4 border-b border-[var(--border)] pb-3">
                <dt>{term}</dt>
                <dd className="text-right font-semibold text-[color:var(--text-primary)]">{value}</dd>
              </div>
            ))}
          </dl>
          <Button href="/apply" className="mt-6 w-full">
            Apply for This Cohort
          </Button>
        </GlowCard>
        <Card>
          <h3 className="font-serif text-3xl font-bold">What You Get</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {includedItems.slice(0, 8).map((item) => (
              <div key={item} className="flex gap-3 text-[color:var(--text-secondary)]">
                <Check size={18} className="mt-1 shrink-0 text-[color:var(--accent)]" />
                {item}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}

export function TestimonialsSection({ full = false }: { full?: boolean }) {
  const list = full ? testimonials : testimonials.slice(0, 4);
  return (
    <Section className={full ? '' : 'bg-[color:var(--bg-surface)]'}>
      <SectionHeader title={full ? 'Real Results. Real Traders.' : 'What Our Traders Say'} />
      <div className={full ? 'grid gap-5 md:grid-cols-2 lg:grid-cols-3' : 'marquee-wrapper'}>
        <div className={full ? 'contents' : 'marquee-track'}>
          {[...list, ...(!full ? list : [])].map((item, index) => (
            <Card key={`${item.name}-${index}`} className={full ? '' : 'w-[320px] md:w-[420px]'}>
              <StarRating />
              <p className="mt-4 italic leading-7 text-[color:var(--text-secondary)]">"{item.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-brand-gradient font-mono font-bold text-[#0B0A08]">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <div>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-[color:var(--text-muted)]">
                    {item.city} | {item.cohort}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      {!full ? (
        <div className="mt-10 text-center">
          <Button href="/results" variant="secondary">
            See All Reviews
          </Button>
        </div>
      ) : null}
    </Section>
  );
}

export function FinalCTASection() {
  return (
    <Section>
      <GlowCard className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-4xl font-bold md:text-5xl">
          Limited Seats. Real Results. No Guesswork.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-[color:var(--text-secondary)]">
          Cohort 4 is accepting applications now. Only 10 seats available.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/apply">Apply Now - Secure Your Seat</Button>
          <Button href="/faq" variant="secondary">
            Have Questions? Read FAQ
          </Button>
        </div>
        <p className="mt-6 text-sm text-[color:var(--text-muted)]">
          Disclaimer: Trading involves substantial risk of loss. This program is for educational
          purposes only. Not financial advice.
        </p>
      </GlowCard>
    </Section>
  );
}

export function ProgramSections() {
  const accordionItems = curriculum.map((module) => ({
    title: module.title,
    eyebrow: module.week,
    content: (
      <ul className="grid gap-3">
        {module.topics.map((topic) => (
          <li key={topic} className="flex gap-3">
            <Check size={18} className="mt-1 shrink-0 text-[color:var(--accent)]" />
            {topic}
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <>
      <Section className="market-hero pt-28">
        <Badge>₹25,000 · 10 Seats · Cohort 4 Opens May 11</Badge>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold md:text-7xl">
          The Complete DMC Trading Program
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
          A structured 5-6 week intensive that transforms how you trade - from fundamentals to live
          execution to prop firm readiness.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/apply">Apply Now</Button>
          <Button href="/downloads/dmc-framework-intro.pdf" variant="secondary">
            Download Syllabus PDF
          </Button>
        </div>
      </Section>
      <MetricsStripSection />
      <Section id="curriculum">
        <SectionHeader title="Curriculum & Modules" subtitle="Six modules, live execution, and review loops built for serious traders." />
        <Accordion items={accordionItems} />
      </Section>
      <Section className="bg-[color:var(--bg-surface)]">
        <SectionHeader title="What's Included" />
        <div className="grid gap-4 md:grid-cols-3">
          {includedItems.map((item) => (
            <Card key={item} className="flex gap-3">
              <Check size={18} className="mt-1 shrink-0 text-[color:var(--accent)]" />
              <span className="text-[color:var(--text-secondary)]">{item}</span>
            </Card>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHeader title="Tools Used" />
        <div className="grid gap-4 md:grid-cols-4">
          {['TradingView Pro', 'Notion Journaling', 'Telegram', 'Zoom Live Classes'].map((tool) => (
            <Card key={tool} className="text-center font-display text-xl font-bold">
              {tool}
            </Card>
          ))}
        </div>
      </Section>
      <Section id="pricing" className="bg-[color:var(--bg-surface)]">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CalendarDays className="text-[color:var(--accent)]" />
            <h2 className="mt-4 font-serif text-4xl font-bold">Cohort 4 Schedule</h2>
            <div className="mt-6 grid gap-3 text-[color:var(--text-secondary)]">
              <p>Start Date: May 11, 2025</p>
              <p>End Date: ~June 20, 2025</p>
              <p>Sessions: 4-5x per week (Mon, Tue, Thu, Fri + weekend reviews)</p>
              <p>Time: 8:00 PM - 9:30 PM IST weekdays, 10:00 AM - 12:00 PM IST weekend reviews</p>
              <p>Class Size: Maximum 10 traders</p>
              <p>Format: Live Zoom + TradingView screen share</p>
            </div>
          </Card>
          <GlowCard>
            <Badge>Limited Cohort</Badge>
            <h2 className="mt-4 font-display text-5xl font-extrabold">₹25,000</h2>
            <p className="mt-3 text-[color:var(--text-secondary)]">
              One-time payment. Secure checkout via Razorpay after application review.
            </p>
            <Button href="/apply" className="mt-8 w-full">
              Apply Now
            </Button>
          </GlowCard>
        </div>
      </Section>
      <FAQBlock />
    </>
  );
}

export function FAQBlock() {
  return (
    <Section>
      <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know before applying." />
      <Accordion items={faqs.map(([title, answer]) => ({ title, content: <p>{answer}</p> }))} />
    </Section>
  );
}

export function ResultsSections() {
  return (
    <>
      <Section className="market-hero pt-28">
        <h1 className="max-w-3xl font-display text-5xl font-extrabold md:text-7xl">Real Results. Real Traders.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
          Don't take our word for it - hear from the traders who've gone through the DMC program.
        </p>
      </Section>
      <section className="bg-[color:var(--bg-surface)] py-10">
        <div className="container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <CounterStat key={metric.label} {...metric} />
          ))}
        </div>
      </section>
      <TestimonialsSection full />
      <Section className="bg-[color:var(--bg-surface)]">
        <SectionHeader title="The Transformation" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Trading on tips and emotions', 'Trading with a structured DMC system'],
            ['No idea about risk management', 'Consistent 1:3 risk:reward execution'],
            ['Failed 3 prop challenges', 'Funded at $25,000 within 6 weeks'],
          ].map(([before, after]) => (
            <Card key={before}>
              <p className="text-red-300">Before: {before}</p>
              <p className="mt-4 text-[color:var(--accent)]">After: {after}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

export function ResourcesSections() {
  return (
    <>
      <Section className="market-hero pt-28">
        <h1 className="max-w-4xl font-display text-5xl font-extrabold md:text-7xl">Free Resources for Serious Traders</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-[color:var(--text-secondary)]">
          Everything you need to start thinking and trading like an institution. No email capture required. Just take it.
        </p>
      </Section>
      <Section id="blog">
        <SectionHeader title="Blog & Articles" />
        <div className="grid gap-5 md:grid-cols-3">
          {articles.map((article) => (
            <Card key={article.slug}>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{article.title}</h3>
              <p className="mt-3 text-[color:var(--text-secondary)]">{article.summary}</p>
              <div className="mt-5 flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
                <Clock size={16} /> {article.readTime}
              </div>
              <Button href={`/resources/${article.slug}`} variant="secondary" className="mt-5">
                Read Article
              </Button>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="downloads" className="bg-[color:var(--bg-surface)]">
        <SectionHeader title="Free Guides / Downloads" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['DMC Framework Introduction PDF', 'Your first look at the Dynamic Market Concept - free download', '/downloads/dmc-framework-intro.pdf'],
            ['Trade Journal Template (Excel + Notion)', 'The exact template used by DTL cohort students', '/downloads/trade-journal-template.xlsx'],
            ['Prop Firm Challenge Checklist', 'Everything you need to pass your first funded trader evaluation', '/downloads/prop-firm-checklist.pdf'],
          ].map(([title, body, href]) => (
            <Card key={title}>
              <Download className="text-[color:var(--accent)]" />
              <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-[color:var(--text-secondary)]">{body}</p>
              <Button href={href} className="mt-5">Download Free</Button>
            </Card>
          ))}
        </div>
      </Section>
      <Section id="telegram">
        <GlowCard className="mx-auto max-w-4xl text-center">
          <MessageCircle className="mx-auto text-[color:var(--accent)]" size={42} />
          <h2 className="mt-4 font-serif text-5xl font-bold">Join Our Free Telegram Community</h2>
          <p className="mt-4 text-[color:var(--text-secondary)]">
            Get daily market analysis, trade ideas, live setups, and community support - free. 10,000+ traders already inside.
          </p>
          <Button href={site.telegramUrl} className="mt-7">Join Free Telegram Channel</Button>
        </GlowCard>
      </Section>
    </>
  );
}

export function ApplyPageSections() {
  return (
    <Section className="pt-28">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <Badge>Apply for Cohort 4</Badge>
          <h1 className="mt-5 font-display text-5xl font-extrabold md:text-7xl">Apply for Cohort 4</h1>
          <p className="mt-4 max-w-2xl text-lg text-[color:var(--text-secondary)]">
            Seats are limited to 10 traders per cohort. We review all applications to ensure quality over quantity.
          </p>
          <ApplicationForm />
        </div>
        <GlowCard className="h-fit lg:sticky lg:top-28">
          <Users className="text-[color:var(--accent)]" />
          <h2 className="mt-4 font-serif text-3xl font-bold">Cohort 4 closes when 10 seats fill.</h2>
          <p className="mt-3 text-[color:var(--text-secondary)]">Currently: 7 of 10 seats taken.</p>
          <div className="mt-6 grid gap-3 text-[color:var(--text-secondary)]">
            {['No hidden fees', 'Razorpay secure payment', 'Free discovery call before enrollment', 'Course starts May 11, 2025'].map((item) => (
              <div key={item} className="flex gap-2">
                <Check size={18} className="text-[color:var(--accent)]" /> {item}
              </div>
            ))}
          </div>
          <Button href="/legal/risk-disclaimer" variant="secondary" className="mt-6 w-full">
            Read Risk Disclaimer
          </Button>
        </GlowCard>
      </div>
    </Section>
  );
}

function ApplicationForm() {
  const { submit, isSubmitting, error } = useApplicationForm();
  const { register, handleSubmit, formState, watch, setValue } = useForm<ApplicationInput>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { markets: [] },
  });
  const selectedMarkets = watch('markets') ?? [];

  const toggleMarket = (market: string) => {
    setValue(
      'markets',
      selectedMarkets.includes(market)
        ? selectedMarkets.filter((item) => item !== market)
        : [...selectedMarkets, market],
      { shouldValidate: true },
    );
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="mt-8 grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Input placeholder="Full Name *" {...register('fullName')} />
        <Input placeholder="Email Address *" type="email" {...register('email')} />
        <Input placeholder="Phone Number (WhatsApp) *" {...register('phone')} />
        <Input placeholder="City / State *" {...register('city')} />
      </div>
      <Select {...register('experience')}>
        <option value="">Trading Experience</option>
        <option>Complete Beginner (0-6 months)</option>
        <option>Some Experience (6 months - 2 years)</option>
        <option>Experienced (2+ years, inconsistent)</option>
        <option>Other</option>
      </Select>
      <Select {...register('hoursPerWeek')}>
        <option value="">Hours per week commitment</option>
        <option>5-7 hours</option>
        <option>8-14 hours</option>
        <option>15+ hours</option>
      </Select>
      <div className="grid gap-3 rounded-lg border border-[var(--border)] p-4">
        <div className="font-semibold">Markets interested in trading</div>
        {['Forex', 'US Indices (NAS100, SPX)', 'Crypto', 'All of the above'].map((market) => (
          <Checkbox key={market} label={market} checked={selectedMarkets.includes(market)} onChange={() => toggleMarket(market)} />
        ))}
      </div>
      <Select {...register('primaryGoal')}>
        <option value="">Primary goal from this cohort</option>
        <option>Understand structured trading for the first time</option>
        <option>Become consistently profitable</option>
        <option>Pass a prop firm challenge and get funded</option>
        <option>Supplement/replace income with trading</option>
      </Select>
      <Select {...register('referralSource')}>
        <option value="">How did you hear about Dynamic Trader Live?</option>
        <option>Telegram</option>
        <option>Instagram</option>
        <option>YouTube</option>
        <option>Referral</option>
        <option>Other</option>
      </Select>
      <Textarea rows={5} placeholder="Brief message / why you want to join *" {...register('message')} />
      <Checkbox label="I have read and accept the Risk Disclaimer" {...register('acceptedRisk')} />
      <Checkbox label="I understand this is a trading education program and not financial advice" {...register('acceptedEducationOnly')} />
      {Object.values(formState.errors).length ? (
        <p className="text-sm text-red-300">{Object.values(formState.errors)[0]?.message?.toString()}</p>
      ) : null}
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
}

export function ContactForm() {
  const { register, handleSubmit, formState, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });
  async function submit(data: ContactInput) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) reset();
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="grid gap-5">
      <Input placeholder="Name" {...register('name')} />
      <Input placeholder="Email" type="email" {...register('email')} />
      <Textarea rows={6} placeholder="Message" {...register('message')} />
      {Object.values(formState.errors).length ? (
        <p className="text-sm text-red-300">{Object.values(formState.errors)[0]?.message?.toString()}</p>
      ) : null}
      <Button type="submit">Send Message</Button>
    </form>
  );
}
