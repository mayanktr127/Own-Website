import { ArrowRight, Bot, Play, TrendingUp } from 'lucide-react';

const BAR_HEIGHTS = [42, 58, 36, 74, 51, 88, 47, 63, 39, 70];

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Aurora glow background */}
      <div
        className="aurora absolute inset-x-0 -top-24 h-[620px] opacity-90 blur-[2px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
        {/* Left Column — Value Prop */}
        <div data-reveal className="flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="bg-butter text-butter-foreground rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] inline-flex items-center gap-2 shadow-sm mb-6">
            <Bot className="w-3.5 h-3.5" />
            <span>AI-native product studio</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-[2.6rem] leading-[1.03] sm:text-6xl font-medium tracking-tight text-foreground mb-6">
            We build the software <br />
            that grows your <br />
            business.
          </h1>

          {/* Paragraph */}
          <p className="text-[15px] leading-relaxed text-muted-foreground max-w-xl mb-8">
            Nexora is a SaaS development studio for founders and scaling teams.
            Websites, mobile apps, AI automation and search-first marketing —
            designed, engineered and measured under one roof.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a
              href="#contact"
              className="bg-ink text-ink-foreground rounded-full px-6 py-3.5 text-sm font-medium hover:scale-[1.03] transition-transform duration-200 inline-flex items-center gap-2 group shadow-sm"
            >
              <span>Start your project</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="bg-card text-foreground border border-border rounded-full px-6 py-3.5 text-sm font-medium hover:scale-[1.02] transition-transform duration-200 inline-flex items-center gap-2 shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>See our work</span>
            </a>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-ink text-ink-foreground text-[11px] font-semibold flex items-center justify-center border-2 border-background shadow-xs">
                NX
              </div>
              <div className="w-8 h-8 rounded-full bg-ink text-ink-foreground text-[11px] font-semibold flex items-center justify-center border-2 border-background shadow-xs">
                AR
              </div>
              <div className="w-8 h-8 rounded-full bg-ink text-ink-foreground text-[11px] font-semibold flex items-center justify-center border-2 border-background shadow-xs">
                KJ
              </div>
              <div className="w-8 h-8 rounded-full bg-ink text-ink-foreground text-[11px] font-semibold flex items-center justify-center border-2 border-background shadow-xs">
                MS
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                120+ launches
              </div>
              <div className="text-xs text-muted-foreground">
                Trusted by startups and enterprise teams across 14 countries.
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — MacBook Device Frame with Dashboard Mock */}
        <div
          data-reveal
          data-reveal-delay="150"
          className="overflow-hidden lg:-mr-24 xl:-mr-40 relative flex justify-center lg:justify-end"
          style={{ maxHeight: '440px' }}
        >
          <div className="w-full max-w-[620px] lg:[transform:perspective(1800px)_rotateY(-7deg)_rotateX(2deg)] transition-transform duration-500">
            {/* Device Bezel */}
            <div className="device-bezel rounded-[26px] p-[10px] pb-[14px] sm:p-3 sm:pb-4 shadow-2xl relative">
              {/* Top Notch & Camera */}
              <div className="h-[18px] w-[104px] sm:h-5 sm:w-[128px] rounded-b-[10px] bg-ink mx-auto flex items-center justify-center relative z-20 shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-black/80 ring-1 ring-white/10" />
              </div>

              {/* Inner Screen */}
              <div className="device-glass rounded-[18px] bg-card text-foreground overflow-hidden relative shadow-[0_0_90px_20px_oklch(0_0_0/0.10)_inset] border border-black/10">
                {/* Sheen reflection */}
                <div
                  className="device-sheen absolute inset-0 pointer-events-none z-30"
                  aria-hidden="true"
                />

                {/* Dashboard Mock Content */}
                <div className="p-4 sm:p-5 text-left select-none relative z-10">
                  {/* Console Header */}
                  <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-md bg-ink flex items-center justify-center">
                        <div className="w-2 h-2 rounded-[2px] bg-butter" />
                      </div>
                      <span className="font-display font-medium text-xs sm:text-sm text-foreground">
                        Nexora Console
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 bg-secondary/80 rounded-full p-0.5 text-[11px]">
                      <span className="bg-ink text-ink-foreground px-2.5 py-0.5 rounded-full font-medium shadow-xs">
                        Overview
                      </span>
                      <span className="text-muted-foreground px-2 py-0.5">
                        Pipeline
                      </span>
                      <span className="text-muted-foreground px-2 py-0.5 hidden sm:inline">
                        Automations
                      </span>
                    </div>
                  </div>

                  {/* Greeting */}
                  <div className="mb-4">
                    <h3 className="font-display text-base sm:text-lg font-medium text-foreground">
                      Good morning, team.
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Delivery, growth and automation — one live view.
                    </p>
                  </div>

                  {/* Three Stat Cards */}
                  <div className="grid grid-cols-3 gap-2.5 mb-4">
                    {/* Stat 1 */}
                    <div className="bg-secondary/70 rounded-2xl p-3 border border-border/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] sm:text-[11px] text-muted-foreground">
                          Projects shipped
                        </span>
                        <span className="text-[10px] font-medium text-emerald-600 inline-flex items-center">
                          +4.4%
                        </span>
                      </div>
                      <div className="font-display text-lg sm:text-xl font-semibold text-foreground">
                        128
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-secondary/70 rounded-2xl p-3 border border-border/50">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] sm:text-[11px] text-muted-foreground">
                          Organic clicks
                        </span>
                        <span className="text-[10px] font-medium text-emerald-600 inline-flex items-center">
                          +12.1%
                        </span>
                      </div>
                      <div className="font-display text-lg sm:text-xl font-semibold text-foreground">
                        178,125
                      </div>
                    </div>

                    {/* Stat 3 (Butter Highlight) */}
                    <div className="bg-butter text-butter-foreground rounded-2xl p-3 shadow-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] sm:text-[11px] font-medium opacity-80">
                          Hours automated
                        </span>
                        <span className="text-[10px] font-bold text-butter-foreground">
                          +9.8%
                        </span>
                      </div>
                      <div className="font-display text-lg sm:text-xl font-bold">
                        2,940
                      </div>
                    </div>
                  </div>

                  {/* Pipeline Velocity Panel with 10-bar chart */}
                  <div className="bg-secondary/50 rounded-2xl p-3.5 border border-border/60">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs font-medium text-foreground">
                          Pipeline velocity
                        </span>
                      </div>
                      <span className="bg-emerald-500/10 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-emerald-500/20">
                        +$72,000
                      </span>
                    </div>

                    {/* Bar chart */}
                    <div className="h-16 flex items-end justify-between gap-1 sm:gap-2 px-1">
                      {BAR_HEIGHTS.map((height, idx) => (
                        <div
                          key={idx}
                          className="flex-1 flex flex-col items-center gap-1 group/bar"
                        >
                          <div
                            className={`w-full rounded-t-md transition-all duration-300 ${
                              idx === 5 ? 'bg-butter shadow-xs' : 'bg-muted-foreground/30'
                            }`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
