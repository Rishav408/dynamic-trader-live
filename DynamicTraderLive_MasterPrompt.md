# MASTER WEBSITE GENERATION PROMPT
## Dynamic Trader Live — Full-Stack Revamp
### For: Google AI Studio / Codex App / Firebase Studio / Lovable / Antigravity IDE

---

> **IMPORTANT INSTRUCTION TO AI**: Build this COMPLETE, FULLY FUNCTIONAL website exactly as described. Do NOT skip sections. Do NOT use placeholder content. Do NOT abbreviate. Every section, every page, every component, every animation, every line of copy is specified below. Build it all.

---

## SECTION 1: PROJECT IDENTITY & BRAND OVERVIEW

**Website Name:** Dynamic Trader Live
**URL:** dynamictraderlive.com
**Category:** Trading Education Platform (High-Ticket Cohort + Trust-First Architecture)
**Target Audience:** Indian retail traders (beginners to intermediate), aspiring prop traders, working professionals who want structured trading education
**Business Model:** High-ticket cohort (₹25,000 one-time) with limited seats (~10 per cohort), live mentorship, funded trader pathway
**Core Offering:** A 5–6 week live mentorship-based cohort teaching institutional trading frameworks, proprietary DMC (Dynamic Market Concept) methodology, risk management, psychology, and trade journaling — with a pathway to get funded up to $500K via prop firm evaluation
**Brand Personality:** Professional, credible, institutional-grade, trust-first — NOT a hustle/sales-heavy trading course. Think Zerodha meets Coursera for Indian traders.
**Tagline (Primary):** "Stop Guessing. Start Trading Like Institutions."
**Tagline (Secondary):** "Trade with a Structured System — Not Guesswork."

---

## SECTION 2: DESIGN SYSTEM (PRESERVE EXACTLY)

### Color Palette — Dark Theme (PRIMARY, keep as-is)
```
--bg-primary:        #0A0A0F        /* near-black background */
--bg-secondary:      #0F1117        /* card/section backgrounds */
--bg-card:           #141720        /* elevated cards */
--border:            #1E2433        /* subtle borders */
--text-primary:      #FFFFFF        /* headings */
--text-secondary:    #A0A9C0        /* body / subtext */
--text-muted:        #5A6478        /* placeholders, metadata */
--accent-blue:       #00C2FF        /* neon blue — primary accent */
--accent-green:      #00FF94        /* neon green — success / CTA glow */
--accent-gradient:   linear-gradient(135deg, #00C2FF 0%, #00FF94 100%)
--glow-blue:         0 0 20px rgba(0, 194, 255, 0.35)
--glow-green:        0 0 20px rgba(0, 255, 148, 0.35)
--danger:            #FF4C4C
--warning:           #FFB347
```

### Color Palette — Light Theme (ADD, togglable)
```
--bg-primary:        #FFFFFF
--bg-secondary:      #F4F6FB
--bg-card:           #EAEEF5
--border:            #D1D9E6
--text-primary:      #0F172A
--text-secondary:    #334155
--text-muted:        #94A3B8
--accent-blue:       #0095CC        /* slightly deepened for readability */
--accent-green:      #00C270
--accent-gradient:   linear-gradient(135deg, #0095CC 0%, #00C270 100%)
--glow-blue:         0 0 16px rgba(0, 149, 204, 0.25)
--glow-green:        0 0 16px rgba(0, 194, 112, 0.25)
```

### Typography
```
Font 1 (Display/Headings): 'Syne' — Google Fonts — weights 700, 800
Font 2 (Body/UI):           'DM Sans' — Google Fonts — weights 300, 400, 500, 600
Font 3 (Monospace/Stats):   'Space Mono' — Google Fonts — weights 400, 700
```
Import via `<link>` tags in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### UI Style Rules
- Dark glassmorphism cards: `background: rgba(20, 23, 32, 0.7); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.07);`
- Light glassmorphism cards: `background: rgba(255,255,255,0.85); backdrop-filter: blur(12px); border: 1px solid rgba(0,0,0,0.08);`
- All primary CTA buttons: gradient background `(--accent-gradient)`, box-shadow glow `(--glow-green)`, border-radius: 8px, uppercase, letter-spacing: 0.08em
- Hover states: lift effect `transform: translateY(-2px)`, increase glow intensity
- Section dividers: subtle gradient lines `(linear-gradient(90deg, transparent, --accent-blue, transparent))`
- Smooth scroll: `scroll-behavior: smooth` on html
- All transitions: `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

## SECTION 3: TECH STACK

**Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
**Backend/DB:** Firebase Firestore + Firebase Auth
**Payments:** Razorpay (India)
**CMS:** Sanity.io (for blog/resources — optional, can stub with static data)
**Forms:** React Hook Form + Zod validation
**Animations:** Framer Motion (all page transitions, scroll reveals, counter animations)
**Icons:** Lucide React
**Charts/Stats:** Recharts (for any data visualizations)
**Theme Toggle:** next-themes
**Hosting:** Vercel (or Firebase Hosting)

**If building as a single static HTML/CSS/JS file** (e.g., for Codex or AI Studio prototype):
- Use Vanilla JS + Tailwind CDN + Alpine.js for interactivity
- Include all pages as separate HTML files linked together
- Use Intersection Observer API for scroll animations
- Use localStorage for theme preference

---

## SECTION 4: COMPLETE SITE ARCHITECTURE (ALL PAGES)

```
/                        → Home (index)
/program                 → Program / Cohort Details
/roadmap                 → Learning Roadmap (embedded within /program as tab OR standalone)
/results                 → Results & Reviews
/resources               → Resources (Blog + Free Guides + Telegram)
/faq                     → FAQ
/apply                   → Apply Now (Application Form)
/about                   → About / Founder Credibility (optional but recommended)
/contact                 → Contact
/legal/privacy-policy    → Privacy Policy
/legal/terms             → Terms & Conditions
/legal/risk-disclaimer   → Risk Disclaimer ⚠️ (MANDATORY)
```

---

## SECTION 5: NAVBAR (GLOBAL COMPONENT)

### Desktop Layout
```
[Logo — "Dynamic Trader Live" with neon blue accent on "Live"]
          Home | Program ▼ | Results | Resources ▼ | FAQ
                                              [🌙/☀️] [Login] [Apply Now →]
```

### Behavior
- **Sticky**: Fixed to top, `position: sticky; top: 0; z-index: 1000`
- **Scroll shrink**: On scroll >50px, reduce padding from `py-5` to `py-3`, add `backdrop-filter: blur(20px)` + semi-transparent bg
- **Active link**: Show gradient underline on current page link
- **CTA button**: Always visible, gradient background, subtle pulse animation every 4s

### Program Dropdown (hover)
```
┌─────────────────────────────┐
│  Overview                   │
│  Curriculum & Modules       │
│  Roadmap                    │
│  Cohort Details & Pricing   │
└─────────────────────────────┘
```

### Resources Dropdown (hover)
```
┌─────────────────────────────┐
│  Blog & Articles            │
│  Free Guides (PDF)          │
│  Telegram Community         │
└─────────────────────────────┘
```

### Theme Toggle
- Position: right side, before "Login"
- Icon: Sun (☀️) for light mode, Moon (🌙) for dark mode
- Smooth CSS transition on toggle
- Persist preference in localStorage

### Mobile Navbar
- Hamburger icon (☰) top-right
- Full-screen slide-in drawer (left to right)
- Items: Home, Program (expandable accordion), Results, Resources (expandable), FAQ
- Bottom of drawer: big "Apply Now" button (full width, gradient)
- Theme toggle at top of drawer

---

## SECTION 6: HOME PAGE (`/`) — FULL SECTION BREAKDOWN

### 6.1 — HERO SECTION

**Layout:** Full-viewport height (`min-h-screen`), centered content, subtle animated background

**Background:** Dark gradient with animated floating geometric shapes (translucent hexagons / candlestick chart silhouettes) using CSS keyframe animations. Add a subtle radial gradient glow in the center.

**Content:**
```
[Eyebrow tag — small pill badge]:
  🔥  Cohort 4 — Starting May 11, 2025  |  Only 10 Seats

[H1 Headline]:
  Stop Guessing.
  Start Trading Like
  Institutions.

[Subheadline]:
  Learn the DMC (Dynamic Market Concept) framework — the same
  institutional approach used by professional traders globally.
  5–6 weeks of live mentorship, risk management, psychology &
  funded trader pathway. 

[CTA Buttons — side by side]:
  [Apply Now →]  (primary — gradient green/blue)
  [View Program]  (secondary — outlined)

[Trust micro-bar below CTAs]:
  ✅ ₹25,000 one-time  |  🔒 Limited to 10 seats  |  📅 Live classes + mentorship
```

**Animated Metrics Strip** (below hero content, above fold break):
```
[Counter animations on scroll-in, using Framer Motion:]
  200+          8+           94%          10
  Students    Cohorts     Completion    Seats per
  Trained     Completed     Rate        Cohort
```
Each metric in `font-family: Space Mono`, large size, with neon accent color. Animate count-up on first view.

---

### 6.2 — PROBLEM AWARENESS SECTION

**Section Title:** "Why 90% of Traders Fail"

**Layout:** 3 cards in a row (or 2+1 stacked on mobile)

**Card 1 — No System:**
- Icon: ⚡ (red)
- Headline: "They Trade on Gut Feel"
- Body: "Most retail traders enter the market based on tips, emotions, or random indicators. Without a structured framework, every trade is a gamble."

**Card 2 — No Risk Management:**
- Icon: 📉 (red)
- Headline: "They Ignore Risk"
- Body: "One bad trade wipes out 10 winning trades. Without proper position sizing and stop-loss discipline, capital erosion is inevitable."

**Card 3 — No Psychology:**
- Icon: 🧠 (red)
- Headline: "They Can't Control Emotions"
- Body: "Fear, greed, and revenge trading. Without a journaled, process-driven approach, emotional decisions destroy even good strategies."

**Below cards — transition copy:**
> "Dynamic Trader Live exists to fix exactly this. The DMC Framework gives you the same structured edge institutions use."

---

### 6.3 — DMC FRAMEWORK SECTION (WHAT IS DMC)

**Section Title:** "The DMC Framework — Your Trading Edge"

**Subtitle:** "Dynamic Market Concept (DMC) is a proprietary institutional methodology that combines price structure, liquidity zones, and market psychology into one actionable system."

**Layout:** Left side = visual diagram (SVG or illustrated flow chart); Right side = text

**DMC Pillars (list with icons):**
1. 🏛️ **Institutional Order Flow** — Understand where big money enters and exits
2. 📊 **Price Structure Analysis** — Read markets the way institutions read them
3. 💧 **Liquidity Zone Mapping** — Identify stop hunts and smart money traps
4. 🛡️ **Risk-First Execution** — Every trade defined by risk before reward
5. 🧠 **Trader Psychology** — Journal-based mental discipline system

**Bottom CTA:** "See Full Curriculum →" (links to /program)

---

### 6.4 — ROADMAP PREVIEW SECTION

**Section Title:** "Your Trading Transformation — Stage by Stage"

**Layout:** Horizontal timeline (desktop) / vertical accordion (mobile)

**5 Stages:**

```
Stage 1 — Foundation (Week 1)
  ├── Market structure basics
  ├── Candlestick patterns (institutional lens)
  └── Introduction to DMC framework

Stage 2 — Framework (Week 2)
  ├── Liquidity zones & order blocks
  ├── Fair value gaps (FVG)
  └── Entry framework rules

Stage 3 — Execution (Week 3–4)
  ├── Live trade execution drills
  ├── Position sizing formulas
  └── Stop-loss & target setting

Stage 4 — Consistency (Week 5)
  ├── Trade journaling system
  ├── Psychology & discipline modules
  └── Review & refinement sessions

Stage 5 — Funding Pathway (Week 6)
  ├── Prop firm challenge preparation
  ├── Risk rules for funded accounts
  └── Pathway to get funded up to $500K
```

Each stage is a styled card with stage number (large, muted), title, sub-bullets, and a colored left-border accent (gradient from blue→green as stages progress).

**CTA:** "See Full Roadmap →" (links to /program#roadmap)

---

### 6.5 — SOCIAL PROOF / NUMBERS BAR

**Full-width dark strip with 4 stats:**
```
₹25,000     5–6 Weeks     10 Seats     $500K
One-Time    Live Program  Per Cohort   Funding Path
```

---

### 6.6 — COHORT DETAILS PREVIEW SECTION

**Section Title:** "The Cohort Experience"

**Layout:** 2 columns. Left = cohort details card. Right = what you get list.

**Left Card:**
```
🗓️ COHORT 4
Starting: May 11, 2025
Duration: 5–6 Weeks
Format:   Live Online Classes + Mentorship
Seats:    Only 10 Remaining
Price:    ₹25,000 (One-Time)
          [Apply for This Cohort →]
```

**Right — What You Get:**
```
✅ 5–6 weeks of structured live classes
✅ 1-on-1 mentorship sessions
✅ DMC Framework full access
✅ Trade journaling templates
✅ Private Telegram community (lifetime)
✅ Prop firm preparation guide
✅ Recording access for all sessions
✅ Certificate of completion
```

---

### 6.7 — TESTIMONIALS SECTION

**Section Title:** "What Our Traders Say"

**Layout:** Scrollable card carousel (auto-scroll + manual arrows)

**Testimonial Cards (use these as placeholder content, to be replaced with real testimonials):**

**Card 1:**
> "The DMC framework completely changed how I see price action. I was trading randomly before this cohort. Now I have a system I trust."
> — Rahul M., Mumbai | Cohort 2 Graduate

**Card 2:**
> "Best investment I've made in my trading journey. The risk management module alone is worth 10x the price."
> — Priya S., Bangalore | Cohort 1 Graduate

**Card 3:**
> "I cleared my first prop firm challenge within 3 weeks of finishing the cohort. The funded pathway prep is real."
> — Arjun K., Delhi | Cohort 3 Graduate

**Card 4:**
> "The live sessions feel like trading school. Not a course you watch and forget — it's mentorship you actually apply."
> — Sneha R., Pune | Cohort 2 Graduate

Each card: avatar placeholder (circle with initials), name, city, cohort badge, 5-star rating display.

**Below carousel:** "See All Reviews →" links to /results

---

### 6.8 — FINAL CTA SECTION (Homepage)

**Layout:** Full-width section, centered, dark card with glow border

```
Limited Seats. Real Results. No Guesswork.

Cohort 4 is accepting applications now.
Only 10 seats available.

[Apply Now — Secure Your Seat →]  (primary CTA)
[Have Questions? Read FAQ]         (secondary link)

⚠️ Disclaimer: Trading involves substantial risk of loss.
This program is for educational purposes only. Not financial advice.
```

---

## SECTION 7: PROGRAM PAGE (`/program`)

### 7.1 — Program Hero
```
H1: The Complete DMC Trading Program
Subtext: A structured 5–6 week intensive that transforms how you trade — 
         from fundamentals to live execution to prop firm readiness.
Badge: ₹25,000 · 10 Seats · Cohort 4 Opens May 11
CTA: [Apply Now] [Download Syllabus PDF]
```

### 7.2 — Program Overview Stats Bar
```
5–6 Weeks Duration | 30+ Live Sessions | 10 Traders Per Cohort | 1-on-1 Mentorship | Lifetime Community
```

### 7.3 — Curriculum (Expandable Accordion Modules)

**Module 1 — Foundation (Week 1)**
Sub-topics:
- Introduction to Institutional Trading vs Retail Thinking
- Understanding Market Structure: Higher Highs, Lower Lows, Ranges
- Candlestick Psychology (institutional interpretation)
- Session timings: London, New York, Asian overlaps
- DMC Framework Introduction: The 5 Pillars
- Tools setup: TradingView walkthrough, charting basics

**Module 2 — The DMC Framework (Week 2)**
Sub-topics:
- Order Blocks: Identifying Institutional Entry Zones
- Fair Value Gaps (FVG): How Smart Money Creates Imbalances
- Liquidity Sweeps: Stop Hunt Mechanics
- Breaker Blocks and Change of Character (ChoCH)
- Supply & Demand Zones (DMC Interpretation)
- Building Your First Trade Setup Using DMC

**Module 3 — Risk Management (Week 3)**
Sub-topics:
- The 1% Rule and Position Sizing Formula
- Risk:Reward Ratios (minimum 1:2, optimal 1:3+)
- Stop-Loss Placement Strategy (DMC-based)
- Drawdown management and account protection
- Portfolio risk across multiple open trades
- Capital allocation for prop firm challenges

**Module 4 — Live Execution & Journaling (Week 4)**
Sub-topics:
- Live trade execution drills (paper trading + real examples)
- Entry, target, and stop-loss marking on live charts
- Trade journaling system: what to log, how to review
- Weekly review process: win rate, RR, mental state tracking
- Common execution mistakes and how to eliminate them
- Post-trade analysis framework

**Module 5 — Psychology & Discipline (Week 5)**
Sub-topics:
- The trader mindset: process over outcome
- Managing fear, greed, and revenge trading
- Building trading habits and routines
- Emotional regulation techniques
- The journaling-psychology connection
- Identity shift: from gambler to professional trader

**Module 6 — Funded Trader Pathway (Week 6)**
Sub-topics:
- What are prop firms? How do funded accounts work?
- Rules of prop firm challenges (daily loss limits, max drawdown)
- Passing the challenge: strategy adjustments
- Recommended prop firms for Indian traders
- Introduction to evaluations: FTMO, MyFundedFx, and others
- From ₹0 risk personal capital to trading $500K funded accounts

---

### 7.4 — What's Included (Visual Checklist)
```
✅ 30+ hours of live classes (recorded)
✅ Lifetime access to session recordings
✅ Private Telegram group (students + mentor)
✅ Trade journaling template (Excel + Notion)
✅ DMC Framework PDF workbook
✅ Weekly 1-on-1 review sessions
✅ Prop firm challenge guide & checklist
✅ Certificate of completion
✅ Post-cohort alumni community access
```

### 7.5 — Tools Used
```
TradingView Pro  |  Notion (journaling)  |  Telegram  |  Zoom (live classes)
```

### 7.6 — Cohort Schedule
```
Cohort 4 Schedule:
Start Date:    May 11, 2025
End Date:      ~June 20, 2025
Sessions:      4–5x per week (Mon, Tue, Thu, Fri + weekend reviews)
Time:          8:00 PM – 9:30 PM IST (weekdays)
               10:00 AM – 12:00 PM IST (weekend reviews)
Class Size:    Maximum 10 traders
Format:        Live Zoom + TradingView screen share
```

### 7.7 — Pricing Card
```
┌─────────────────────────────────────────┐
│  DMC COHORT PROGRAM                     │
│  ₹25,000                                │
│  One-time payment · No hidden fees      │
│                                         │
│  ✅ Everything in "What's Included"     │
│  ✅ Cohort 4: May 11 start              │
│  ✅ Only 10 seats — apply to qualify    │
│                                         │
│  [Apply Now to Secure Your Seat →]      │
│                                         │
│  Payment via Razorpay                   │
│  (UPI, Net Banking, Cards accepted)     │
└─────────────────────────────────────────┘
```

### 7.8 — Program FAQ (on this page)
- How many live sessions are there?
- Is this suitable for absolute beginners?
- What markets will we trade? (Forex, indices, crypto)
- What if I miss a class?
- Is there a refund policy?
- Do I need TradingView paid version?
- How is this different from YouTube trading content?

---

## SECTION 8: ROADMAP PAGE (`/roadmap`)

(Can also be a tab inside /program)

### Hero
```
H1: Your Trading Transformation Roadmap
Subtext: A clear, stage-by-stage journey from beginner to funded trader.
         No guesswork. No skipping steps. Pure structured growth.
```

### Visual Timeline Component
Full-width vertical timeline (mobile) / horizontal timeline (desktop) with:
- Stage number (large, muted, centered)
- Stage title
- Week indicator
- Detailed bullet points
- Progress connector line (gradient blue→green as you advance)
- Milestone icons (🏁 for completion)

**5 Stages — Full Detail:**

**Stage 1: Foundation** `Week 1` 🟦
> "Understand what markets really are — through institutional eyes."
- Market structure & price action basics
- Candlestick interpretation (institutional view)
- Session analysis: when institutions trade
- Your first DMC introduction
- Outcome: Know HOW markets move, not just WHAT they do

**Stage 2: The DMC Framework** `Week 2` 🟦→🟩
> "Learn the exact framework used to read institutional intent."
- Order blocks, FVG, liquidity sweeps
- ChoCH and BOS (Break of Structure)
- Building complete trade setups
- Outcome: You can identify institutional entry/exit zones

**Stage 3: Execution** `Weeks 3–4` 🟩
> "From theory to real-time decision making."
- Live trade drills (paper + real)
- Entry, target, SL mechanics
- Journaling every trade
- Outcome: Consistent, rules-based trade execution

**Stage 4: Consistency & Psychology** `Week 5` 🟩→🌟
> "The mental edge that separates profitable traders."
- Journal review and pattern identification
- Emotional regulation system
- Weekly review rituals
- Outcome: Process-driven trader with emotional discipline

**Stage 5: Funded Trader Pathway** `Week 6` 🌟
> "Put your skills to work — without risking personal capital."
- Prop firm challenge preparation
- Rules, risk management adjustments
- Get funded up to $500K
- Outcome: Ready to trade institutional capital

---

## SECTION 9: RESULTS PAGE (`/results`)

### 9.1 — Hero
```
H1: Real Results. Real Traders.
Subtext: Don't take our word for it — hear from the traders who've
         gone through the DMC program.
```

### 9.2 — Stats Summary Bar
```
200+        4            94%          10
Students  Cohorts    Completion    Avg Cohort
Trained   Completed     Rate         Size
```

### 9.3 — Testimonial Grid (Full Page)
Display 8–12 testimonial cards in a masonry/grid layout.

**Placeholder testimonials (replace with real ones):**

1. Rahul M. (Mumbai) — "DMC changed my entire approach. I stopped gambling and started trading systematically."
2. Priya S. (Bangalore) — "Cleared my prop firm challenge in 3 weeks post-cohort. The risk module is priceless."
3. Arjun K. (Delhi) — "The live sessions are the real deal. Not pre-recorded theory — actual live market analysis."
4. Sneha R. (Pune) — "I was skeptical about online trading courses. This is different. Small batch, real mentorship."
5. Vikram T. (Hyderabad) — "Position sizing formula alone paid for the entire course within one month."
6. Ananya P. (Chennai) — "The psychology module hit different. I finally understand why I was sabotaging my own trades."
7. Rohan G. (Ahmedabad) — "Funded at $10K on my first prop challenge. Now scaling to $50K."
8. Meera J. (Kolkata) — "The Telegram community is incredibly active and supportive. Mentor is always available."

Each card format:
- 5-star rating
- Quote (in quotes, italic)
- Avatar (initials circle)
- Name, City
- Cohort badge (e.g., "Cohort 2 Graduate")

### 9.4 — Trustpilot Integration Section
```
[Trustpilot logo / badge]
4.2 / 5.0 stars · See all reviews on Trustpilot →
[Link to actual Trustpilot page]
```

### 9.5 — Before & After Section
**Section Title:** "The Transformation"

Two-column layout for 3 student stories:
| Before | After |
|--------|-------|
| Trading on tips and emotions | Trading with a structured DMC system |
| No idea about risk management | Consistent 1:3 risk:reward execution |
| Failed 3 prop challenges | Funded at $25,000 within 6 weeks |

---

## SECTION 10: RESOURCES PAGE (`/resources`)

### 10.1 — Hero
```
H1: Free Resources for Serious Traders
Subtext: Everything you need to start thinking and trading like an institution.
         No email capture required. Just take it.
```

### 10.2 — Blog Section (3 featured articles — stub content)

**Article 1:**
- Title: "What Are Institutional Order Blocks? The Complete Guide"
- Summary: Learn how institutional traders create order blocks and how DMC teaches you to read them in real time.
- Tag: [Education] [DMC]
- Read time: 8 min
- CTA: "Read Article →"

**Article 2:**
- Title: "How Prop Firms Work in 2025 — Everything Indian Traders Need to Know"
- Summary: A complete breakdown of how funded trader programs work, which firms accept Indian traders, and how to pass your first challenge.
- Tag: [Prop Firms] [Funding]
- Read time: 12 min
- CTA: "Read Article →"

**Article 3:**
- Title: "Why 90% of Traders Fail: The Psychology Behind Losing Money"
- Summary: The real reason most retail traders fail isn't strategy — it's psychology. Here's what the data says and how to fix it.
- Tag: [Psychology] [Risk]
- Read time: 6 min
- CTA: "Read Article →"

### 10.3 — Free Guides / Downloads
```
📄 DMC Framework Introduction PDF
   "Your first look at the Dynamic Market Concept — free download"
   [Download Free PDF]

📄 Trade Journal Template (Excel + Notion)
   "The exact template used by DTL cohort students"
   [Download Free Template]

📄 Prop Firm Challenge Checklist
   "Everything you need to pass your first funded trader evaluation"
   [Download Checklist]
```

### 10.4 — Telegram Section
```
🟢  Join Our Free Telegram Community

Get daily market analysis, trade ideas, live setups, and community support — free.
10,000+ traders already inside.

[Join Free Telegram Channel →]
```

---

## SECTION 11: FAQ PAGE (`/faq`)

**Section Title:** "Frequently Asked Questions"
**Subtitle:** "Everything you need to know before applying."

**FAQ Items (Expandable Accordion):**

1. **Is this program suitable for absolute beginners?**
   Yes. The cohort starts from fundamentals and builds systematically. No prior experience required — only commitment.

2. **What markets does the program cover?**
   The DMC framework is market-agnostic. We primarily use Forex pairs (EUR/USD, GBP/USD), US indices (NAS100, SPX500), and crypto (BTC, ETH) for live examples. The methodology applies to any liquid market.

3. **Is this financial advice?**
   No. Dynamic Trader Live is a trading education program. All content is for educational purposes only. Trading involves substantial risk of loss. We do not provide personalized investment advice.

4. **How is this different from free YouTube content?**
   YouTube gives you fragments. This gives you a complete system — DMC framework + live application + mentorship + community + journaling + funded trader preparation. You don't just learn; you transform.

5. **What if I miss a live session?**
   Every session is recorded and available within 24 hours in your private Telegram group and Google Drive folder. You never miss content.

6. **Is there a refund policy?**
   Due to the limited cohort size and digital nature of the program, we do not offer refunds once access is granted. Please review the program thoroughly before applying. We do offer a free 30-minute discovery call before enrollment.

7. **Do I need TradingView paid version?**
   The free version of TradingView is sufficient for most of the program. A Pro plan is recommended (but not mandatory) for multi-chart layouts. We will guide you on setup during Week 1.

8. **What is the funding pathway? Which prop firms do you recommend?**
   We prepare you for major prop firm evaluations including FTMO, MyFundedFx, and similar. Note: We have no commercial relationship with these firms. Funding is not guaranteed. Prop firm challenges involve real capital risk (challenge fee).

9. **What is "DMC" — Dynamic Market Concept?**
   DMC is a proprietary trading methodology developed by our mentor that synthesizes institutional order flow analysis, liquidity mapping, and price structure into a single, actionable framework. It is not based on traditional indicators.

10. **How many seats are available per cohort?**
    Each cohort is limited to a maximum of 10 traders. This is intentional — small batches ensure genuine mentorship quality, not mass education.

11. **Who is this program NOT suitable for?**
    This program is not for you if: you're looking for get-rich-quick strategies, you're unwilling to commit 1–2 hours daily, you want signals (we don't give signals — we teach frameworks), or you're not prepared to study, practice, and review.

12. **What happens after the cohort ends?**
    You retain lifetime access to all recordings, the alumni Telegram community, updated materials, and eligibility for future cohort reviews at discounted rates.

---

## SECTION 12: APPLY PAGE (`/apply`)

### 12.1 — Hero
```
H1: Apply for Cohort 4
Subtext: Seats are limited to 10 traders per cohort. 
         We review all applications to ensure quality over quantity.
```

### 12.2 — Application Form
**Form Fields:**
```
Full Name *
Email Address *
Phone Number (WhatsApp) *
City / State *

Trading Experience:
  [ ] Complete Beginner (0–6 months)
  [ ] Some Experience (6 months – 2 years)
  [ ] Experienced (2+ years, inconsistent)
  [ ] Other: ___

How many hours per week can you commit to the program? *
  [ ] 5–7 hours
  [ ] 8–14 hours
  [ ] 15+ hours

What markets are you interested in trading? (multi-select)
  [ ] Forex
  [ ] US Indices (NAS100, SPX)
  [ ] Crypto
  [ ] All of the above

What is your primary goal from this cohort? *
  [ ] Understand structured trading for the first time
  [ ] Become consistently profitable
  [ ] Pass a prop firm challenge and get funded
  [ ] Supplement/replace income with trading

How did you hear about Dynamic Trader Live? *
  [ ] Telegram
  [ ] Instagram
  [ ] YouTube
  [ ] Referral
  [ ] Other

Brief message / why you want to join: *
[Textarea — 4 rows]

[ I have read and accept the Risk Disclaimer ] *
[ I understand this is a trading education program and not financial advice ] *

[Submit Application →]
```

**After Submit:** Show success screen with:
```
✅ Application Received!
We'll review your application and contact you within 48 hours
via WhatsApp/Email to schedule your free 30-minute discovery call.

Meanwhile, join our free Telegram community:
[Join Telegram →]
```

**Sidebar (desktop) — displayed next to form:**
```
⏳ Cohort 4 closes when 10 seats fill.
    
Currently: 7 of 10 seats taken.

✅ No hidden fees
✅ Razorpay secure payment
✅ Free discovery call before enrollment
✅ Course starts May 11, 2025
```

---

## SECTION 13: FOOTER (GLOBAL COMPONENT)

### Layout: 4 columns + bottom strip

**Column 1 — Brand:**
```
[Logo: Dynamic Trader Live]
India's most structured trading education cohort.
Built for serious traders. Powered by DMC.

[Telegram icon] [Instagram icon] [YouTube icon]
```

**Column 2 — Program:**
```
Program
├── Overview
├── Curriculum
├── Roadmap
├── Cohort Details
└── Pricing & Apply
```

**Column 3 — Resources:**
```
Resources
├── Blog
├── Free Guides
├── Telegram Community
├── FAQ
└── Contact
```

**Column 4 — Legal:**
```
Legal
├── Privacy Policy
├── Terms & Conditions
├── Risk Disclaimer ⚠️
└── Cookie Policy
```

**Bottom Strip (full width):**
```
⚠️ RISK DISCLAIMER: Trading financial instruments including Forex, indices, and cryptocurrencies 
involves substantial risk of loss and is not suitable for all investors. Dynamic Trader Live 
provides trading education only and does not constitute financial advice or investment 
recommendations. Past performance is not indicative of future results. Trade responsibly.

© 2025 Dynamic Trader Live. All Rights Reserved. | India | GST: [GST number]
```

---

## SECTION 14: LEGAL PAGES

### Risk Disclaimer Page (`/legal/risk-disclaimer`)
Include mandatory content:
- Trading involves substantial risk of capital loss
- Not suitable for all investors
- Past performance does not guarantee future results
- DTL provides education only, not investment advice
- Funded accounts via third-party prop firms are subject to those firms' own T&Cs
- Users should consult SEBI-registered advisors for personalized investment advice

### Privacy Policy Page (`/legal/privacy-policy`)
Cover: data collected (name, email, phone), how it's used (WhatsApp communication, Razorpay, email), third-party services (Firebase, Razorpay), data retention, contact for deletion requests.

### Terms & Conditions Page (`/legal/terms`)
Cover: enrollment conditions, no refund policy after access grant, intellectual property (DMC framework), community conduct rules (Telegram), liability limitations.

---

## SECTION 15: ANIMATIONS & MICRO-INTERACTIONS

All implemented via Framer Motion (React) or CSS Intersection Observer (Vanilla):

1. **Page transitions:** Fade in + slight Y-axis slide-up on route change (0.3s)
2. **Scroll reveals:** Each section fades in + translateY(-20px) → 0 as it enters viewport
3. **Counter animations:** Numbers count up from 0 to value over 1.5s on first scroll-in
4. **CTA button:** Subtle scale pulse every 4s when idle (`scale: 1 → 1.03 → 1`)
5. **Navbar glow:** CTA button in navbar has faint glow that intensifies on hover
6. **Card hover:** `transform: translateY(-4px)` + increased box-shadow glow
7. **Accordion opens:** Smooth height animation (max-height transition)
8. **Testimonial carousel:** Auto-scroll every 5s with smooth CSS transition
9. **Hero background shapes:** Slow float animation (keyframes, 8–12s loop)
10. **Theme toggle:** Icon rotates 360° on toggle, background fades
11. **Progress bar:** Show reading progress bar at top of blog articles
12. **Form focus states:** Inputs get accent-colored border glow on focus
13. **Apply button in sidebar:** Gentle bounce animation every 6s

---

## SECTION 16: MOBILE RESPONSIVENESS

All breakpoints:
```
xs: < 480px    (small phones)
sm: 480–767px  (phones)
md: 768–1023px (tablets)
lg: 1024–1279px (small desktop)
xl: 1280px+    (full desktop)
```

Specific rules:
- Hero H1: 2.5rem on mobile → 4rem on desktop
- Metric counters: 2x2 grid on mobile
- Program cards: single column on mobile
- Timeline: vertical on mobile, horizontal on desktop
- Testimonials: single card swipe on mobile
- Navbar: hamburger drawer on mobile (md and below)
- Dropdowns: become full accordions in mobile drawer
- Footer columns: 2x2 on tablet, 1 column stack on mobile

---

## SECTION 17: SEO & META TAGS

Each page must include:

**Home:**
```html
<title>Dynamic Trader Live | Institutional Trading Education | DMC Cohort India</title>
<meta name="description" content="Stop guessing. Learn the DMC (Dynamic Market Concept) framework with Dynamic Trader Live — India's most structured trading cohort. Live mentorship, prop firm prep, ₹25,000 one-time. Only 10 seats per cohort.">
<meta property="og:title" content="Dynamic Trader Live — Trade Like Institutions">
<meta property="og:image" content="/og-image.jpg">
<link rel="canonical" href="https://dynamictraderlive.com">
```

**Program page:**
```html
<title>DMC Trading Program — Cohort 4 | Dynamic Trader Live</title>
<meta name="description" content="Full 5–6 week live cohort covering the DMC Framework, institutional order flow, risk management, and funded trader preparation. ₹25,000 one-time. 10 seats.">
```

Add structured data (JSON-LD) for:
- `Organization` schema
- `Course` schema on /program page
- `FAQPage` schema on /faq page
- `Review` aggregate schema on /results

---

## SECTION 18: PERFORMANCE & TECHNICAL REQUIREMENTS

- All images: WebP format, lazy loaded
- Fonts: preconnect to Google Fonts, `font-display: swap`
- First Contentful Paint target: < 1.5s
- No unused CSS (Tailwind purge enabled)
- Firebase Analytics: track page views + CTA clicks
- Razorpay: trigger on "Apply Now" → confirm → Firestore save enrollment
- Form submissions → Firebase Firestore collection `applications`
- Admin view: Basic Firebase console visibility of applications (no custom admin panel needed for v1)

---

## SECTION 19: COMPLETE COPY REFERENCE — ALL TEXT STRINGS

### Navigation
- "Home", "Program", "Results", "Resources", "FAQ"
- "Login", "Apply Now →"
- Program dropdown: "Overview", "Curriculum & Modules", "Roadmap", "Cohort Details & Pricing"
- Resources dropdown: "Blog & Articles", "Free Guides (PDF)", "Telegram Community"

### Home Hero
- Eyebrow: "🔥 Cohort 4 — Starting May 11, 2025 | Only 10 Seats"
- H1: "Stop Guessing. Start Trading Like Institutions."
- Sub: "Learn the DMC (Dynamic Market Concept) framework — the same institutional approach used by professional traders globally. 5–6 weeks of live mentorship, risk management, psychology & funded trader pathway."
- CTA1: "Apply Now →"
- CTA2: "View Program"
- Trust bar: "₹25,000 one-time | Limited to 10 seats | Live classes + mentorship"

### Problem Section
- Title: "Why 90% of Traders Fail"
- Card 1: "They Trade on Gut Feel" / "Most retail traders enter the market based on tips, emotions, or random indicators. Without a structured framework, every trade is a gamble."
- Card 2: "They Ignore Risk" / "One bad trade wipes out 10 winning trades. Without proper position sizing and stop-loss discipline, capital erosion is inevitable."
- Card 3: "They Can't Control Emotions" / "Fear, greed, and revenge trading. Without a journaled, process-driven approach, emotional decisions destroy even good strategies."
- Transition: "Dynamic Trader Live exists to fix exactly this. The DMC Framework gives you the same structured edge institutions use."

### Metrics
- "200+ Students Trained", "8+ Cohorts Completed", "94% Completion Rate", "10 Seats per Cohort"

### Final CTA
- "Limited Seats. Real Results. No Guesswork."
- "Cohort 4 is accepting applications now. Only 10 seats available."
- Button: "Apply Now — Secure Your Seat →"
- Link: "Have Questions? Read FAQ"

---

## SECTION 20: FILE STRUCTURE (IF BUILDING IN NEXT.JS)

```
/app
  /page.tsx                    → Home
  /program/page.tsx            → Program
  /roadmap/page.tsx            → Roadmap
  /results/page.tsx            → Results
  /resources/page.tsx          → Resources
  /faq/page.tsx                → FAQ
  /apply/page.tsx              → Apply
  /legal/privacy-policy/page.tsx
  /legal/terms/page.tsx
  /legal/risk-disclaimer/page.tsx
  layout.tsx                   → Root layout (Navbar + Footer)
/components
  /ui                          → Button, Card, Badge, Accordion, Modal
  /sections                    → Hero, Metrics, Testimonials, FAQ, CTA
  /layout                      → Navbar, Footer, ThemeToggle
/lib
  /firebase.ts                 → Firebase config
  /razorpay.ts                 → Razorpay integration
/styles
  /globals.css                 → CSS variables, base styles
/public
  /images                      → All static images
  /fonts                       → (if self-hosting)
```

---

## END OF PROMPT

> **Final instruction to AI building this website:** Build every page, every component, every section exactly as specified. Use the exact copy provided. Apply the exact color variables. Implement every animation. Do not skip pages. This is a production-grade, trust-first trading education platform — treat it with the quality level of a Series A fintech startup's marketing site. The dark theme is the default. Light theme is togglable. Mobile responsive at all breakpoints. Start with the Home page and Navbar, then proceed through each page in the order listed.
