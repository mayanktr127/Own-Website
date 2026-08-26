import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Check,
  Copy,
  Sparkles,
  Zap,
  Compass,
} from 'lucide-react';
import { toast } from 'sonner';

interface TeamMember {
  name: string;
  role: string;
  department: 'Leadership' | 'AI & Systems' | 'Design' | 'Growth';
  email: string;
  image: string;
  blobColor: string;
  bio: string;
  specialties: string[];
  experience: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Zack Hill',
    role: 'Partner & Chief Architect',
    department: 'Leadership',
    email: 'zack@nexora.studio',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-amber-400/30 to-butter/60',
    bio: 'Former principal infra architect at Stripe. Specializes in sub-second distributed databases and serverless edge orchestration.',
    specialties: ['Next.js 15', 'Distributed Systems', 'Rust'],
    experience: '12+ yrs',
  },
  {
    name: 'Sarah Devine',
    role: 'Director of Product & UX',
    department: 'Design',
    email: 'sarah@nexora.studio',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-zinc-800 to-zinc-950',
    bio: 'Ex-Linear design lead. Built design token systems for 40+ SaaS platforms with 60fps micro-interactions.',
    specialties: ['Figma Systems', 'UI Physics', 'Design Tokens'],
    experience: '9+ yrs',
  },
  {
    name: 'Arlton Lowry',
    role: 'Partner & Chief Creative Officer',
    department: 'Leadership',
    email: 'arlton@nexora.studio',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-butter/40 to-amber-500/30',
    bio: 'Award-winning creative director overseeing brand identity, high-conversion layout strategy, and visual direction.',
    specialties: ['Brand Identity', 'Editorial Direction', 'Design Systems'],
    experience: '14+ yrs',
  },
  {
    name: 'Will Carter',
    role: 'Head of AI & Autonomous Swarms',
    department: 'AI & Systems',
    email: 'will@nexora.studio',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-emerald-600/30 to-teal-500/20',
    bio: 'AI researcher and systems engineer. Specializes in hybrid vector RAG pipelines, multi-agent reasoning, and zero-hallucination copilots.',
    specialties: ['Claude 3.5', 'Vector RAG', 'Multi-Agent Swarms'],
    experience: '8+ yrs',
  },
  {
    name: 'Brent Fulford',
    role: 'Lead Growth & AEO Engineer',
    department: 'Growth',
    email: 'brent@nexora.studio',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-zinc-700 to-zinc-900',
    bio: 'Pioneered Generative Engine Optimization (GEO) and JSON-LD knowledge entity graphs dominating Google & Perplexity citations.',
    specialties: ['AEO & GEO', 'Knowledge Graphs', 'Programmatic SEO'],
    experience: '10+ yrs',
  },
  {
    name: 'Correne Spero',
    role: 'Director of Delivery & Client Ops',
    department: 'Leadership',
    email: 'spero@nexora.studio',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-amber-300/30 to-yellow-500/20',
    bio: 'Runs our weekly sprint orchestration, staging release checkpoints, and executive founder stakeholder alignment.',
    specialties: ['Sprint Planning', 'Linear Sync', 'Zero-Surprise Delivery'],
    experience: '11+ yrs',
  },
  {
    name: 'Calvin Bramlett',
    role: 'Senior Motion & Frontend Architect',
    department: 'Design',
    email: 'calvin@nexora.studio',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-zinc-800 to-black',
    bio: 'GSAP and WebGL specialist creating silky 60fps frame-scrubbed interfaces, micro-animations, and fluid physics.',
    specialties: ['GSAP & Lenis', 'WebGL / Canvas', 'Tailwind v4'],
    experience: '7+ yrs',
  },
  {
    name: 'Elena Rostova',
    role: 'Lead Cloud & Security Architect',
    department: 'AI & Systems',
    email: 'elena@nexora.studio',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    blobColor: 'from-butter/40 to-zinc-800/40',
    bio: 'SOC2 Type II compliance veteran. Architecting resilient multi-tenant schemas, AWS GovCloud infra, and automated CI/CD security.',
    specialties: ['SOC2 & HIPAA', 'AWS Cloud', 'PostgreSQL Scaling'],
    experience: '9+ yrs',
  },
];

const EXPERT_BADGES = [
  { text: '15+ Years Experience', color: 'bg-amber-100/90 text-amber-900 border-amber-200' },
  { text: '7+ Years In Consulting', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
  { text: '30+ Shipped MVPs', color: 'bg-zinc-100 text-zinc-800 border-zinc-200' },
  { text: '100+ Happy Founders', color: 'bg-rose-50 text-rose-800 border-rose-200' },
  { text: 'Zero Junior Handoffs', color: 'bg-butter/60 text-butter-foreground border-butter' },
];

export function TeamSection() {
  const [activeDepartment, setActiveDepartment] = useState<string>('All');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const filteredMembers =
    activeDepartment === 'All'
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === activeDepartment);

  const handleCopyEmail = (email: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {
          const textArea = document.createElement('textarea');
          textArea.value = email;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        });
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // ignore
    }
    setCopiedEmail(email);
    toast.success(`Copied ${email} to clipboard!`);
    setTimeout(() => {
      setCopiedEmail(null);
    }, 2500);
  };

  return (
    <section id="team" className="py-24 sm:py-32 scroll-mt-12 bg-background relative overflow-hidden">
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-butter/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Floating Context Badges (Combined from Image 2) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          {EXPERT_BADGES.map((badge) => (
            <div
              key={badge.text}
              className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold border shadow-2xs transition-transform hover:scale-105 cursor-default ${badge.color}`}
            >
              {badge.text}
            </div>
          ))}
        </div>

        {/* Section Header (Combining "Our People" & "Meet Our Experts") */}
        <div data-reveal className="max-w-3xl mx-auto mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-butter text-butter-foreground text-[11px] font-semibold uppercase tracking-[0.14em] shadow-xs mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Senior Product Squad</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-medium leading-[1.05] tracking-tight text-foreground mb-5">
            Meet Our Experts
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            We are few by design. You collaborate directly with principal operators, ex-Stripe architects, and senior designers — no account managers or outsourced junior engineers.
          </p>

          {/* Floating Pill Action Buttons (From Image 2) */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              to="/contact"
              className="bg-zinc-950 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-current text-butter" />
              <span>Start Sprints With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              to="/services"
              className="bg-card hover:bg-secondary text-foreground border border-border px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium inline-flex items-center gap-2 transition-all duration-300 shadow-xs hover:scale-102"
            >
              <Compass className="w-3.5 h-3.5 text-muted-foreground" />
              <span>Explore Disciplines</span>
            </Link>
          </div>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', 'Leadership', 'AI & Systems', 'Design', 'Growth'].map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setActiveDepartment(dept)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeDepartment === dept
                  ? 'bg-zinc-950 text-white font-bold shadow-sm'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-secondary border border-border/70'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* 8-Member Portrait Grid (Combining Image 1 & Image 2 with Alternating Theme) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member, index) => {
            const isDark = index % 2 === 1; // Alternating black and light cards to match site theme
            const isCopied = copiedEmail === member.email;

            return (
              <div
                key={member.name}
                data-reveal
                data-reveal-delay={`${index * 60}`}
                className={`rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 border group relative overflow-hidden ${
                  isDark
                    ? 'bg-zinc-950 text-white border-white/10 shadow-xl hover:border-butter/40 hover:shadow-2xl'
                    : 'bg-card text-foreground border-border shadow-soft hover:shadow-xl'
                }`}
              >
                {/* Subtle corner highlight for dark cards */}
                {isDark && (
                  <div
                    className="absolute -top-10 -right-10 w-28 h-28 bg-butter/10 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                )}

                <div>
                  {/* Portrait Area with Organic Silhouette Backdrop (Image 1 Style adapted to Nexora Theme) */}
                  <div className="relative w-full aspect-square mb-6 flex items-center justify-center">
                    {/* Organic Squircle / Blob Shape Backdrop */}
                    <div
                      className={`absolute inset-2 sm:inset-3 rounded-[38%_62%_63%_37%/41%_44%_56%_59%] bg-gradient-to-tr ${member.blobColor} transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 shadow-inner opacity-90`}
                      aria-hidden="true"
                    />

                    {/* Team Member Portrait Image */}
                    <div className="relative z-10 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-md group-hover:scale-102 transition-transform duration-300">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Experience Badge */}
                    <span
                      className={`absolute bottom-1 right-2 z-20 text-[9.5px] font-mono font-semibold px-2 py-0.5 rounded-full border shadow-2xs ${
                        isDark
                          ? 'bg-zinc-900 text-butter border-white/10'
                          : 'bg-white/90 text-zinc-800 border-black/10'
                      }`}
                    >
                      {member.experience}
                    </span>
                  </div>

                  {/* Role Title in Crisp Monospace */}
                  <div
                    className={`text-[10.5px] uppercase font-mono tracking-wider font-semibold mb-1 truncate ${
                      isDark ? 'text-butter/90' : 'text-zinc-500'
                    }`}
                  >
                    {member.role}
                  </div>

                  {/* Member Name */}
                  <h3
                    className={`font-display text-xl sm:text-2xl font-medium tracking-tight mb-2.5 ${
                      isDark ? 'text-white' : 'text-foreground'
                    }`}
                  >
                    {member.name}
                  </h3>

                  {/* Short Bio */}
                  <p
                    className={`text-xs leading-relaxed mb-4 line-clamp-2 ${
                      isDark ? 'text-zinc-300' : 'text-muted-foreground'
                    }`}
                  >
                    {member.bio}
                  </p>
                </div>

                {/* Bottom Zone: Email Handle Link + Copy Action */}
                <div
                  className={`pt-4 border-t flex flex-col gap-2.5 ${
                    isDark ? 'border-white/10' : 'border-border/60'
                  }`}
                >
                  {/* Email Pill with Direct Copy Interaction */}
                  <div className="flex items-center justify-between gap-1">
                    <a
                      href={`mailto:${member.email}`}
                      className={`text-xs font-mono transition-colors truncate hover:underline ${
                        isDark ? 'text-zinc-300 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                      }`}
                    >
                      {member.email}
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyEmail(member.email)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ${
                        isDark
                          ? 'text-zinc-400 hover:text-white hover:bg-white/10'
                          : 'text-zinc-500 hover:text-zinc-950 hover:bg-secondary'
                      }`}
                      title={isCopied ? 'Copied!' : 'Copy email address'}
                      aria-label={`Copy email for ${member.name}`}
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Specialty Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec) => (
                      <span
                        key={spec}
                        className={`text-[9.5px] font-mono px-2 py-0.5 rounded-md ${
                          isDark
                            ? 'bg-white/5 text-zinc-400 border border-white/5'
                            : 'bg-secondary text-muted-foreground border border-border/40'
                        }`}
                      >
                        {spec}
                      </span>
                    ))}
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

export default TeamSection;
