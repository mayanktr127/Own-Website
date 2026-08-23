import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, Play, Pause, RotateCcw, Sun, Zap, Sunset, Moon } from 'lucide-react';
import { RoadServicesSignboard, MILESTONE_SERVICES } from './road-services-signboard';
import { SystemTourModal } from './system-tour-modal';
import { SmoothVideoCanvas } from './smooth-video-canvas';

const TRUST_LOGOS = [
  'Meridian',
  'STELLER',
  'Luminar',
  'OVERLAND',
  'Kinetic',
];

const SCROLL_PHASES = [
  { time: 0, label: '0s · Day Start', phase: 'Daylight Architecture', icon: Sun, scrollPercent: 0 },
  { time: 3, label: '3s · AI Build', phase: 'Multi-Agent Sprints', icon: Zap, scrollPercent: 0.33 },
  { time: 6, label: '6s · Sunset Scale', phase: 'SaaS Platform Scale', icon: Sunset, scrollPercent: 0.66 },
  { time: 10, label: '10s · Night Ops', phase: 'Global 24/7 Autonomy', icon: Moon, scrollPercent: 1.0 },
];

export function Hero() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [targetTime, setTargetTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(10);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Scrubber Listener (10s total video, ~3s per major scroll milestone)
  useEffect(() => {
    const handleScroll = () => {
      if (isPlayingAuto) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.clientHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
      
      const duration = videoDuration || 10;
      const target = progress * duration;
      setTargetTime(target);

      // Sync milestone index (0 to 5) across 10 seconds smoothly
      const milestoneIndex = Math.min(
        Math.floor(progress * MILESTONE_SERVICES.length),
        MILESTONE_SERVICES.length - 1
      );
      setActiveMilestoneIdx(milestoneIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlayingAuto, videoDuration]);

  // Jump to specific time/scroll position
  const jumpToTime = (targetSeconds: number) => {
    const container = containerRef.current;
    if (!container) return;

    const duration = videoDuration || 10;
    const progress = targetSeconds / duration;
    const scrollableHeight = container.clientHeight - window.innerHeight;
    const targetScrollY = container.offsetTop + progress * scrollableHeight;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
  };

  const handleSelectMilestone = (idx: number) => {
    setActiveMilestoneIdx(idx);
    const duration = videoDuration || 10;
    const targetSec = (idx / (MILESTONE_SERVICES.length - 1)) * duration;
    jumpToTime(targetSec);
  };

  const toggleAutoPlay = () => {
    setIsPlayingAuto(!isPlayingAuto);
  };

  const handleTimeUpdate = useCallback((time: number) => {
    setVideoTime(time);
  }, []);

  const handleDuration = useCallback((dur: number) => {
    setVideoDuration(dur);
  }, []);

  // Determine current active phase name
  const currentPhase =
    videoTime < 3.0
      ? '0s – 3s · Daylight Architecture'
      : videoTime < 6.0
      ? '3s – 6s · Multi-Agent Build'
      : videoTime < 9.0
      ? '6s – 9s · Platform Scale'
      : '9s – 10s · 24/7 Night Ops';

  return (
    <>
      {/* 320vh Scroll Runway for silky smooth 10s video scrubbing */}
      <section
        ref={containerRef}
        className="relative h-[320vh] w-full"
      >
        {/* Sticky 100vh Viewport */}
        <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12">
          {/* High-Performance 60FPS Smooth Video Canvas with Dual-Buffer Crossfade */}
          <SmoothVideoCanvas
            videoSrc="/assets/People_working_during_day_night_202608232052.mp4"
            posterSrc="/assets/greenfield-hero.jpg"
            targetTime={targetTime}
            isPlayingAuto={isPlayingAuto}
            onTimeUpdate={handleTimeUpdate}
            onDuration={handleDuration}
          />

          {/* Top Sky Area: Exact Reference Typography & Logo Ribbon */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex flex-col items-start text-left pt-2 sm:pt-4">
            {/* Pill Eyebrow with Live Scroll-Time Phase Indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-zinc-950 text-xs font-medium mb-4 shadow-sm transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px] font-mono">
                {currentPhase}
              </span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-700">Scroll to advance video</span>
              <ArrowRight className="w-3 h-3 text-zinc-600" />
            </div>

            {/* Main Headline (Exact Sans Grotesque style from reference image) */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-medium leading-[1.06] tracking-tight text-zinc-950 mb-6 drop-shadow-xs max-w-4xl">
              One unified system to build, <br />
              test, ship, and scale software
            </h1>

            {/* Floating Logo Strip (Exact reference layout floating in sky) */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-12 opacity-85 mb-4">
              {TRUST_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="font-display font-bold text-sm sm:text-base tracking-widest text-zinc-800 uppercase hover:text-zinc-950 transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>

          {/* Lower Ground Area: Road Milestone Signboard positioned on the road */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex flex-col lg:flex-row items-end justify-between gap-6 my-auto">
            {/* Left CTA & Blueprint Trigger */}
            <div className="flex flex-wrap items-center gap-3 bg-white/80 backdrop-blur-md p-2 rounded-full border border-black/10 shadow-md">
              <a
                href="#contact"
                className="bg-zinc-950 hover:bg-black text-white rounded-full px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Start Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsTourOpen(true)}
                className="bg-white hover:bg-zinc-100 text-zinc-950 rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>System Blueprint</span>
              </button>
            </div>

            {/* Right: Synchronized Road Services Signboard */}
            <div data-reveal className="w-full max-w-[480px]">
              <RoadServicesSignboard
                controlledIdx={activeMilestoneIdx}
                videoTime={videoTime}
                onSelectMilestone={handleSelectMilestone}
              />
            </div>
          </div>

          {/* Bottom Grounded 10-Second Video Scrubber HUD */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full mt-4">
            <div className="rounded-[24px] bg-white/90 backdrop-blur-xl border border-black/10 px-5 py-3 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-900 text-xs">
              {/* Playhead Time & Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleAutoPlay}
                  className="w-8 h-8 rounded-xl bg-zinc-950 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                  aria-label={isPlayingAuto ? 'Pause video' : 'Play video continuous'}
                >
                  {isPlayingAuto ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                </button>

                <div className="text-left font-mono">
                  <div className="font-bold text-zinc-950 text-xs flex items-center gap-1.5">
                    <span>⏱️ {videoTime.toFixed(1)}s / 10.0s</span>
                    <span className="text-[10px] text-zinc-500 font-normal">({Math.round((videoTime / 10) * 100)}% Smooth Scroll Scrubbed)</span>
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    {isPlayingAuto ? 'Continuous 60fps Playback' : 'Scroll down smoothly to scrub daylight -> night'}
                  </div>
                </div>
              </div>

              {/* 3-Second Scroll Milestone Quick Jump Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {SCROLL_PHASES.map((phase) => {
                  const Icon = phase.icon;
                  const isActive =
                    (phase.time === 0 && videoTime < 3.0) ||
                    (phase.time === 3 && videoTime >= 3.0 && videoTime < 6.0) ||
                    (phase.time === 6 && videoTime >= 6.0 && videoTime < 9.0) ||
                    (phase.time === 10 && videoTime >= 9.0);

                  return (
                    <button
                      key={phase.label}
                      type="button"
                      onClick={() => jumpToTime(phase.time)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-medium inline-flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-zinc-950 text-white shadow-xs scale-102 font-semibold'
                          : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{phase.label}</span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => jumpToTime(0)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
                  title="Reset to 0s"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive System Tour Modal */}
      <SystemTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
      />
    </>
  );
}
