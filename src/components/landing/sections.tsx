import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Minus,
  Phone,
  Plus,
  Sparkles,
  Star,
} from 'lucide-react';
import { toast } from 'sonner';

/* -------------------------------------------------------------------------- */
/*                                    WORK                                    */
/* -------------------------------------------------------------------------- */

const WORK_OUTCOMES = [
  {
    metric: '9 wks',
    category: 'SaaS Platform',
    client: 'Fleetly AI',
    outcome: 'Autonomous logistics platform shipped in 9 weeks; $2.4M Series A secured.',
    tags: ['Next.js 15', 'AI Agents', 'Stripe Billing'],
  },
  {
    metric: '-68%',
    category: 'AI Automation',
    client: 'Northwind Ops',
    outcome: 'Support resolution latency cut by 68% with custom multi-agent RAG workflow.',
    tags: ['Claude 3.5', 'Vector RAG', 'Slack Integration'],
  },
  {
    metric: '14×',
    category: 'SEO, AEO & GEO',
    client: 'Glossy Retail',
    outcome: 'Organic search and AI-answer citation sessions grew from 12k to 184k in 7 months.',
    tags: ['Answer Engines', 'Entity Graphs', 'Next.js SSR'],
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div data-reveal className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter text-butter-foreground text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xs mb-5">
            <span>Verified Case Studies</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-foreground mb-4">
            Recent founder outcomes.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            A few production deployments where UI craft, autonomous intelligence, and edge infrastructure compounded into real business growth.
          </p>
        </div>

        {/* 3 Ink Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {WORK_OUTCOMES.map((item, idx) => (
            <div
              key={item.client}
              data-reveal
              data-reveal-delay={`${idx * 80}`}
              className="rounded-[32px] bg-zinc-950 text-white p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border border-white/10 shadow-2xl group relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-butter/5 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div>
                <div className="font-serif-editorial text-5xl sm:text-6xl font-medium tracking-tight text-butter mb-6">
                  {item.metric}
                </div>
                <div className="text-xs uppercase font-mono tracking-wider text-zinc-400 mb-2">
                  {item.category}
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  {item.client}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-300 mb-6">
                  {item.outcome}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                TESTIMONIALS                                */
/* -------------------------------------------------------------------------- */

const TESTIMONIALS_DATA = [
  {
    quote:
      'Nexora replaced three separate agencies. They shipped our full AI SaaS platform in 6 weeks, then automated our onboarding pipeline completely.',
    author: 'Amara Reyes',
    role: 'Chief Operating Officer',
    company: 'Fleetly AI',
    avatar: 'AR',
    rating: 5,
  },
  {
    quote:
      'The clearest engineering sprint process we have ever seen. Weekly demo builds every Friday meant zero surprises and a launch date we hit on the dot.',
    author: 'Karan Joshi',
    role: 'Founder & CEO',
    company: 'Northwind',
    avatar: 'KJ',
    rating: 5,
  },
  {
    quote:
      'Our organic traffic and Perplexity/ChatGPT answer citations surged within 90 days. Their engineering is flawless and revenue-linked.',
    author: 'Mia Sandoval',
    role: 'Head of Growth',
    company: 'Glossy',
    avatar: 'MS',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/60 py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div data-reveal className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter text-butter-foreground text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xs mb-5">
            <span>Founder Testimonials</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-foreground">
            Partnerships that compound.
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.author}
              data-reveal
              data-reveal-delay={`${idx * 80}`}
              className="rounded-[32px] bg-card p-8 border border-border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-soft"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <blockquote className="font-display text-lg font-light leading-relaxed text-foreground mb-8">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="flex items-center gap-3.5 pt-6 border-t border-border/60">
                <div className="w-11 h-11 rounded-2xl bg-zinc-950 text-white text-xs font-semibold flex items-center justify-center shadow-xs">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {item.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}, <span className="font-medium text-foreground/80">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   PRICING                                  */
/* -------------------------------------------------------------------------- */

const PRICING_PLANS = [
  {
    name: 'Launch Sprint',
    price: '$4,900',
    cadence: 'fixed sprint',
    description:
      'For founders validating an idea with a high-converting web platform or launch system.',
    features: [
      'Up to 6 pages custom UI/UX design',
      'Next.js 15 & React 19 stack',
      'SEO & Answer Engine foundations',
      'Headless CMS integration',
      '2 weeks post-launch warranty',
    ],
    featured: false,
    cta: 'Reserve Launch Sprint',
  },
  {
    name: 'Scale Platform',
    price: '$9,800',
    cadence: 'per month',
    description:
      'A dedicated full-stack squad engineering your SaaS product and AI automation in parallel.',
    features: [
      'Full-stack SaaS or Mobile App build',
      'Autonomous AI agent workflows',
      'Multi-tenant DB, Stripe auth & billing',
      'SEO, AEO & GEO indexing program',
      'Weekly Friday staging demos',
      'Direct Slack channel with senior architects',
    ],
    featured: true,
    badge: 'Founder Favorite',
    cta: 'Reserve Dedicated Squad',
  },
  {
    name: 'Enterprise Engine',
    price: '$18,500+',
    cadence: 'custom scope',
    description:
      'Multi-team architecture, custom LLM fine-tuning, SOC2 security, and legacy modernization.',
    features: [
      'Dedicated multi-pod engineering squad',
      'Custom LLM & Private RAG deployment',
      'SOC2 compliance & security audit',
      'Distributed multi-region cloud infra',
      'Executive roadmap quarterly planning',
    ],
    featured: false,
    cta: 'Inquire for Enterprise',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 scroll-mt-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div data-reveal className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter text-butter-foreground text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xs mb-5">
            <span>Engagement Models</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-foreground mb-4">
            Transparent sprint pricing. Zero surprises.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            No hourly billable traps. Pick a fixed sprint or monthly squad capacity with guaranteed deliverables.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={plan.name}
              data-reveal
              data-reveal-delay={`${idx * 80}`}
              className={`rounded-[36px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative ${
                plan.featured
                  ? 'bg-zinc-950 text-white border border-butter/30 shadow-2xl'
                  : 'bg-card text-foreground border border-border hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-8 bg-butter text-butter-foreground text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <span
                    className={`font-serif-editorial text-4xl sm:text-5xl font-medium tracking-tight ${
                      plan.featured ? 'text-butter' : 'text-foreground'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ml-2 ${
                      plan.featured ? 'text-zinc-400' : 'text-muted-foreground'
                    }`}
                  >
                    /{plan.cadence}
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    plan.featured ? 'text-zinc-300' : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <div
                  className={`pt-6 border-t flex flex-col gap-3.5 mb-8 ${
                    plan.featured ? 'border-white/10' : 'border-border/60'
                  }`}
                >
                  {plan.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-medium"
                    >
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          plan.featured
                            ? 'bg-butter/20 text-butter'
                            : 'bg-secondary text-foreground'
                        }`}
                      >
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className={plan.featured ? 'text-zinc-200' : 'text-foreground'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full rounded-full py-4 text-center text-sm font-semibold transition-all duration-200 block shadow-md cursor-pointer ${
                  plan.featured
                    ? 'bg-butter text-butter-foreground hover:scale-[1.02]'
                    : 'bg-zinc-950 text-white hover:bg-butter hover:text-butter-foreground hover:scale-[1.02]'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                     FAQ                                    */
/* -------------------------------------------------------------------------- */

const FAQ_ITEMS = [
  {
    q: 'How quickly can we start our sprint?',
    a: 'Most sprint builds kick off within 5–7 days following the architectural discovery session. Urgent builds can start sooner when a squad slot is open.',
  },
  {
    q: 'Do you work with existing codebases or only new builds?',
    a: 'We work with both. We audit existing repositories, identify bottlenecks, stabilize critical user flows, and incrementally deploy improvements without requiring a risky ground-up rewrite.',
  },
  {
    q: 'What does AI automation mean in our project scope?',
    a: 'Production-ready intelligence: autonomous customer support and sales agents, real-time vector search (RAG) over your internal knowledge base, and automated workflow pipelines that eliminate hours of manual operational overhead.',
  },
  {
    q: 'How does SEO differ from AEO and GEO?',
    a: 'SEO targets classic search engines (Google), AEO optimizes structured data for answer engines (Siri, Google Voice, Featured Snippets), and GEO ensures your brand is indexed and accurately cited within generative AI models (ChatGPT, Perplexity, Claude). We engineer all three into your codebase.',
  },
  {
    q: 'Who owns the intellectual property and code repositories?',
    a: 'You own 100% of all intellectual property, Figma design files, source repositories, and cloud infrastructure keys upon sprint completion and handover.',
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 scroll-mt-12 bg-background">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter text-butter-foreground text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xs mb-5">
            <span>Frequently Asked</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-foreground">
            Clear answers to common questions.
          </h2>
        </div>

        {/* Accordion Container */}
        <div
          data-reveal
          className="rounded-[32px] border border-border bg-card p-6 sm:p-8 shadow-sm divide-y divide-border"
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className="py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-foreground" />
                    ) : (
                      <Plus className="w-4 h-4 text-foreground" />
                    )}
                  </div>
                </button>

                {/* Smooth CSS Grid Accordion */}
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pt-3 text-[15px] leading-relaxed text-muted-foreground max-w-3xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 CONTACT CTA                                */
/* -------------------------------------------------------------------------- */

export function ContactCta() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Project brief received!', {
        description: 'A senior architect will review your requirements and reply within 24 hours.',
      });
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-12 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          data-reveal
          className="rounded-[36px] bg-zinc-950 text-white p-8 sm:p-14 relative overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Ambient lighting glows */}
          <div
            className="absolute -right-20 -top-20 w-96 h-96 bg-butter/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 -bottom-20 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start relative z-10">
            {/* Left Info */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-butter text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xs mb-6 border border-white/10">
                <span>Start a Project</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05] tracking-tight text-white mb-6">
                Let's engineer something <br />
                extraordinary together.
              </h2>
              <p className="text-base leading-relaxed text-zinc-400 max-w-md mb-10 font-light">
                Tell us about your product goals, timeline, and ideal stack. You will receive a scoped architecture proposal and fixed quote within one business day.
              </p>

              {/* Direct Contact Links */}
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@nexora.studio"
                  className="flex items-center gap-3.5 text-sm text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/5 text-butter flex items-center justify-center shrink-0 border border-white/10 group-hover:border-butter/40 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono">hello@nexora.studio</span>
                </a>
                <a
                  href="tel:+14155550148"
                  className="flex items-center gap-3.5 text-sm text-zinc-400 hover:text-white transition-colors group"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white/5 text-butter flex items-center justify-center shrink-0 border border-white/10 group-hover:border-butter/40 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono">+1 (415) 555-0148</span>
                </a>
                <div className="flex items-center gap-3.5 text-sm text-zinc-400">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 text-butter flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>San Francisco · Austin · London · Bengaluru</span>
                </div>
              </div>
            </div>

            {/* Right Intake Form */}
            <div className="bg-zinc-900/90 rounded-[32px] p-7 sm:p-9 border border-white/10 shadow-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-butter focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-butter focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Primary discipline
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl bg-zinc-900 border border-white/10 px-4 py-3.5 text-sm text-white focus:border-butter focus:outline-hidden transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-zinc-900 text-zinc-500">
                      Select primary build requirement
                    </option>
                    <option value="saas" className="bg-zinc-900 text-white">
                      SaaS Platform Engineering
                    </option>
                    <option value="ai" className="bg-zinc-900 text-white">
                      AI Agents & Copilots
                    </option>
                    <option value="website" className="bg-zinc-900 text-white">
                      High-Converting Web Platform
                    </option>
                    <option value="app" className="bg-zinc-900 text-white">
                      Mobile Application (iOS / Android)
                    </option>
                    <option value="seo" className="bg-zinc-900 text-white">
                      SEO, AEO & Generative Engine Indexing
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                  >
                    Project brief & timeline
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Tell us about the product goals, target launch date, or current stack..."
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-butter focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-butter text-butter-foreground rounded-full py-4 text-sm font-semibold hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-70"
                >
                  <span>{loading ? 'Submitting brief...' : 'Submit project brief'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 SITE FOOTER                                */
/* -------------------------------------------------------------------------- */

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-16 text-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-border text-left">
          {/* Brand Bio */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group inline-block">
              <div className="w-8 h-8 rounded-xl bg-butter flex items-center justify-center transition-transform group-hover:scale-105 shadow-xs">
                <div className="w-3.5 h-3.5 rounded-[3px] bg-zinc-950" />
              </div>
              <span className="font-display font-semibold text-lg tracking-tight text-foreground">
                Nexora Studio
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              An AI-native product studio building next-generation web applications, autonomous copilots, and scalable SaaS infrastructure.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display font-medium text-sm text-foreground mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  AI Agents & RAG
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  SEO, AEO & GEO
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  SaaS Architecture
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-medium text-sm text-foreground mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li>
                <Link to="/why-us" className="hover:text-foreground transition-colors">
                  Why Nexora
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-foreground transition-colors">
                  Sprint Process
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-foreground transition-colors">
                  Client Outcomes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Schedule Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display font-medium text-sm text-foreground mb-4">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
              <li>
                <Link to="/pricing" className="hover:text-foreground transition-colors">
                  Sprint Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground transition-colors">
                  FAQ & Delivery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Book Architecture Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {currentYear} Nexora Studio Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">
              Security & SOC2
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
