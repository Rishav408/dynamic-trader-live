export const metrics = [
  { value: 200, suffix: '+', label: 'Students Trained' },
  { value: 8, suffix: '+', label: 'Cohorts Completed' },
  { value: 94, suffix: '%', label: 'Completion Rate' },
  { value: 10, suffix: '', label: 'Seats per Cohort' },
];

export const problemCards = [
  {
    icon: 'Zap',
    title: 'They Trade on Gut Feel',
    body: 'Most retail traders enter the market based on tips, emotions, or random indicators. Without a structured framework, every trade is a gamble.',
  },
  {
    icon: 'TrendingDown',
    title: 'They Ignore Risk',
    body: 'One bad trade wipes out 10 winning trades. Without proper position sizing and stop-loss discipline, capital erosion is inevitable.',
  },
  {
    icon: 'Brain',
    title: "They Can't Control Emotions",
    body: 'Fear, greed, and revenge trading. Without a journaled, process-driven approach, emotional decisions destroy even good strategies.',
  },
];

export const dmcPillars = [
  ['Landmark', 'Institutional Order Flow', 'Understand where big money enters and exits'],
  ['BarChart3', 'Price Structure Analysis', 'Read markets the way institutions read them'],
  ['Droplets', 'Liquidity Zone Mapping', 'Identify stop hunts and smart money traps'],
  ['ShieldCheck', 'Risk-First Execution', 'Every trade defined by risk before reward'],
  ['Brain', 'Trader Psychology', 'Journal-based mental discipline system'],
] as const;

export const roadmapStages = [
  {
    stage: 'Stage 1',
    title: 'Foundation',
    week: 'Week 1',
    quote: 'Understand market structure through institutional eyes.',
    bullets: [
      'Market structure basics',
      'Candlestick patterns (institutional lens)',
      'Introduction to DMC framework',
    ],
    outcome: 'Know HOW markets move, not just WHAT they do',
  },
  {
    stage: 'Stage 2',
    title: 'Framework',
    week: 'Week 2',
    quote: 'Learn the exact framework used to read institutional intent.',
    bullets: ['Liquidity zones & order blocks', 'Fair value gaps (FVG)', 'Entry framework rules'],
    outcome: 'Identify institutional entry and exit zones',
  },
  {
    stage: 'Stage 3',
    title: 'Execution',
    week: 'Weeks 3-4',
    quote: 'From theory to real-time decision making.',
    bullets: ['Live trade execution drills', 'Position sizing formulas', 'Stop-loss & target setting'],
    outcome: 'Consistent, rules-based trade execution',
  },
  {
    stage: 'Stage 4',
    title: 'Consistency',
    week: 'Week 5',
    quote: 'The mental edge that separates profitable traders.',
    bullets: [
      'Trade journaling system',
      'Psychology & discipline modules',
      'Review & refinement sessions',
    ],
    outcome: 'Process-driven trader with emotional discipline',
  },
  {
    stage: 'Stage 5',
    title: 'Funding Pathway',
    week: 'Week 6',
    quote: 'Put your skills to work without risking personal capital.',
    bullets: [
      'Prop firm challenge preparation',
      'Risk rules for funded accounts',
      'Pathway to get funded up to $500K',
    ],
    outcome: 'Ready to trade institutional capital',
  },
];

export const curriculum = [
  {
    title: 'Module 1 - Foundation',
    week: 'Week 1',
    topics: [
      'Introduction to Institutional Trading vs Retail Thinking',
      'Understanding Market Structure: Higher Highs, Lower Lows, Ranges',
      'Candlestick Psychology (institutional interpretation)',
      'Session timings: London, New York, Asian overlaps',
      'DMC Framework Introduction: The 5 Pillars',
      'Tools setup: TradingView walkthrough, charting basics',
    ],
  },
  {
    title: 'Module 2 - The DMC Framework',
    week: 'Week 2',
    topics: [
      'Order Blocks: Identifying Institutional Entry Zones',
      'Fair Value Gaps (FVG): How Smart Money Creates Imbalances',
      'Liquidity Sweeps: Stop Hunt Mechanics',
      'Breaker Blocks and Change of Character (ChoCH)',
      'Supply & Demand Zones (DMC Interpretation)',
      'Building Your First Trade Setup Using DMC',
    ],
  },
  {
    title: 'Module 3 - Risk Management',
    week: 'Week 3',
    topics: [
      'The 1% Rule and Position Sizing Formula',
      'Risk:Reward Ratios (minimum 1:2, optimal 1:3+)',
      'Stop-Loss Placement Strategy (DMC-based)',
      'Drawdown management and account protection',
      'Portfolio risk across multiple open trades',
      'Capital allocation for prop firm challenges',
    ],
  },
  {
    title: 'Module 4 - Live Execution & Journaling',
    week: 'Week 4',
    topics: [
      'Live trade execution drills (paper trading + real examples)',
      'Entry, target, and stop-loss marking on live charts',
      'Trade journaling system: what to log, how to review',
      'Weekly review process: win rate, RR, mental state tracking',
      'Common execution mistakes and how to eliminate them',
      'Post-trade analysis framework',
    ],
  },
  {
    title: 'Module 5 - Psychology & Discipline',
    week: 'Week 5',
    topics: [
      'The trader mindset: process over outcome',
      'Managing fear, greed, and revenge trading',
      'Building trading habits and routines',
      'Emotional regulation techniques',
      'The journaling-psychology connection',
      'Identity shift: from gambler to professional trader',
    ],
  },
  {
    title: 'Module 6 - Funded Trader Pathway',
    week: 'Week 6',
    topics: [
      'What are prop firms? How do funded accounts work?',
      'Rules of prop firm challenges (daily loss limits, max drawdown)',
      'Passing the challenge: strategy adjustments',
      'Recommended prop firms for Indian traders',
      'Introduction to evaluations: FTMO, MyFundedFx, and others',
      'From Rs 0 risk personal capital to trading $500K funded accounts',
    ],
  },
];

export const includedItems = [
  '30+ hours of live classes (recorded)',
  'Lifetime access to session recordings',
  'Private Telegram group (students + mentor)',
  'Trade journaling template (Excel + Notion)',
  'DMC Framework PDF workbook',
  'Weekly 1-on-1 review sessions',
  'Prop firm challenge guide & checklist',
  'Certificate of completion',
  'Post-cohort alumni community access',
];

export const testimonials = [
  {
    name: 'Rahul M.',
    city: 'Mumbai',
    cohort: 'Cohort 2 Graduate',
    quote:
      'The DMC framework completely changed how I see price action. I was trading randomly before this cohort. Now I have a system I trust.',
  },
  {
    name: 'Priya S.',
    city: 'Bangalore',
    cohort: 'Cohort 1 Graduate',
    quote:
      "Best investment I've made in my trading journey. The risk management module alone is worth 10x the price.",
  },
  {
    name: 'Arjun K.',
    city: 'Delhi',
    cohort: 'Cohort 3 Graduate',
    quote:
      'I cleared my first prop firm challenge within 3 weeks of finishing the cohort. The funded pathway prep is real.',
  },
  {
    name: 'Sneha R.',
    city: 'Pune',
    cohort: 'Cohort 2 Graduate',
    quote:
      "The live sessions feel like trading school. Not a course you watch and forget; it's mentorship you actually apply.",
  },
  {
    name: 'Vikram T.',
    city: 'Hyderabad',
    cohort: 'Cohort 3 Graduate',
    quote: 'Position sizing formula alone paid for the entire course within one month.',
  },
  {
    name: 'Ananya P.',
    city: 'Chennai',
    cohort: 'Cohort 1 Graduate',
    quote:
      'The psychology module hit different. I finally understand why I was sabotaging my own trades.',
  },
  {
    name: 'Rohan G.',
    city: 'Ahmedabad',
    cohort: 'Cohort 4 Graduate',
    quote: 'Funded at $10K on my first prop challenge. Now scaling to $50K.',
  },
  {
    name: 'Meera J.',
    city: 'Kolkata',
    cohort: 'Cohort 2 Graduate',
    quote:
      'The Telegram community is incredibly active and supportive. Mentor is always available.',
  },
];

export const faqs = [
  [
    'Is this program suitable for absolute beginners?',
    'Yes. The cohort starts from fundamentals and builds systematically. No prior experience required, only commitment.',
  ],
  [
    'What markets does the program cover?',
    'The DMC framework is market-agnostic. We primarily use Forex pairs, US indices, and crypto for live examples. The methodology applies to any liquid market.',
  ],
  [
    'Is this financial advice?',
    'No. Dynamic Trader Live is a trading education program. All content is for educational purposes only. Trading involves substantial risk of loss. We do not provide personalized investment advice.',
  ],
  [
    'How is this different from free YouTube content?',
    "YouTube gives you fragments. This gives you a complete system: DMC framework, live application, mentorship, community, journaling, and funded trader preparation.",
  ],
  [
    'What if I miss a live session?',
    'Every session is recorded and available within 24 hours in your private Telegram group and Google Drive folder. You never miss content.',
  ],
  [
    'Is there a refund policy?',
    'Due to the limited cohort size and digital nature of the program, we do not offer refunds once access is granted. We do offer a free 30-minute discovery call before enrollment.',
  ],
  [
    'Do I need TradingView paid version?',
    'The free version of TradingView is sufficient for most of the program. A Pro plan is recommended but not mandatory for multi-chart layouts.',
  ],
  [
    'What is the funding pathway? Which prop firms do you recommend?',
    'We prepare you for major prop firm evaluations including FTMO, MyFundedFx, and similar. Funding is not guaranteed. Prop firm challenges involve real capital risk.',
  ],
  [
    'What is DMC - Dynamic Market Concept?',
    'DMC is a proprietary trading methodology that synthesizes institutional order flow analysis, liquidity mapping, and price structure into a single actionable framework.',
  ],
  [
    'How many seats are available per cohort?',
    'Each cohort is limited to a maximum of 10 traders. Small batches ensure genuine mentorship quality.',
  ],
  [
    'Who is this program NOT suitable for?',
    "This program is not for you if you're looking for get-rich-quick strategies, signals, or shortcuts without study, practice, and review.",
  ],
  [
    'What happens after the cohort ends?',
    'You retain lifetime access to recordings, the alumni Telegram community, updated materials, and eligibility for future cohort reviews at discounted rates.',
  ],
] as const;

export const articles = [
  {
    slug: 'order-blocks',
    title: 'What Are Institutional Order Blocks? The Complete Guide',
    summary:
      'Learn how institutional traders create order blocks and how DMC teaches you to read them in real time.',
    tags: ['Education', 'DMC'],
    readTime: '8 min',
  },
  {
    slug: 'prop-firms-2025',
    title: 'How Prop Firms Work in 2025 - Everything Indian Traders Need to Know',
    summary:
      'A complete breakdown of how funded trader programs work, which firms accept Indian traders, and how to pass your first challenge.',
    tags: ['Prop Firms', 'Funding'],
    readTime: '12 min',
  },
  {
    slug: 'trader-psychology',
    title: 'Why 90% of Traders Fail: The Psychology Behind Losing Money',
    summary:
      "The real reason most retail traders fail isn't strategy; it's psychology. Here's what the data says and how to fix it.",
    tags: ['Psychology', 'Risk'],
    readTime: '6 min',
  },
];
