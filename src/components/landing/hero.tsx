import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, Play, Pause, RotateCcw, Sun, Zap, Sunset, Moon, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RoadServicesSignboard, MILESTONE_SERVICES } from './road-services-signboard';
import { SystemTourModal } from './system-tour-modal';
import { useSmoothScroll } from '../../lib/lenis-scroll';

gsap.registerPlugin(ScrollTrigger);

// Pixels of scroll distance allocated per second of video.
// At 120 px/s for a 10s video, total scroll runway is 1200px (approx 1.5 - 2 viewports)
const PIXELS_PER_SECOND = 130;

const TRUST_LOGOS = [
  'Meridian',
  'STELLER',
  'Luminar',
  'OVERLAND',
  'Kinetic',
];

const SCROLL_PHASES = [
  { time: 0, label: '0s · Day Start', phase: 'Daylight Architecture', icon: Sun },
  { time: 3, label: '3s · AI Build', phase: 'Multi-Agent Sprints', icon: Zap },
  { time: 6, label: '6s · Sunset Scale', phase: 'SaaS Platform Scale', icon: Sunset },
  { time: 9.5, label: '10s · Night Ops', phase: 'Global 24/7 Autonomy', icon: Moon },
];

export function Hero() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [videoTime, setVideoTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(10);
  const [isPlayingAuto, setIsPlayingAuto] = useState(false);
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isSafariUnlockedRef = useRef(false);
  const autoPlayAnimRef = useRef<number | null>(null);

  const { scrollTo } = useSmoothScroll();

  // 1. Detect Prefers Reduced Motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // 2. iOS Safari Interaction Unlock:
  // On first user interaction, perform a muted play() & pause() so Safari allows arbitrary frame seeking
  useEffect(() => {
    const unlockSafari = () => {
      if (isSafariUnlockedRef.current) return;
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              video.pause();
              isSafariUnlockedRef.current = true;
            })
            .catch(() => {
              // Ignore unlock error
            });
        }
      }
    };

    window.addEventListener('pointerdown', unlockSafari, { passive: true, once: true });
    window.addEventListener('touchstart', unlockSafari, { passive: true, once: true });
    window.addEventListener('scroll', unlockSafari, { passive: true, once: true });
    window.addEventListener('keydown', unlockSafari, { passive: true, once: true });

    return () => {
      window.removeEventListener('pointerdown', unlockSafari);
      window.removeEventListener('touchstart', unlockSafari);
      window.removeEventListener('scroll', unlockSafari);
      window.removeEventListener('keydown', unlockSafari);
    };
  }, []);

  // 3. GSAP + ScrollTrigger Scrub Bridge
  useEffect(() => {
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const pinContainer = pinContainerRef.current;
    const video = videoRef.current;
    if (!section || !pinContainer || !video) return;

    const dur = videoDuration && !isNaN(videoDuration) && videoDuration > 0 ? videoDuration : 10;
    const totalScrollDistance = dur * PIXELS_PER_SECOND;

    // Proxy object tweened by ScrollTrigger - never directly write raw scroll listeners
    const proxy = { t: 0 };

    const ctx = gsap.context(() => {
      gsap.to(proxy, {
        t: dur,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalScrollDistance}`,
          pin: pinContainer,
          pinSpacing: true,
          scrub: 1.0, // Numeric scrub (1.0s easing) for silky smooth inertia
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (isPlayingAuto) return;
            const curTime = Math.min(Math.max(self.progress * dur, 0), dur);
            setVideoTime(curTime);

            // Sync milestone index (0 to 5)
            const milestoneIndex = Math.min(
              Math.floor(self.progress * MILESTONE_SERVICES.length),
              MILESTONE_SERVICES.length - 1
            );
            setActiveMilestoneIdx(milestoneIndex);
          },
        },
        onUpdate: () => {
          if (isPlayingAuto) return;
          // Apply proxy time directly to video element frame-by-frame
          if (video.readyState >= 2 && !isNaN(proxy.t) && isFinite(proxy.t)) {
            video.currentTime = Math.min(Math.max(proxy.t, 0), dur);
          }
        },
      });
    }, section);

    // Refresh ScrollTrigger after initializing
    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
  }, [videoDuration, prefersReducedMotion, isPlayingAuto]);

  // 4. Handle Video Metadata Loaded & Error Fallbacks
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration && !isNaN(video.duration) && isFinite(video.duration)) {
      setVideoDuration(video.duration);
    }
    setVideoLoaded(true);
    // Refresh ScrollTrigger once metadata (duration) is known
    ScrollTrigger.refresh();
  };

  const handleVideoError = () => {
    setVideoError(true);
  };

  // 5. Jump to specific timestamp / scroll position
  const jumpToTime = useCallback(
    (targetSeconds: number) => {
      const section = sectionRef.current;
      if (!section) return;

      const dur = videoDuration || 10;
      const progress = Math.min(Math.max(targetSeconds / dur, 0), 1);
      const totalScrollDistance = dur * PIXELS_PER_SECOND;
      const targetScrollY = section.offsetTop + progress * totalScrollDistance;

      scrollTo(targetScrollY, { duration: 1.0 });
    },
    [videoDuration, scrollTo]
  );

  const handleSelectMilestone = (idx: number) => {
    setActiveMilestoneIdx(idx);
    const dur = videoDuration || 10;
    const targetSec = (idx / (MILESTONE_SERVICES.length - 1)) * dur;
    jumpToTime(targetSec);
  };

  // 6. Optional Autoplay Preview Loop
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlayingAuto) {
      video.playbackRate = 1.0;
      video.play().catch(() => {});

      const trackProgress = () => {
        if (!video.paused) {
          setVideoTime(video.currentTime);
          const dur = videoDuration || 10;
          const progress = video.currentTime / dur;
          const milestoneIndex = Math.min(
            Math.floor(progress * MILESTONE_SERVICES.length),
            MILESTONE_SERVICES.length - 1
          );
          setActiveMilestoneIdx(milestoneIndex);
        }
        autoPlayAnimRef.current = requestAnimationFrame(trackProgress);
      };
      autoPlayAnimRef.current = requestAnimationFrame(trackProgress);
    } else {
      video.pause();
      if (autoPlayAnimRef.current) {
        cancelAnimationFrame(autoPlayAnimRef.current);
      }
    }

    return () => {
      if (autoPlayAnimRef.current) cancelAnimationFrame(autoPlayAnimRef.current);
    };
  }, [isPlayingAuto, videoDuration]);

  // Determine current active milestone and phase name
  const currentMilestone = MILESTONE_SERVICES[activeMilestoneIdx] || MILESTONE_SERVICES[0];
  const currentPhase = `Milestone ${currentMilestone.mile} · ${currentMilestone.timeRange}`;

  return (
    <>
      {/* Scroll Runway Section (Derived directly from video duration * PIXELS_PER_SECOND) */}
      <section
        ref={sectionRef}
        id="hero-track"
        className="relative w-full"
        style={{
          // Allocate exact scroll distance so pin releases with zero dead zone
          minHeight: prefersReducedMotion ? '100dvh' : `calc(100dvh + ${(videoDuration || 10) * PIXELS_PER_SECOND}px)`,
        }}
      >
        {/* Pinned 100vh Viewport Container */}
        <div
          ref={pinContainerRef}
          className="w-full h-[100dvh] overflow-hidden flex flex-col justify-between pt-24 pb-6 sm:pt-28 sm:pb-8 relative will-change-transform transform-gpu"
        >
          {/* Background Video Player with Frame-by-Frame Scrubbing */}
          <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none bg-zinc-950">
            {/* Fallback Poster Image */}
            <img
              src="/assets/hero-scrub-poster.jpg"
              alt="Nexora Architecture Visual"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                videoLoaded && !videoError ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Video Element for Hardware-Decoded Frame Scrubbing */}
            {!videoError && (
              <video
                ref={videoRef}
                src="/assets/hero-scrub.mp4"
                poster="/assets/hero-scrub-poster.jpg"
                playsInline
                muted
                preload="auto"
                onLoadedMetadata={handleLoadedMetadata}
                onError={handleVideoError}
                className={`absolute inset-0 w-full h-full object-cover object-center brightness-[0.96] contrast-[1.03] transform-gpu will-change-transform transition-opacity duration-500 ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
            )}

            {/* Subtle Gradient Overlays for High-Contrast Readable Typography */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Top Sky Area: Exact Reference Typography & Logo Ribbon */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex flex-col items-start text-left pt-2 sm:pt-4">
            {/* Pill Eyebrow with Live Scroll-Time Phase Indicator */}
            <button
              type="button"
              onClick={() => handleSelectMilestone((activeMilestoneIdx + 1) % MILESTONE_SERVICES.length)}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-black/10 text-zinc-950 text-xs font-medium mb-3 sm:mb-4 shadow-sm transition-all duration-300 cursor-pointer group"
              title="Click to advance to next milestone"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[11px] font-mono">
                {currentPhase}
              </span>
              <span className="text-zinc-300">·</span>
              <span className="text-zinc-700 group-hover:text-zinc-950 transition-colors">Scroll to scrub video</span>
              <ArrowRight className="w-3 h-3 text-zinc-600 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Main Headline (Sans Grotesque style from reference image) */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.2rem] font-medium leading-[1.06] tracking-tight text-zinc-950 mb-4 sm:mb-6 drop-shadow-xs max-w-4xl">
              One unified system to build, <br className="hidden sm:inline" />
              test, ship, and scale software
            </h1>

            {/* Floating Logo Strip */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-12 opacity-90 mb-2">
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

          {/* Lower Ground Area: Road Milestone Signboard */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full flex flex-col lg:flex-row items-end justify-between gap-6 my-auto">
            {/* Left CTA & Blueprint Trigger */}
            <div className="flex flex-wrap items-center gap-3 bg-white/85 backdrop-blur-md p-2 rounded-full border border-black/10 shadow-md">
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
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
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

          {/* Bottom Grounded Video Scrubber HUD */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full mt-2">
            <div className="rounded-[24px] bg-white/90 backdrop-blur-xl border border-black/10 px-5 py-3 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-900 text-xs">
              {/* Playhead Time & Autoplay Controls */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlayingAuto(!isPlayingAuto)}
                  className="w-8 h-8 rounded-xl bg-zinc-950 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                  aria-label={isPlayingAuto ? 'Pause preview' : 'Play preview continuous'}
                >
                  {isPlayingAuto ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                </button>

                <div className="text-left font-mono">
                  <div className="font-bold text-zinc-950 text-xs flex items-center gap-1.5">
                    <span>⏱️ {videoTime.toFixed(1)}s / {(videoDuration || 10).toFixed(1)}s</span>
                    <span className="text-[10px] text-zinc-500 font-normal">
                      ({Math.round((videoTime / (videoDuration || 10)) * 100)}% Smooth Scroll Scrubbed)
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-500">
                    {isPlayingAuto ? 'Continuous Playback Mode' : 'Scroll down to scrub daylight -> night'}
                  </div>
                </div>
              </div>

              {/* Scroll Milestone Quick Jump Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap">
                {SCROLL_PHASES.map((phase) => {
                  const Icon = phase.icon;
                  const isActive =
                    (phase.time === 0 && videoTime < 3.0) ||
                    (phase.time === 3 && videoTime >= 3.0 && videoTime < 6.0) ||
                    (phase.time === 6 && videoTime >= 6.0 && videoTime < 9.0) ||
                    (phase.time >= 9 && videoTime >= 9.0);

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

export default Hero;
