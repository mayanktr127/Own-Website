import { Gauge, Users, Sparkles, ShieldCheck } from 'lucide-react';

const WHY_BENEFITS = [
  {
    icon: Gauge,
    title: 'Ship in weeks, not quarters',
    description:
      'Fixed-scope sprints with a working build in your hands every Friday.',
  },
  {
    icon: Users,
    title: 'One senior team, end to end',
    description:
      'Strategy, design, engineering and growth sit in the same room.',
  },
  {
    icon: Sparkles,
    title: 'AI woven into the product',
    description:
      "Automation isn't an add-on — it's designed into the workflow from day one.",
  },
  {
    icon: ShieldCheck,
    title: 'Built to scale safely',
    description:
      'Typed codebases, tests, observability and infra that survives growth.',
  },
];

const STATS_DATA = [
  { value: '120+', label: 'Products delivered' },
  { value: '89%', label: 'Clients who re-engage' },
  { value: '2.9k', label: 'Hours automated monthly' },
  { value: '14', label: 'Countries served' },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    progress: 'w-1/4',
    percent: '25%',
    description:
      'A focused workshop to map users, constraints and the metric that defines success.',
  },
  {
    step: '02',
    title: 'Design',
    progress: 'w-2/4',
    percent: '50%',
    description:
      'Clickable prototypes and a design system your engineers can build from immediately.',
  },
  {
    step: '03',
    title: 'Build',
    progress: 'w-3/4',
    percent: '75%',
    description:
      'Two-week sprints, live staging links and weekly demos so nothing is a surprise.',
  },
  {
    step: '04',
    title: 'Grow',
    progress: 'w-full',
    percent: '100%',
    description:
      'Launch, instrument, then improve with SEO, automation and performance marketing.',
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="bg-ink text-ink-foreground py-24 sm:py-32 scroll-mt-12 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {/* Section Header */}
        <div data-reveal className="max-w-2xl mb-16 text-left">
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-5">
            Key benefits
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-ink-foreground mb-6">
            Why teams choose <br />
            Nexora as their <br />
            build partner
          </h2>
          <p className="text-[15px] leading-relaxed text-ink-muted">
            We're built for teams that value speed, clarity and compounding
            results. You get senior operators who care about the metric behind
            the feature.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Column — 4 Benefits */}
          <div className="flex flex-col gap-4">
            {WHY_BENEFITS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  data-reveal
                  data-reveal-delay={`${idx * 70}`}
                  className="bg-ink-soft rounded-3xl p-6 border border-white/5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
                >
                  <div className="w-11 h-11 rounded-2xl bg-butter text-butter-foreground flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium tracking-tight text-ink-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-ink-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column — 2x2 Stats + Butter Banner */}
          <div data-reveal data-reveal-delay="150" className="flex flex-col gap-4">
            {/* 2x2 Stats Grid */}
            <div className="bg-ink-soft rounded-3xl p-8 border border-white/5 grid grid-cols-2 gap-8">
              {STATS_DATA.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-ink-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-ink-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Butter ROI Card */}
            <div className="bg-butter text-butter-foreground rounded-3xl p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight leading-snug mb-2">
                Average 3.4× return on the first year of engagement.
              </h3>
              <p className="text-xs sm:text-sm text-butter-foreground/80 font-medium">
                Measured across 40 client engagements, 2023–2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 scroll-mt-12 bg-background">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div data-reveal className="max-w-2xl mb-16 text-left">
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-block shadow-sm mb-5">
            How we work
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.06] tracking-tight text-foreground">
            A process that removes guesswork.
          </h2>
        </div>

        {/* 4 Process Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((item, index) => (
            <div
              key={item.step}
              data-reveal
              data-reveal-delay={`${index * 80}`}
              className="rounded-3xl border border-border bg-card p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div>
                {/* Step number & label */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-2xl font-semibold text-foreground/40">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {item.percent}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden mb-6">
                  <div
                    className={`h-full bg-butter rounded-full ${item.progress}`}
                  />
                </div>

                {/* Step Title */}
                <h3 className="font-display text-xl font-medium tracking-tight text-foreground mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
