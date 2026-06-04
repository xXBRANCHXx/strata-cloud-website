import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  FileText,
  Handshake,
  Headphones,
  HeartHandshake,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  Mic2,
  MonitorCheck,
  Phone,
  PiggyBank,
  PlayCircle,
  Receipt,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WalletCards,
} from 'lucide-react';

export const company = {
  name: 'Strata Cloud Accountants',
  tagline: 'Financial Clarity. Human Connection.',
  phone: '(630) 274-6057',
  phoneHref: 'tel:6302746057',
  email: 'info@stratacloudaccountants.com',
  emailHref: 'mailto:info@stratacloudaccountants.com',
  address: '6001 W Parmer Lane, STE 370 Box 1016, Austin, Texas 78727',
  linkedin: 'https://www.linkedin.com/company/strata-cloud',
  facebook: 'https://www.facebook.com/stratacloudaccountants',
  instagram: 'https://www.instagram.com/stratacloudaccountants',
  youtube: 'https://www.youtube.com/@stratacloudaccountants',
};

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/industries-served', label: 'Industries' },
  { href: '/careers', label: 'Careers' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/resources', label: 'Resources' },
];

export const services = [
  {
    id: 'bookkeeping',
    title: 'Bookkeeping Services',
    shortTitle: 'Bookkeeping',
    href: '/services/bookkeeping',
    icon: Receipt,
    summary:
      'Clean ledgers, monthly reconciliations, payables, receivables, and reporting that business owners can trust.',
    details:
      'We keep your day-to-day financial data accurate, current, and organized so your leadership team can make decisions from facts instead of cleanup projects.',
    bullets: [
      'Customized bookkeeping workflows',
      'Bank, credit card, and loan reconciliations',
      'Accounts payable and receivable support',
      'Month-end close and financial cleanups',
      'Clear monthly reporting packages',
    ],
  },
  {
    id: 'controller',
    title: 'Controller Services',
    shortTitle: 'Controller',
    href: '/services/controller',
    icon: ShieldCheck,
    summary:
      'Financial oversight, close discipline, controls, process improvement, and reliable executive reporting.',
    details:
      'Controller support gives you stronger operating discipline: cleaner systems, more dependable reporting, and fewer surprises across cash, payroll, billing, and close cycles.',
    bullets: [
      'Financial oversight and reporting cadence',
      'Cash flow and accounts management',
      'Process optimization and controls',
      'Fraud prevention and risk review',
      'Month-end and year-end close leadership',
    ],
  },
  {
    id: 'fractional-cfo',
    title: 'Fractional CFO Services',
    shortTitle: 'Fractional CFO',
    href: '/services/cfo',
    icon: LineChart,
    summary:
      'Executive-level perspective for pricing, cash flow, forecasting, hiring, capital planning, and growth decisions.',
    details:
      'Get CFO-caliber strategy without a full-time executive hire. We help owners understand what the numbers mean and what to do next.',
    bullets: [
      'Cash flow forecasting and management',
      'Budgets, projections, and scenario planning',
      'Pricing and margin strategy',
      'Investor and stakeholder support',
      'Executive decision support and coaching',
    ],
  },
  {
    id: 'advisory',
    title: 'Advisory & Business Coaching',
    shortTitle: 'Advisory',
    href: '/services#advisory',
    icon: HeartHandshake,
    summary:
      'A coaching-driven layer that turns financial reporting into confident, accountable business action.',
    details:
      'Accounting data becomes more valuable when someone helps you interpret it. We translate metrics into next steps, accountability, and decision clarity.',
    bullets: [
      'KPI design and business scorecards',
      'Monthly strategy and accountability sessions',
      'Client profitability and unit economics review',
      'Hiring, pricing, and growth-roadmap support',
      'Technology-enabled reporting workflows',
    ],
  },
];

export const differentiators = [
  {
    icon: TrendingUp,
    title: '98% referral rate',
    text: 'Relationship-first work shows up in client trust, repeat engagement, and referral-driven growth.',
  },
  {
    icon: Clock3,
    title: 'Fast response times',
    text: 'You should not have to wait through silence when payroll, pricing, or cash questions need attention.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Executive insight without full-time CFO cost',
    text: 'Get experienced perspective at the stage and cadence your business actually needs.',
  },
  {
    icon: Users,
    title: 'Coaching plus accounting',
    text: 'We combine technical accuracy with plain-language teaching and practical business accountability.',
  },
];

export const processSteps = [
  {
    title: 'Identify where you are today',
    text: 'We review your books, tools, close process, reporting, cash position, and decision cadence.',
  },
  {
    title: 'Define goals and targets',
    text: 'Together we clarify growth priorities, financial targets, risks, and what leadership needs to see.',
  },
  {
    title: 'Build your roadmap',
    text: 'We create the reporting, operating rhythm, and advisory support that keeps the business moving.',
  },
];

export const painPoints = [
  {
    slug: 'messy-books',
    title: 'Messy Books',
    icon: FileText,
    problem: 'Your books are late, inconsistent, or hard to trust.',
    symptoms: ['Unreconciled accounts', 'Confusing categories', 'Delayed month-end close', 'Financial reports no one uses'],
    consequences: 'Every decision gets slower because no one is confident the data reflects reality.',
    caseStudy:
      'A service firm came in with six months of cleanup work and no reliable close rhythm. We rebuilt the chart of accounts, cleaned the ledger, and installed a monthly reporting cadence.',
    video: 'Short cleanup walkthrough: how to spot three signs your books are steering decisions in the wrong direction.',
  },
  {
    slug: 'cash-flow-crunch',
    title: 'Cash Flow Crunch',
    icon: PiggyBank,
    problem: 'Profit looks fine on paper, but cash feels tight every payroll cycle.',
    symptoms: ['Surprise shortfalls', 'Payroll stress', 'No runway visibility', 'Owners unsure when to invest'],
    consequences: 'Growth becomes reactive because every opportunity competes with urgent cash pressure.',
    caseStudy:
      'We built a rolling cash forecast for an owner who had revenue growth but recurring payroll anxiety, then added AR and payment-timing controls.',
    video: 'Short forecast walkthrough: what a 13-week cash view should show before a crunch happens.',
  },
  {
    slug: 'late-receivables',
    title: 'Late Receivables',
    icon: WalletCards,
    problem: 'Clients are slow to pay and collections depend on memory.',
    symptoms: ['A/R keeps climbing', 'Invoices go out late', 'Follow-up is inconsistent', 'Cash is stuck in unpaid work'],
    consequences: 'The company funds client delay instead of using cash for payroll, growth, and owner flexibility.',
    caseStudy:
      'We mapped invoice timing, aging reports, and client follow-up rules for a firm whose A/R was expanding faster than revenue.',
    video: 'Short workflow walkthrough: how a clean receivables cadence improves cash without damaging relationships.',
  },
  {
    slug: 'no-cfo-insight',
    title: 'No CFO Insight',
    icon: BarChart3,
    problem: 'You have reports, but no one turns them into strategic decisions.',
    symptoms: ['Gut-driven hiring', 'No KPI review', 'Pricing debates without data', 'Leadership lacks financial context'],
    consequences: 'The business keeps moving, but owners cannot see whether growth is actually creating value.',
    caseStudy:
      'We added monthly advisory reviews and KPI dashboards for a founder who had clean books but no strategic finance partner.',
    video: 'Short advisory walkthrough: the difference between monthly reporting and CFO-level interpretation.',
  },
  {
    slug: 'pricing-confusion',
    title: 'Pricing Confusion',
    icon: Scale,
    problem: 'You are not sure whether your services are priced for healthy margins.',
    symptoms: ['Busy team, thin profit', 'Custom work underpriced', 'No service-line margin view', 'Rate increases feel risky'],
    consequences: 'Revenue grows while owner stress and delivery pressure grow with it.',
    caseStudy:
      'We helped a service company compare client profitability, delivery cost, and pricing options before changing packages.',
    video: 'Short margin walkthrough: which numbers to review before changing price or scope.',
  },
  {
    slug: 'forecast-blind-spots',
    title: 'Forecast Blind Spots',
    icon: Search,
    problem: 'Growth decisions are made without a clear view of what happens next.',
    symptoms: ['Hiring uncertainty', 'No scenario planning', 'Budget surprises', 'Expansion decisions feel speculative'],
    consequences: 'The owner carries too much risk because the business lacks a practical financial model.',
    caseStudy:
      'We modeled hiring, utilization, cash, and margin scenarios before a client committed to a major expansion plan.',
    video: 'Short planning walkthrough: how scenario models reveal tradeoffs before cash is spent.',
  },
];

export const values = [
  {
    title: 'Service',
    icon: Handshake,
    text: 'We are passionately customer-focused and look for ways to provide value before being asked.',
    examples: ['Respond with urgency and care', 'Create reporting that makes decisions easier'],
  },
  {
    title: 'Transparency',
    icon: MonitorCheck,
    text: 'We set clear expectations around scope, pricing, timelines, and financial reality.',
    examples: ['Explain numbers in plain language', 'Surface problems early'],
  },
  {
    title: 'Respect',
    icon: Users,
    text: 'We treat clients and teammates as capable partners with context worth understanding.',
    examples: ['Listen before prescribing', 'Protect direct, kind communication'],
  },
  {
    title: 'Accountability',
    icon: ClipboardCheck,
    text: 'We own outcomes, learn quickly, and keep promises visible.',
    examples: ['Meet reporting deadlines', 'Fix mistakes directly'],
  },
  {
    title: 'Trust',
    icon: ShieldCheck,
    text: 'We earn long-term confidence through consistency, honesty, and confidentiality.',
    examples: ['Protect client information', 'Act as a reliable decision partner'],
  },
  {
    title: 'Absolute Freedom',
    icon: Sparkles,
    text: 'We use structure and clarity to create more freedom for owners and teammates.',
    examples: ['Automate repeatable workflows', 'Support autonomy with accountability'],
  },
];

export const team = [
  {
    name: 'Kyle Smith',
    role: 'Leadership',
    note: 'Helps business owners connect clean financial operations with confident growth decisions.',
    linkedin: 'https://www.linkedin.com/company/strata-cloud',
  },
  {
    name: 'Hunter Scott',
    role: 'Leadership',
    note: 'Focuses on strategic finance conversations that help owners lead with stronger data.',
    linkedin: 'https://www.linkedin.com/company/strata-cloud',
  },
  {
    name: 'DeEtte Harrington',
    role: 'Leadership',
    note: 'Brings executive finance perspective and a human-centered approach to advisory relationships.',
    linkedin: 'https://www.linkedin.com/in/deette-harrington-227a2a13/',
  },
  {
    name: 'Accounting Team',
    role: 'Remote-first delivery team',
    note: 'A distributed group across the U.S., the Philippines, and Latin America supporting accurate, timely financial work.',
    linkedin: 'https://www.linkedin.com/company/strata-cloud',
  },
];

export const careersThemes = [
  { icon: Target, title: 'Meaningful Impact', text: 'Your work helps owners understand their business and make better decisions.' },
  { icon: Sparkles, title: 'Clarity Over Chaos', text: 'We value clean processes, clear communication, and steady operating rhythm.' },
  { icon: ClipboardCheck, title: 'Ownership & Accountability', text: 'Autonomy works because commitments are explicit and follow-through matters.' },
  { icon: CalendarCheck, title: 'Freedom with Structure', text: 'Remote work is supported by thoughtful systems, expectations, and trust.' },
  { icon: HeartHandshake, title: 'Human-Centered Culture', text: 'We build relationships with clients and teammates as whole people.' },
];

export const podcastEpisodes = [
  'Profitability Planning for Business Owners: Stop Guessing, Start Growing',
  'Forecasting Made Simple: Your Growth Blueprint',
  'Fractional CFO vs. Full-Time CFO: Which is Right for You?',
  'Gut vs Data: Why Most Businesses Fail After Year One',
  'Cash Flow Secrets: How to Align Money with Strategy',
  'Why Most Marketing Is a Lie and How to Actually Grow Your Bottom Line',
  'The CFO Mindset: Leading with Numbers',
  'Scaling Smart: Strategic Finance for Service Businesses',
  'Faith, Risk, Sandbags and Bookkeeping: The Lakeshore Customs Survival Story',
];

export const resourceItems = [
  { icon: FileText, type: 'Article', title: 'Is a fractional CFO worth it?', text: 'How fractional CFO support changes pricing, cash, reporting, and decision quality.' },
  { icon: CircleDollarSign, type: 'Guide', title: 'What do CFO services include?', text: 'A practical overview of forecasting, planning, strategy, and executive reporting.' },
  { icon: Headphones, type: 'Podcast', title: 'The Financial Clarity Podcast', text: 'Weekly insights for owners ready to lead with data, not guesswork.', href: '/podcast' },
  { icon: Megaphone, type: 'FAQ', title: 'Common accounting advisory questions', text: 'Answers on onboarding, timing, flat monthly pricing, and choosing the right service level.', href: '/faq' },
];

export const industries = [
  'Professional Services',
  'Health & Wellness',
  'In-Person Services',
  'Construction',
  'Creative Agencies',
  'Growing Service Businesses',
];

export const contactIcons = { MapPin, Phone, Mail, PlayCircle };
