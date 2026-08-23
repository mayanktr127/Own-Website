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
} from 'lucide-react';
import { toast } from 'sonner';

/* -------------------------------------------------------------------------- */
/*                                    WORK                                    */
/* -------------------------------------------------------------------------- */

const WORK_OUTCOMES = [
  {
    metric: '9 wks',
    category: 'SaaS Platform',
    client: 'Fleetly',
    outcome: 'MVP shipped in 9 weeks, $1.2M seed raised',
  },
  {
    metric: '-62%',
    category: 'AI Automation',
    client: 'Northwind Ops',
    outcome: 'Support resolution time cut by 62% with an AI agent',
  },
  {
    metric: '14×',
    category: 'SEO / AEO',
    client: 'Glossy Retail',
    outcome: 'Organic sessions from 12k to 178k in eight months',
  },
];

export function Work() {
  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div data-reveal className="max-w-2xl mb-16 text-left">
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-5">
            Recent outcomes
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-foreground mb-4">
            Recent outcomes
          </h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            A few engagements where design, engineering and growth compounded
            together.
          </p>
        </div>

        {/* 3 Ink Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {WORK_OUTCOMES.map((item, idx) => (
            <div
              key={item.client}
              data-reveal
              data-reveal-delay={`${idx * 80}`}
              className="rounded-3xl bg-ink text-ink-foreground p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border border-white/5 shadow-soft group"
            >
              <div>
                <div className="font-display text-5xl font-medium tracking-tight text-butter mb-6">
                  {item.metric}
                </div>
                <div className="text-xs uppercase tracking-wider text-ink-muted mb-2 font-medium">
                  {item.category}
                </div>
                <h3 className="font-display text-2xl font-medium text-ink-foreground mb-4">
                  {item.client}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-ink-muted pt-6 border-t border-white/10">
                {item.outcome}
              </p>
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
      'Nexora replaced three vendors. They shipped our platform, then kept improving it with automation we didn’t know we needed.',
    author: 'Amara Reyes',
    role: 'COO',
    company: 'Fleetly',
    avatar: 'AR',
  },
  {
    quote:
      'The clearest process we’ve worked with. Weekly demos meant zero surprises and a launch date we actually hit.',
    author: 'Karan Joshi',
    role: 'Founder',
    company: 'Northwind',
    avatar: 'KJ',
  },
  {
    quote:
      'Our organic traffic and AI-answer visibility both climbed within a quarter. The reporting is honest and revenue-linked.',
    author: 'Mia Sandoval',
    role: 'Head of Growth',
    company: 'Glossy',
    avatar: 'MS',
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div data-reveal className="max-w-2xl mb-16 text-left">
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-5">
            Client voices
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-foreground">
            Partnerships that keep going.
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <div
              key={item.author}
              data-reveal
              data-reveal-delay={`${idx * 80}`}
              className="rounded-3xl bg-card p-8 border border-border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <blockquote className="font-display text-lg font-light leading-snug text-foreground mb-8">
                “{item.quote}”
              </blockquote>

              <div className="flex items-center gap-3.5 pt-6 border-t border-border/60">
                <div className="w-10 h-10 rounded-full bg-ink text-ink-foreground text-xs font-semibold flex items-center justify-center shadow-xs">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground">
                    {item.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}, {item.company}
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
    name: 'Launch',
    price: '$4,900',
    cadence: 'per project',
    description:
      'For founders validating an idea with a sharp marketing site or landing system.',
    features: [
      'Up to 6 pages, custom design',
      'SEO foundations & analytics',
      'CMS handover + training',
      '2 weeks post-launch support',
    ],
    featured: false,
    cta: 'Get a proposal',
  },
  {
    name: 'Scale',
    price: '$9,800',
    cadence: 'per month',
    description:
      'A dedicated squad building your product and growth engine in parallel.',
    features: [
      'Full product or app build',
      'AI automation workflows',
      'SEO, AEO & GEO program',
      'Weekly demos & reporting',
      'Priority Slack channel',
    ],
    featured: true,
    badge: 'Most picked',
    cta: 'Get a proposal',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'tailored',
    description:
      'Multi-team delivery, compliance requirements and legacy modernisation.',
    features: [
      'Dedicated senior pod',
      'Security & compliance review',
      'Cloud architecture & SRE',
      'Quarterly roadmap planning',
    ],
    featured: false,
    cta: 'Get a proposal',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div data-reveal className="max-w-2xl mb-16 text-left">
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-5">
            Engagements
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-foreground">
            Transparent ways to work with us.
          </h2>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={plan.name}
              data-reveal
              data-reveal-delay={`${idx * 80}`}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 relative ${
                plan.featured
                  ? 'bg-ink text-ink-foreground border border-white/10 shadow-float'
                  : 'bg-card text-foreground border border-border hover:shadow-soft'
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
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <span
                    className={`font-display text-4xl sm:text-5xl font-medium tracking-tight ${
                      plan.featured ? 'text-butter' : 'text-foreground'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-xs ml-2 ${
                      plan.featured ? 'text-ink-muted' : 'text-muted-foreground'
                    }`}
                  >
                    {plan.cadence}
                  </span>
                </div>

                <p
                  className={`text-sm leading-relaxed mb-8 ${
                    plan.featured ? 'text-ink-muted' : 'text-muted-foreground'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <div
                  className={`pt-6 border-t flex flex-col gap-3 mb-8 ${
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
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className={`w-full rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-200 block ${
                  plan.featured
                    ? 'bg-butter text-butter-foreground hover:scale-[1.02] shadow-sm'
                    : 'bg-primary text-primary-foreground hover:scale-[1.02]'
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
    q: 'How quickly can we start?',
    a: 'Most engagements kick off within 7–10 days of the discovery call. Urgent builds can start sooner when a squad is free.',
  },
  {
    q: 'Do you work with existing codebases?',
    a: 'Yes. We audit what you have, stabilise the critical paths, then improve incrementally rather than forcing a rewrite.',
  },
  {
    q: 'What does AI automation actually mean here?',
    a: 'Practical systems: support agents trained on your docs, lead qualification, reporting pipelines and internal copilots that remove repetitive work.',
  },
  {
    q: 'How is SEO different from AEO and GEO?',
    a: 'SEO targets classic search rankings, AEO optimises for answer engines and featured responses, and GEO makes your brand citable inside generative AI results. We run all three together.',
  },
  {
    q: 'Who owns the code and assets?',
    a: 'You do — completely. Repos, design files and infrastructure are transferred to your accounts at handover.',
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div data-reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-5">
            FAQ
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-foreground">
            Questions, answered.
          </h2>
        </div>

        {/* Accordion Container */}
        <div
          data-reveal
          className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm divide-y divide-border"
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className="py-5 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group focus:outline-hidden"
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

                {/* CSS Grid Accordion Trick */}
                <div
                  className="grid transition-all duration-400 ease-out"
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
      toast.success('Project brief sent! We will reply within 2 working days.', {
        description: 'Thank you for reaching out to Nexora Studio.',
      });
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-5">
        <div
          data-reveal
          className="rounded-[32px] bg-ink text-ink-foreground p-8 sm:p-14 relative overflow-hidden grain border border-white/5 shadow-float"
        >
          {/* Mint Aurora glow blob top-right */}
          <div
            className="absolute -right-20 -top-20 w-96 h-96 bg-mint/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start relative z-10">
            {/* Left Info */}
            <div className="text-left">
              <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-6">
                Start a conversation
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-ink-foreground mb-6">
                Let's build something <br />
                worth scaling.
              </h2>
              <p className="text-[15px] leading-relaxed text-ink-muted max-w-md mb-10">
                Tell us about the product, the timeline and the metric you're
                chasing. You'll get a scoped plan and a fixed quote within two
                working days.
              </p>

              {/* Contact direct pills */}
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:hello@nexora.studio"
                  className="flex items-center gap-3.5 text-sm text-ink-muted hover:text-ink-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-ink-soft text-butter flex items-center justify-center shrink-0 border border-white/5 group-hover:border-butter/30 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>hello@nexora.studio</span>
                </a>
                <a
                  href="tel:+14155550148"
                  className="flex items-center gap-3.5 text-sm text-ink-muted hover:text-ink-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-ink-soft text-butter flex items-center justify-center shrink-0 border border-white/5 group-hover:border-butter/30 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+1 (415) 555-0148</span>
                </a>
                <div className="flex items-center gap-3.5 text-sm text-ink-muted">
                  <div className="w-10 h-10 rounded-2xl bg-ink-soft text-butter flex items-center justify-center shrink-0 border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Remote-first · Austin · Bengaluru</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-ink-soft rounded-3xl p-6 sm:p-8 border border-white/5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-wider text-ink-muted mb-2 font-medium"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-2xl bg-transparent border border-white/10 px-4 py-3 text-sm text-ink-foreground placeholder:text-white/30 focus:border-butter focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-ink-muted mb-2 font-medium"
                  >
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-2xl bg-transparent border border-white/10 px-4 py-3 text-sm text-ink-foreground placeholder:text-white/30 focus:border-butter focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-wider text-ink-muted mb-2 font-medium"
                  >
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl bg-ink-soft border border-white/10 px-4 py-3 text-sm text-ink-foreground focus:border-butter focus:outline-hidden transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-ink text-ink-muted">
                      Select primary discipline
                    </option>
                    <option value="website" className="bg-ink text-ink-foreground">
                      Website Development
                    </option>
                    <option value="app" className="bg-ink text-ink-foreground">
                      App Development
                    </option>
                    <option value="ai" className="bg-ink text-ink-foreground">
                      AI Automation
                    </option>
                    <option value="seo" className="bg-ink text-ink-foreground">
                      SEO / AEO / GEO
                    </option>
                    <option value="marketing" className="bg-ink text-ink-foreground">
                      Digital Marketing
                    </option>
                    <option value="saas" className="bg-ink text-ink-foreground">
                      SaaS Development
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider text-ink-muted mb-2 font-medium"
                  >
                    A little about the project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    required
                    placeholder="Tell us about the goal, timelines, or existing stack..."
                    className="w-full rounded-2xl bg-transparent border border-white/10 px-4 py-3 text-sm text-ink-foreground placeholder:text-white/30 focus:border-butter focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-butter text-butter-foreground rounded-full py-4 text-sm font-semibold hover:scale-[1.02] transition-transform duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                >
                  <span>{loading ? 'Sending brief...' : 'Send project brief'}</span>
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
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-border text-left">
          {/* Bio / Brand (2 cols) */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group inline-block">
              <div className="w-7 h-7 rounded-lg bg-butter flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-3 h-3 rounded-[3px] bg-ink" />
              </div>
              <span className="font-display font-medium text-lg tracking-tight text-foreground">
                Nexora
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-sm">
              A SaaS development studio building websites, apps, AI automation
              and growth systems for ambitious teams.
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
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  SEO, AEO & GEO
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground transition-colors">
                  SaaS Development
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
                  Why Us
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-foreground transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-foreground transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Contact
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
                <Link to="/work" className="hover:text-foreground transition-colors">
                  Case studies
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-foreground transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-foreground transition-colors">
                  FAQ & Support
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground transition-colors">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {currentYear} Nexora Studio. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
