import { Globe, Smartphone, Bot, Search, Megaphone, Layers, Check } from 'lucide-react';

const PARTNER_LOGOS = [
  'Vantage',
  'Greenish',
  'Glossy',
  'Ebooks',
  'Proline',
  'Flash',
  'Northwind',
];

const SERVICES_DATA = [
  {
    icon: Globe,
    title: 'Website Development',
    description:
      'Conversion-focused marketing sites and web platforms built on modern stacks — fast, accessible and easy for your team to edit.',
    bullets: [
      'Next-gen React stacks',
      'CMS + headless content',
      'Core Web Vitals 95+',
    ],
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Native-feel iOS, Android and cross-platform apps with clean design systems, offline support and analytics baked in.',
    bullets: [
      'React Native & Flutter',
      'Design systems',
      'Store launch support',
    ],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Agents, copilots and workflow automations that remove manual work from sales, support and operations.',
    bullets: [
      'Custom AI agents',
      'RAG knowledge bases',
      'Ops workflow automation',
    ],
  },
  {
    icon: Search,
    title: 'SEO, AEO & GEO',
    description:
      'Rank in search, answer engines and generative results. Technical foundations plus content built for how people ask today.',
    bullets: [
      'Technical SEO audits',
      'Answer-engine schema',
      'AI-visibility strategy',
    ],
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description:
      'Paid, lifecycle and content programs that turn traffic into pipeline — measured against revenue, not vanity metrics.',
    bullets: [
      'Performance ads',
      'Lifecycle email',
      'Attribution dashboards',
    ],
  },
  {
    icon: Layers,
    title: 'SaaS Development',
    description:
      'End-to-end product engineering: multi-tenant architecture, billing, dashboards and everything needed to ship a real SaaS.',
    bullets: [
      'MVP in 6–10 weeks',
      'Billing & auth',
      'Scalable cloud infra',
    ],
  },
];

export function LogoMarquee() {
  return (
    <section className="bg-ink py-10 overflow-hidden border-y border-white/5 relative select-none">
      <div className="max-w-6xl mx-auto px-5 mb-6 text-center">
        <p className="text-xs uppercase font-medium tracking-[0.28em] text-ink-muted">
          Trusted by
        </p>
      </div>

      {/* Marquee Track with masked gradient edges */}
      <div
        className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        aria-label="Client logos"
      >
        <div className="flex shrink-0 items-center gap-16 animate-marquee py-2">
          {PARTNER_LOGOS.map((logo, idx) => (
            <span
              key={`logo-1-${idx}`}
              className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-ink-muted/70 hover:text-ink-foreground transition-colors cursor-default whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 items-center gap-16 animate-marquee py-2"
          aria-hidden="true"
        >
          {PARTNER_LOGOS.map((logo, idx) => (
            <span
              key={`logo-2-${idx}`}
              className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-ink-muted/70 hover:text-ink-foreground transition-colors cursor-default whitespace-nowrap"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div data-reveal className="max-w-2xl mb-16 text-left">
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-5">
            Our services
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-foreground mb-6">
            Everything you need <br />
            to build, launch and <br />
            scale.
          </h2>
          <p className="text-[15px] leading-relaxed text-muted-foreground">
            Six disciplines, one accountable team. We plug into your roadmap and
            own delivery from first workshop to post-launch growth — no
            handoffs, no agency theatre.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES_DATA.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                data-reveal
                data-reveal-delay={`${index * 70}`}
                className="rounded-3xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft group"
              >
                <div>
                  {/* Icon Tile */}
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-foreground group-hover:bg-butter group-hover:text-butter-foreground transition-all duration-300 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-muted-foreground mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-4 border-t border-border/60 flex flex-col gap-2">
                  {service.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-2 text-xs text-foreground/80 font-medium"
                    >
                      <div className="w-4 h-4 rounded-full bg-butter/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-butter-foreground stroke-[2.5]" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
