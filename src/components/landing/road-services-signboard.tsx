import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Globe, Bot, Layers, Smartphone, Search, Megaphone, Check, Sparkles } from 'lucide-react';

export interface ServiceMilestone {
  mile: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  metrics: string;
  icon: typeof Globe;
  link: string;
  timeRange: string;
}

export const MILESTONE_SERVICES: ServiceMilestone[] = [
  {
    mile: '01',
    category: 'Web Platforms',
    title: 'Website Development',
    description: 'High-converting marketing platforms & headless architectures on Next.js 15 with sub-second page loads.',
    badge: 'Core Web Vitals 98+',
    metrics: 'Next.js 15 · Sanity · Tailored Motion',
    icon: Globe,
    link: '#services',
    timeRange: '0.0s – 1.8s · Daylight',
  },
  {
    mile: '02',
    category: 'Autonomous Intelligence',
    title: 'AI Agents & Copilots',
    description: 'Multi-agent reasoning swarms, hybrid vector RAG knowledge bases, and autonomous customer workflows.',
    badge: 'Sub-14ms Latency',
    metrics: 'Claude 3.5 · LangGraph · Vector DB',
    icon: Bot,
    link: '#services',
    timeRange: '1.8s – 3.6s · AI Sprints',
  },
  {
    mile: '03',
    category: 'Product Engineering',
    title: 'SaaS Platform Engineering',
    description: 'End-to-end multi-tenant product development with Stripe billing, authentication, and serverless edge scaling.',
    badge: 'MVP in 4–8 Weeks',
    metrics: 'Postgres · Edge Cluster · SOC2 Prep',
    icon: Layers,
    link: '#services',
    timeRange: '3.6s – 5.4s · Scale Ops',
  },
  {
    mile: '04',
    category: 'Mobile Systems',
    title: 'iOS & Android App Systems',
    description: 'Native-feel cross-platform mobile apps with 60fps gesture physics, unified design tokens, and offline sync.',
    badge: '60 FPS Gesture Physics',
    metrics: 'React Native · Expo · App Store Ready',
    icon: Smartphone,
    link: '#services',
    timeRange: '5.4s – 7.2s · Mobile Hub',
  },
  {
    mile: '05',
    category: 'AI & Search Indexing',
    title: 'SEO, AEO & GEO Program',
    description: 'Dominate traditional Google search while securing verified citations in AI answer engines (ChatGPT, Perplexity).',
    badge: '#1 Search & LLM Citations',
    metrics: 'Entity Schema · LLM Citations · Analytics',
    icon: Search,
    link: '#services',
    timeRange: '7.2s – 8.8s · Sunset Index',
  },
  {
    mile: '06',
    category: 'Growth Architecture',
    title: 'Performance Marketing',
    description: 'Paid acquisition, lifecycle automation funnels, and revenue attribution engineered for compounding growth.',
    badge: '3.6× Average First-Year ROI',
    metrics: 'Attribution Dashboards · Ad Creative',
    icon: Megaphone,
    link: '#services',
    timeRange: '8.8s – 10.0s · Night Shift',
  },
];

interface RoadServicesSignboardProps {
  controlledIdx?: number;
  videoTime?: number;
  onSelectMilestone?: (idx: number) => void;
}

export function RoadServicesSignboard({
  controlledIdx,
  videoTime = 0,
  onSelectMilestone,
}: RoadServicesSignboardProps) {
  const [internalIdx, setInternalIdx] = useState(0);

  // Use controlled index if provided by hero video timeline, otherwise internal
  const currentIdx = controlledIdx !== undefined ? controlledIdx : internalIdx;
  const current = MILESTONE_SERVICES[currentIdx] || MILESTONE_SERVICES[0];
  const IconComponent = current.icon;

  const handleSelect = (idx: number) => {
    if (onSelectMilestone) {
      onSelectMilestone(idx);
    } else {
      setInternalIdx(idx);
    }
  };

  const nextMilestone = () => {
    const next = (currentIdx + 1) % MILESTONE_SERVICES.length;
    handleSelect(next);
  };

  const prevMilestone = () => {
    const prev = (currentIdx - 1 + MILESTONE_SERVICES.length) % MILESTONE_SERVICES.length;
    handleSelect(prev);
  };

  return (
    <div className="relative w-full max-w-[500px] select-none">
      {/* Architectural Wooden & Glass Milestone Signboard (Positioned on the road path) */}
      <div className="rounded-[36px] bg-white/95 backdrop-blur-2xl text-zinc-950 p-6 sm:p-7 shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-black/10 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
        {/* Top Header: Road Milestone Marker & Category */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-zinc-950 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
              {current.mile}
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <span>Milestone {current.mile} of 06</span>
                <span className="text-zinc-300">·</span>
                <span className="text-emerald-700 font-semibold">{current.timeRange}</span>
              </div>
              <div className="text-xs font-semibold text-zinc-900">
                {current.category}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={prevMilestone}
              className="p-1.5 rounded-full border border-zinc-200 hover:bg-zinc-100 text-zinc-700 transition-colors cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextMilestone}
              className="p-1.5 rounded-full border border-zinc-200 hover:bg-zinc-100 text-zinc-700 transition-colors cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Signboard Body */}
        <div className="mb-5 text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-medium mb-3">
            <Sparkles className="w-3 h-3" />
            <span>{current.badge}</span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 mb-2 flex items-center gap-2.5">
            <IconComponent className="w-6 h-6 text-zinc-950 shrink-0" />
            <span>{current.title}</span>
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-4">
            {current.description}
          </p>

          {/* Technical Spec Pill */}
          <div className="px-3.5 py-2 rounded-xl bg-zinc-100/90 text-zinc-700 text-xs font-mono flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
            <span>{current.metrics}</span>
          </div>
        </div>

        {/* Milestone Steps Bar & Road Progress */}
        <div className="pt-4 border-t border-zinc-200 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            {/* 6 Step Pills */}
            <div className="flex items-center gap-1.5">
              {MILESTONE_SERVICES.map((item, idx) => (
                <button
                  key={item.mile}
                  onClick={() => handleSelect(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIdx === idx
                      ? 'w-6 bg-zinc-950'
                      : 'w-2 bg-zinc-300 hover:bg-zinc-500'
                  }`}
                  aria-label={`Jump to Milestone ${item.mile}`}
                />
              ))}
            </div>

            <a
              href={current.link}
              className="text-xs font-bold tracking-wider uppercase text-zinc-950 hover:text-black underline underline-offset-4 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Explore Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Video Timeline Scrubber Line (0s -> 10s) */}
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>Video Time: {videoTime.toFixed(1)}s / 10.0s</span>
            <span>{Math.round((videoTime / 10) * 100)}% Scrubbed</span>
          </div>
          <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-indigo-600 rounded-full transition-all duration-100"
              style={{ width: `${Math.min(Math.max((videoTime / 10) * 100, 4), 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
