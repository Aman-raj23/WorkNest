import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Zap,
  Play,
  Check,
  CheckCircle2,
  TrendingUp,
  Activity,
  Keyboard,
  Share2,
  MessageSquare,
  Globe,
  Star,
  X,
  ChevronRight,
  ShieldCheck,
  Users,
  Kanban,
  Brain,
  Wand2,
  Clock,
  Target,
  Gauge,
  Smile,
  Rocket,
  Layers,
  Cpu,
  ArrowLeftRight,
} from "lucide-react";

export default function LandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [ctaEmail, setCtaEmail] = useState("");
  const [ctaSubmitted, setCtaSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Parallax offsets
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  // Scroll listener for progress bar, header elevation, and parallax
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight > 0) {
        setScrollProgress(
          Math.min(100, Math.max(0, (currentScroll / docHeight) * 100))
        );
      }
      setIsScrolled(currentScroll > 24);
      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for scroll-reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Esc key listener for demo modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isDemoModalOpen) {
        setIsDemoModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDemoModalOpen]);

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (!ctaEmail) return;
    setCtaSubmitted(true);
    setTimeout(() => {
      setCtaEmail("");
      setCtaSubmitted(false);
    }, 6000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setNewsletterSubmitted(false);
    }, 5000);
  };

  const tabs = [
    {
      id: 0,
      title: "AI Insights & Predictions",
      desc: "Algorithmic risk triggers and forward capacity forecasts updated per git commit.",
      icon: <Brain className="text-[#3525cd]" size={20} />,
    },
    {
      id: 1,
      title: "Kanban Workflows",
      desc: "Dense, high-information card rows built with intuitive drag targets and batch edits.",
      icon: <Kanban className="text-[#712ae2]" size={20} />,
    },
    {
      id: 2,
      title: "Team Capacity Mesh",
      desc: "Visual cognitive bandwidth tracking preventing heroic crunch modes.",
      icon: <Users className="text-[#006693]" size={20} />,
    },
    {
      id: 3,
      title: "Automated Sprint Fixes",
      desc: "1-click task split suggestions and cross-team dependencies resolvers.",
      icon: <Wand2 className="text-[#8a4cfc]" size={20} />,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] font-sans selection:bg-[#712ae2]/20 selection:text-[#3525cd] relative overflow-x-hidden"
    >
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[70] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#4f46e5] via-[#712ae2] to-[#8a4cfc] transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(113,42,226,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Ambient Glow Orbs */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute -top-20 left-1/4 w-[420px] h-[420px] bg-[#712ae2]/10 rounded-full blur-3xl animate-glow-pulse transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div
          className="absolute top-48 right-12 w-[460px] h-[460px] bg-[#3525cd]/10 rounded-full blur-3xl animate-glow-pulse transition-transform duration-500 ease-out"
          style={{
            animationDelay: "2s",
            transform: `translateY(${scrollY * -0.06}px)`,
          }}
        />
        <div
          className="absolute top-[1400px] left-8 w-[400px] h-[400px] bg-[#712ae2]/10 rounded-full blur-3xl transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        />
        <div
          className="absolute top-[2600px] right-16 w-[450px] h-[450px] bg-[#3525cd]/10 rounded-full blur-3xl transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        />
      </div>

      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#f8f9ff]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(11,28,48,0.06)] border-b border-[#c7c4d8]/40"
            : "bg-[#f8f9ff]/75 backdrop-blur-md shadow-none border-b border-transparent"
        }`}
      >
        <div className="h-16 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#3525cd] flex items-center justify-center text-white shadow-md shadow-[#3525cd]/30 transition-transform group-hover:scale-105">
                <Cpu size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#0b1c30]">
                WorkNest
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              <a
                href="#features"
                className="text-sm font-semibold text-[#464555] hover:text-[#0b1c30] transition-colors"
              >
                Features
              </a>
              <a
                href="#deep-dive"
                className="text-sm font-semibold text-[#464555] hover:text-[#0b1c30] transition-colors"
              >
                Ergonomics
              </a>
              <a
                href="#pricing-matrix"
                className="text-sm font-semibold text-[#464555] hover:text-[#0b1c30] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-sm font-semibold text-[#464555] hover:text-[#0b1c30] transition-colors"
              >
                Enterprise
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-semibold text-[#464555] hover:text-[#0b1c30] px-3 py-1.5 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center text-sm font-semibold rounded-xl bg-[#712ae2] text-white px-5 py-2 hover:bg-[#8a4cfc] shadow-[0_4px_14px_rgba(113,42,226,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              to="/dashboard"
              className="hidden sm:inline-flex items-center justify-center text-sm font-semibold rounded-xl bg-white text-[#3525cd] border border-[#c7c4d8]/60 px-4 py-2 hover:bg-[#eff4ff] transition-all"
            >
              Live App
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full pt-20">
        {/* SECTION 1: HERO */}
        <section className="relative z-10 px-6 lg:px-12 pt-12 pb-20 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Announcement Pill */}
          <div className="reveal-on-scroll is-visible inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#dce9ff] hover:bg-[#d3e4fe] transition-all duration-300 shadow-sm group shimmer-mask mb-8 cursor-pointer">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#712ae2] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#712ae2]" />
            </span>
            <span className="text-xs font-semibold text-[#0b1c30]">
              WorkNest AI Engine 3.4 is live
            </span>
            <span className="text-[11px] font-bold text-[#8a4cfc] bg-white px-2 py-0.5 rounded-full shadow-xs">
              Telemetry 2.0
            </span>
            <ArrowRight
              size={14}
              className="text-[#464555] group-hover:translate-x-0.5 transition-transform"
            />
          </div>

          {/* Headline */}
          <h1 className="reveal-on-scroll is-visible text-4xl sm:text-6xl lg:text-7xl font-extrabold max-w-4xl tracking-tight text-[#0b1c30] leading-[1.12] mb-6">
            Manage Smarter. Deliver Faster. <br />
            <span className="bg-gradient-to-r from-[#3525cd] via-[#712ae2] to-[#8a4cfc] bg-clip-text text-transparent">
              Work Better.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="reveal-on-scroll is-visible text-lg sm:text-xl text-[#464555] max-w-2xl leading-relaxed mb-10">
            The autonomous project intelligence platform that connects
            roadmaps, anticipates capacity bottlenecks, and auto-balances sprint
            velocity before deadlines slip.
          </p>

          {/* CTAs */}
          <div className="reveal-on-scroll is-visible flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-bold rounded-xl bg-[#712ae2] text-white px-8 py-3.5 hover:bg-[#8a4cfc] shadow-[0_8px_24px_rgba(113,42,226,0.35)] hover:shadow-[0_12px_28px_rgba(113,42,226,0.45)] hover:-translate-y-0.5 transition-all"
            >
              <span>Start Free Trial — No CC Required</span>
              <Zap size={18} />
            </Link>

            <button
              type="button"
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-base font-semibold rounded-xl bg-white text-[#0b1c30] px-6 py-3.5 shadow-sm hover:shadow-md hover:bg-[#eff4ff] border border-[#c7c4d8]/40 transition-all"
            >
              <span className="w-6 h-6 rounded-full bg-[#e5eeff] flex items-center justify-center text-[#3525cd]">
                <Play size={14} className="fill-current" />
              </span>
              <span>Watch 2-Min Product Tour</span>
            </button>
          </div>

          {/* Social Proof Logos */}
          <div className="reveal-on-scroll is-visible w-full max-w-4xl flex flex-col items-center gap-4 mb-16 opacity-85">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#777587]">
              Trusted by 10,000+ high-velocity engineering &amp; product teams
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-[#464555]">
              <div className="flex items-center gap-2 hover:text-[#0b1c30] transition-colors cursor-default">
                <Layers size={18} className="text-[#3525cd]" />
                <span>Figma</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#0b1c30] transition-colors cursor-default">
                <ShieldCheck size={18} className="text-[#712ae2]" />
                <span>Stripe</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#0b1c30] transition-colors cursor-default">
                <CheckCircle2 size={18} className="text-[#0ea5e9]" />
                <span>Notion</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#0b1c30] transition-colors cursor-default">
                <Activity size={18} className="text-[#8a4cfc]" />
                <span>Linear</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#0b1c30] transition-colors cursor-default">
                <Rocket size={18} className="text-slate-800" />
                <span>Vercel</span>
              </div>
              <div className="flex items-center gap-2 hover:text-[#0b1c30] transition-colors cursor-default">
                <Target size={18} className="text-[#712ae2]" />
                <span>Datadog</span>
              </div>
            </div>
          </div>

          {/* Hero Interactive Mockup Canvas */}
          <div
            className="w-full max-w-5xl relative transition-transform duration-200 ease-out will-change-transform"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            {/* Glow Underlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#712ae2]/20 via-[#3525cd]/15 to-cyan-500/10 blur-2xl -z-10 rounded-3xl transform scale-95" />

            {/* Main Dashboard Glass Box */}
            <div className="animate-float-slow w-full bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 text-left relative overflow-hidden border border-[#c7c4d8]/40">
              {/* Header Bar Inside Card */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#e5eeff]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4f46e5] flex items-center justify-center text-white shadow-sm">
                    <Activity size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-[#0b1c30]">
                        Sprint Cycle 42 Telemetry
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#dce9ff] text-[#3525cd] text-xs font-bold">
                        Active Run
                      </span>
                    </div>
                    <p className="text-xs text-[#464555]">
                      Core Engine &amp; UI Shell • Auto-rebalance Mode Enabled
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaddff] text-[#5a00c6] text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#712ae2] animate-ping" />
                    98.2% Sync Precision
                  </span>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#cbdbf5] text-[#0b1c30] flex items-center justify-center text-xs font-bold ring-2 ring-white">
                      SL
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#e2dfff] text-[#0f0069] flex items-center justify-center text-xs font-bold ring-2 ring-white">
                      AK
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#eaddff] text-[#25005a] flex items-center justify-center text-xs font-bold ring-2 ring-white">
                      MR
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics Row Inside Mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dce9ff]">
                  <span className="text-xs text-[#464555] uppercase tracking-wider block mb-1 font-semibold">
                    Velocity Index
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#0b1c30]">
                      148.4
                    </span>
                    <span className="text-xs text-[#3525cd] font-bold flex items-center gap-0.5">
                      <TrendingUp size={14} /> +18.2%
                    </span>
                  </div>
                  <div className="w-full bg-[#dce9ff] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-[#3525cd] h-full rounded-full"
                      style={{ width: "78%" }}
                    />
                  </div>
                </div>

                <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dce9ff]">
                  <span className="text-xs text-[#464555] uppercase tracking-wider block mb-1 font-semibold">
                    SLA Health
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#0b1c30]">
                      99.1%
                    </span>
                    <span className="text-xs text-[#006693] font-bold">
                      Nominal
                    </span>
                  </div>
                  <div className="w-full bg-[#dce9ff] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-[#006693] h-full rounded-full"
                      style={{ width: "96%" }}
                    />
                  </div>
                </div>

                <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dce9ff]">
                  <span className="text-xs text-[#464555] uppercase tracking-wider block mb-1 font-semibold">
                    Burnout Buffer
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#0b1c30]">
                      84.0%
                    </span>
                    <span className="text-xs text-[#712ae2] font-bold">
                      Balanced
                    </span>
                  </div>
                  <div className="w-full bg-[#dce9ff] h-1.5 rounded-full mt-3 overflow-hidden">
                    <div
                      className="bg-[#712ae2] h-full rounded-full"
                      style={{ width: "84%" }}
                    />
                  </div>
                </div>

                <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dce9ff]">
                  <span className="text-xs text-[#464555] uppercase tracking-wider block mb-1 font-semibold">
                    Predictive ETA
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#0b1c30]">
                      Nov 14
                    </span>
                    <span className="text-xs text-[#3525cd] font-bold">
                      -2 Days
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-[#464555] mt-2 font-medium">
                    <Sparkles size={13} className="text-[#3525cd]" /> Ahead of
                    cycle
                  </span>
                </div>
              </div>

              {/* Chart & Live Auto-Balancing Dynamic Log */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {/* Burndown Vector Chart */}
                <div className="lg:col-span-2 bg-[#eff4ff] p-4 rounded-xl border border-[#dce9ff] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-[#0b1c30] flex items-center gap-1.5">
                      <TrendingUp size={16} className="text-[#3525cd]" />
                      Burndown Curve vs Predicted Path
                    </span>
                    <span className="text-xs text-[#777587]">
                      Updated 2m ago
                    </span>
                  </div>

                  <svg
                    className="w-full h-36"
                    fill="none"
                    viewBox="0 0 500 120"
                  >
                    <defs>
                      <linearGradient
                        id="burndownGradient"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#4f46e5"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#4f46e5"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    <line
                      stroke="#c7c4d8"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                      x1="0"
                      x2="500"
                      y1="100"
                      y2="100"
                    />
                    <line
                      stroke="#c7c4d8"
                      strokeDasharray="4 4"
                      strokeWidth="1"
                      x1="0"
                      x2="500"
                      y1="50"
                      y2="50"
                    />
                    {/* Theoretical Path */}
                    <path
                      d="M 0,20 L 500,105"
                      stroke="#777587"
                      strokeDasharray="6 6"
                      strokeWidth="1.5"
                    />
                    {/* Shaded Active Burndown */}
                    <path
                      d="M 0,20 Q 120,30 200,60 T 360,75 T 450,100 L 450,115 L 0,115 Z"
                      fill="url(#burndownGradient)"
                    />
                    <path
                      d="M 0,20 Q 120,30 200,60 T 360,75 T 450,100"
                      stroke="#4f46e5"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    />
                    {/* Anomaly Detection Point */}
                    <circle
                      className="animate-ping"
                      cx="200"
                      cy="60"
                      fill="#712ae2"
                      r="5"
                      stroke="#ffffff"
                      strokeWidth="2"
                      style={{
                        animationDuration: "2s",
                        transformOrigin: "200px 60px",
                      }}
                    />
                    <circle cx="200" cy="60" fill="#712ae2" r="4" />
                  </svg>

                  <div className="flex items-center justify-between text-xs text-[#464555] pt-2 border-t border-[#dce9ff]/80">
                    <span>Day 1 (Kickoff)</span>
                    <span className="text-[#712ae2] font-semibold flex items-center gap-1">
                      <Brain size={14} /> AI rebalance trigger
                    </span>
                    <span>Day 10 (Target)</span>
                  </div>
                </div>

                {/* Auto-Balancing Log */}
                <div className="bg-[#eff4ff] p-4 rounded-xl border border-[#dce9ff] flex flex-col justify-between gap-3">
                  <span className="text-sm font-bold text-[#0b1c30]">
                    Auto-Balancing Actions
                  </span>
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-lg bg-white shadow-xs flex items-start gap-2.5 border border-[#e5eeff]">
                      <ArrowLeftRight
                        size={16}
                        className="text-[#712ae2] shrink-0 mt-0.5"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#0b1c30] truncate">
                          Auth Service refactor re-routed
                        </p>
                        <p className="text-[11px] text-[#464555]">
                          Assigned to @marcus (4.2h capacity freed)
                        </p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white shadow-xs flex items-start gap-2.5 border border-[#e5eeff]">
                      <CheckCircle2
                        size={16}
                        className="text-[#3525cd] shrink-0 mt-0.5"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-[#0b1c30] truncate">
                          PR review cycle shortened
                        </p>
                        <p className="text-[11px] text-[#464555]">
                          Median time dropped 44m across repo
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/ai-insights"
                    className="w-full py-2 bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1 text-center"
                  >
                    <span>Inspect Telemetry Graph</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Overlaid Floating Badge */}
              <div
                className="animate-badge-float hidden sm:flex absolute -bottom-3 -right-3 bg-[#213145] text-[#eaf1ff] p-3.5 rounded-xl shadow-xl items-center gap-3 max-w-sm backdrop-blur-md border border-white/10"
                style={{ transform: `translateY(${scrollY * -0.04}px)` }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#712ae2] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Brain size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold truncate">
                    AI reallocated 4 tasks
                  </p>
                  <p className="text-[11px] text-[#c7c4d8]">
                    Sprint risk reduced 32% automatically
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CORE VALUE PROPOSITION GRID */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full" id="features">
          <div className="reveal-on-scroll text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider">
              Uncompromising Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-2 mb-4">
              Engineered for teams that measure cycle time in hours, not weeks.
            </h2>
            <p className="text-base sm:text-lg text-[#464555] leading-relaxed">
              Ditch clunky enterprise suites that slow your best builders down.
              WorkNest combines sub-50ms speed with proactive algorithmic
              foresight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="reveal-on-scroll group bg-[#eff4ff] hover:bg-[#e5eeff] rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between border border-[#dce9ff]/60">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#3525cd] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b1c30] mb-3">
                  Autonomous Sprint Telemetry
                </h3>
                <p className="text-sm text-[#464555] leading-relaxed mb-6">
                  Real-time burndown analytics and machine-learning anomaly
                  detection that pinpoints blocked PRs and stalling epics days
                  before standard retro meetings.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-xs border border-[#e5eeff]">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-2 font-medium">
                  <span>Stall Prediction Confidence</span>
                  <span className="font-bold text-[#3525cd]">94.8%</span>
                </div>
                <div className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#3525cd] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "94.8%" }}
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="reveal-on-scroll group bg-[#eff4ff] hover:bg-[#e5eeff] rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between border border-[#dce9ff]/60">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#712ae2]/10 text-[#712ae2] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#712ae2] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Keyboard size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b1c30] mb-3">
                  Frictionless Kanban &amp; Roadmaps
                </h3>
                <p className="text-sm text-[#464555] leading-relaxed mb-6">
                  Sub-50ms keyboard-first interaction design. Create, assign,
                  filter, and transition cards effortlessly with{" "}
                  <kbd className="px-1.5 py-0.5 bg-[#d3e4fe] text-[#0b1c30] rounded font-mono text-xs font-semibold">
                    Cmd+K
                  </kbd>{" "}
                  velocity.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-xs border border-[#e5eeff] flex items-center justify-between">
                <span className="text-xs text-[#0b1c30] flex items-center gap-1.5 font-medium">
                  <Zap size={15} className="text-[#712ae2]" /> Latency Benchmarks
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#eaddff] text-[#25005a] text-xs font-bold">
                  18ms Render
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="reveal-on-scroll group bg-[#eff4ff] hover:bg-[#e5eeff] rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between border border-[#dce9ff]/60">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#006693]/10 text-[#006693] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#006693] group-hover:text-white transition-all duration-300 shadow-xs">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b1c30] mb-3">
                  Workload Mesh &amp; Capacity
                </h3>
                <p className="text-sm text-[#464555] leading-relaxed mb-6">
                  Eliminate quiet burnout and context fatigue. WorkNest
                  dynamically monitors cognitive load patterns across pull
                  requests, tickets, and Slack notifications.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-xs border border-[#e5eeff]">
                <div className="flex items-center justify-between text-xs text-[#0b1c30] mb-2 font-medium">
                  <span>Team Load Balance</span>
                  <span className="font-bold text-[#006693]">
                    Optimized (0 Overloaded)
                  </span>
                </div>
                <div className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#006693] h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "82%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: INTERACTIVE FEATURE DEEP DIVE */}
        <section
          className="py-20 px-6 lg:px-12 bg-[#eff4ff]/60 w-full border-y border-[#dce9ff]"
          id="deep-dive"
        >
          <div className="max-w-7xl mx-auto">
            <div className="reveal-on-scroll flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-bold text-[#712ae2] uppercase tracking-wider">
                  Deep Platform Ergonomics
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-2">
                  Built for every phase of product creation
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#464555] max-w-md">
                Switch views seamlessly between predictive graphs, dense kanbans,
                and team mesh heatmaps with zero context switches.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Tab Buttons */}
              <div className="reveal-on-scroll lg:col-span-4 flex flex-col gap-3">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                      className={`text-left p-5 rounded-2xl transition-all ${
                        isActive
                          ? "bg-white shadow-md border-l-4 border-[#3525cd]"
                          : "bg-transparent hover:bg-white/70"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        {tab.icon}
                        <span className="text-base font-bold text-[#0b1c30]">
                          {tab.title}
                        </span>
                      </div>
                      <p className="text-xs text-[#464555] pl-8 leading-relaxed">
                        {tab.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right: Tab Display Canvas */}
              <div className="reveal-on-scroll lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-md min-h-[440px] flex flex-col justify-between border border-[#c7c4d8]/30">
                {/* Content 0: AI Insights */}
                {activeTab === 0 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between pb-4 border-b border-[#e5eeff]">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#ba1a1a] animate-ping" />
                        <span className="text-sm font-bold text-[#0b1c30]">
                          Predictive Alert: Critical Bottleneck Ahead
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#ffdad6] text-[#93000a] text-xs font-bold">
                        High Severity
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-[#eff4ff] flex flex-col gap-3 border border-[#dce9ff]">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm font-bold text-[#0b1c30]">
                            API Gateway Refactor (EPIC-309)
                          </h4>
                          <p className="text-xs text-[#464555]">
                            Blocked by 3 dependent staging environment issues.
                            Probability of delay: 84%.
                          </p>
                        </div>
                        <span className="text-xl font-extrabold text-[#ba1a1a]">
                          3.5d Slip
                        </span>
                      </div>

                      <div className="bg-white p-3 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-[#e5eeff]">
                        <div className="flex items-center gap-2">
                          <Brain size={18} className="text-[#3525cd]" />
                          <span className="text-xs font-semibold text-[#0b1c30]">
                            Recommended Fix: Split endpoint contracts and assign
                            stub mock to @dave
                          </span>
                        </div>
                        <button
                          type="button"
                          className="px-3 py-1 rounded-lg bg-[#3525cd] text-white text-xs font-bold hover:bg-[#4f46e5] transition-colors whitespace-nowrap"
                        >
                          Apply Auto-Split
                        </button>
                      </div>
                    </div>

                    {/* Heat Map Visual Strip */}
                    <div>
                      <span className="text-xs font-semibold text-[#464555] block mb-2">
                        Simulated Sprint Runway Remaining
                      </span>
                      <div className="grid grid-cols-10 gap-1.5 h-8">
                        <div
                          className="bg-[#3525cd]/80 rounded"
                          title="Sprint Day 1"
                        />
                        <div
                          className="bg-[#3525cd]/80 rounded"
                          title="Sprint Day 2"
                        />
                        <div
                          className="bg-[#3525cd]/80 rounded"
                          title="Sprint Day 3"
                        />
                        <div
                          className="bg-[#3525cd]/80 rounded"
                          title="Sprint Day 4"
                        />
                        <div
                          className="bg-[#712ae2] rounded"
                          title="Sprint Day 5"
                        />
                        <div
                          className="bg-[#712ae2] rounded"
                          title="Sprint Day 6"
                        />
                        <div
                          className="bg-[#dce9ff] rounded"
                          title="Sprint Day 7"
                        />
                        <div
                          className="bg-[#dce9ff] rounded"
                          title="Sprint Day 8"
                        />
                        <div
                          className="bg-[#e5eeff] rounded"
                          title="Sprint Day 9"
                        />
                        <div
                          className="bg-[#e5eeff] rounded"
                          title="Sprint Day 10"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-[#464555] mt-1.5 font-medium">
                        <span>Completed (60%)</span>
                        <span>Forecasted (40%)</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content 1: Kanban */}
                {activeTab === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between pb-3 border-b border-[#e5eeff]">
                      <span className="text-sm font-bold text-[#0b1c30]">
                        Interactive Sprint Board (Live View)
                      </span>
                      <div className="flex gap-2">
                        <span className="px-2.5 py-1 bg-[#e5eeff] rounded-md text-xs font-semibold text-[#0b1c30]">
                          Filters: All Assignees
                        </span>
                        <span className="px-2.5 py-1 bg-[#e5eeff] rounded-md text-xs font-semibold text-[#0b1c30]">
                          Group: Status
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-[#eff4ff] p-3 rounded-xl space-y-2 border border-[#dce9ff]">
                        <span className="text-xs font-bold text-[#0b1c30]">
                          To Do (4)
                        </span>
                        <div className="p-2.5 rounded-lg bg-white shadow-xs text-xs border border-[#e5eeff]">
                          <div className="font-semibold text-[#0b1c30] mb-1 truncate">
                            Auth0 Callback Handlers
                          </div>
                          <span className="text-[11px] text-[#777587]">
                            WN-812 • P2
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white shadow-xs text-xs border border-[#e5eeff]">
                          <div className="font-semibold text-[#0b1c30] mb-1 truncate">
                            Tailwind Config Overhaul
                          </div>
                          <span className="text-[11px] text-[#777587]">
                            WN-814 • P3
                          </span>
                        </div>
                      </div>

                      <div className="bg-[#eff4ff] p-3 rounded-xl space-y-2 border border-[#dce9ff]">
                        <span className="text-xs font-bold text-[#3525cd]">
                          In Progress (2)
                        </span>
                        <div className="p-2.5 rounded-lg bg-white shadow-xs text-xs border border-[#e5eeff]">
                          <div className="font-semibold text-[#0b1c30] mb-1 truncate">
                            Worker Pool Queue Sizing
                          </div>
                          <span className="text-[11px] text-[#ba1a1a] font-bold">
                            WN-798 • P0 Urgent
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-white shadow-xs text-xs border border-[#e5eeff]">
                          <div className="font-semibold text-[#0b1c30] mb-1 truncate">
                            Figma Token Importer
                          </div>
                          <span className="text-[11px] text-[#712ae2] font-semibold">
                            WN-801 • P1
                          </span>
                        </div>
                      </div>

                      <div className="bg-[#eff4ff] p-3 rounded-xl space-y-2 border border-[#dce9ff]">
                        <span className="text-xs font-bold text-[#006693]">
                          Done (6)
                        </span>
                        <div className="p-2.5 rounded-lg bg-white shadow-xs text-xs border border-[#e5eeff]">
                          <div className="font-semibold text-[#0b1c30] mb-1 truncate">
                            Postgres Migration v3.2
                          </div>
                          <span className="text-[11px] text-emerald-600 font-bold">
                            Completed
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content 2: Team Capacity Mesh */}
                {activeTab === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <span className="text-sm font-bold text-[#0b1c30] block pb-2 border-b border-[#e5eeff]">
                      Contributor Bandwidth Matrix
                    </span>
                    <div className="space-y-3">
                      <div className="p-3 bg-[#eff4ff] rounded-xl flex items-center justify-between border border-[#dce9ff]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#e2dfff] text-[#0f0069] flex items-center justify-center font-bold text-xs">
                            EM
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#0b1c30]">
                              Elena Rostova
                            </p>
                            <p className="text-xs text-[#464555]">
                              Lead Backend Eng
                            </p>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="flex justify-between text-xs text-[#0b1c30] mb-1 font-semibold">
                            <span>Load</span>
                            <span>72%</span>
                          </div>
                          <div className="h-2 bg-[#dce9ff] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#3525cd] rounded-full"
                              style={{ width: "72%" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-[#eff4ff] rounded-xl flex items-center justify-between border border-[#dce9ff]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#eaddff] text-[#25005a] flex items-center justify-center font-bold text-xs">
                            TJ
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#0b1c30]">
                              Tariq Jamison
                            </p>
                            <p className="text-xs text-[#464555]">
                              Staff Platform Eng
                            </p>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="flex justify-between text-xs text-[#0b1c30] mb-1 font-semibold">
                            <span>Load</span>
                            <span className="text-[#712ae2] font-bold">
                              88%
                            </span>
                          </div>
                          <div className="h-2 bg-[#dce9ff] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#712ae2] rounded-full"
                              style={{ width: "88%" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-[#eff4ff] rounded-xl flex items-center justify-between border border-[#dce9ff]">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#cbdbf5] text-[#0b1c30] flex items-center justify-center font-bold text-xs">
                            SK
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#0b1c30]">
                              Sarah Klein
                            </p>
                            <p className="text-xs text-[#464555]">
                              Full Stack Contributor
                            </p>
                          </div>
                        </div>
                        <div className="w-1/3">
                          <div className="flex justify-between text-xs text-[#0b1c30] mb-1 font-semibold">
                            <span>Load</span>
                            <span>64%</span>
                          </div>
                          <div className="h-2 bg-[#dce9ff] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#4f46e5] rounded-full"
                              style={{ width: "64%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content 3: Automated Sprint Fixes */}
                {activeTab === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <span className="text-sm font-bold text-[#0b1c30] block pb-2 border-b border-[#e5eeff]">
                      Active Automation Heuristics
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
                        <ArrowLeftRight
                          size={24}
                          className="text-[#3525cd] mb-2 block"
                        />
                        <h4 className="text-sm font-bold text-[#0b1c30] mb-1">
                          Stale PR Auto-Pinger
                        </h4>
                        <p className="text-xs text-[#464555] leading-relaxed">
                          Notifies secondary reviewer after 4h inactivity during
                          business sprint hours.
                        </p>
                      </div>
                      <div className="p-4 bg-[#eff4ff] rounded-xl border border-[#dce9ff]">
                        <ShieldCheck
                          size={24}
                          className="text-[#712ae2] mb-2 block"
                        />
                        <h4 className="text-sm font-bold text-[#0b1c30] mb-1">
                          Auto-Load Balancer
                        </h4>
                        <p className="text-xs text-[#464555] leading-relaxed">
                          Re-allocates low-priority chores if an engineer
                          commits &gt; 12 story points in a single cycle.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer of Tab Card */}
                <div className="pt-6 mt-6 border-t border-[#e5eeff] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={18} className="text-[#006693]" />
                    <span className="text-xs text-[#464555] font-medium">
                      SOC2 Type II &amp; GDPR Telemetry Compliant
                    </span>
                  </div>
                  <Link
                    to="/dashboard"
                    className="text-xs font-bold text-[#3525cd] hover:text-[#4f46e5] inline-flex items-center gap-1 group"
                  >
                    <span>Explore live sandbox workspace</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: METRICS & PERFORMANCE STAT STRIP */}
        <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="reveal-on-scroll metric-card bg-[#eff4ff] p-6 rounded-2xl flex flex-col justify-between hover:bg-[#e5eeff] transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-[#dce9ff]/60">
              <Gauge size={28} className="text-[#3525cd] mb-4" />
              <div>
                <span className="metric-number text-5xl font-black text-[#0b1c30] tracking-tight block">
                  4.8x
                </span>
                <p className="text-base font-bold text-[#0b1c30] mt-2">
                  Faster sprint planning
                </p>
                <p className="text-xs text-[#464555] mt-1">
                  Eliminate manual estimation arguments with ML-backed sizing.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll metric-card bg-[#eff4ff] p-6 rounded-2xl flex flex-col justify-between hover:bg-[#e5eeff] transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-[#dce9ff]/60">
              <Target size={28} className="text-[#712ae2] mb-4" />
              <div>
                <span className="metric-number text-5xl font-black text-[#0b1c30] tracking-tight block">
                  91.4%
                </span>
                <p className="text-base font-bold text-[#0b1c30] mt-2">
                  On-time release rate
                </p>
                <p className="text-xs text-[#464555] mt-1">
                  Real-time risk mitigation prevents release slippage.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll metric-card bg-[#eff4ff] p-6 rounded-2xl flex flex-col justify-between hover:bg-[#e5eeff] transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-[#dce9ff]/60">
              <Smile size={28} className="text-[#006693] mb-4" />
              <div>
                <span className="metric-number text-5xl font-black text-[#0b1c30] tracking-tight block">
                  38%
                </span>
                <p className="text-base font-bold text-[#0b1c30] mt-2">
                  Less engineering burnout
                </p>
                <p className="text-xs text-[#464555] mt-1">
                  Proactive capacity rebalancing ends weekend fire drills.
                </p>
              </div>
            </div>

            <div className="reveal-on-scroll metric-card bg-[#eff4ff] p-6 rounded-2xl flex flex-col justify-between hover:bg-[#e5eeff] transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-[#dce9ff]/60">
              <Clock size={28} className="text-[#3525cd] mb-4" />
              <div>
                <span className="metric-number text-5xl font-black text-[#0b1c30] tracking-tight block">
                  15 hrs
                </span>
                <p className="text-base font-bold text-[#0b1c30] mt-2">
                  Saved per sprint / lead
                </p>
                <p className="text-xs text-[#464555] mt-1">
                  Reclaim executive hours lost to manual status updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: TESTIMONIAL / SOCIAL PROOF */}
        <section
          className="py-16 px-6 lg:px-12 bg-[#eff4ff]/40 w-full border-y border-[#dce9ff]/60"
          id="testimonials"
        >
          <div className="reveal-on-scroll max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-14 shadow-lg flex flex-col md:flex-row items-center gap-10 border border-[#c7c4d8]/30 hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mb-4 bg-[#cbdbf5] ring-4 ring-[#3525cd]/10">
                <img
                  className="w-full h-full object-cover"
                  alt="Claire Chen"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
                />
              </div>
              <h3 className="text-lg font-bold text-[#0b1c30]">Claire Chen</h3>
              <p className="text-xs text-[#464555]">
                VP of Engineering at CloudScale
              </p>
              <div className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#eff4ff] text-[#3525cd] text-xs font-semibold">
                <CheckCircle2 size={13} /> Verified Enterprise User
              </div>
            </div>

            <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l md:border-[#e5eeff] md:pl-10 pt-6 md:pt-0">
              <div className="flex items-center gap-1 text-[#712ae2] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl text-[#0b1c30] italic font-medium leading-relaxed mb-6">
                “WorkNest has fundamentally transformed how our 180 engineers
                operate. The autonomous sprint telemetry caught a four-day
                release delay three weeks before our public launch. We rebalanced
                two microservice squads in ten minutes. It is irreplaceable.”
              </blockquote>
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#464555]">
                <div>
                  <strong className="text-[#0b1c30] text-sm">180+</strong>{" "}
                  Engineers Onboarded
                </div>
                <div>
                  <strong className="text-[#0b1c30] text-sm">0</strong> Missed
                  Production Cycles
                </div>
                <div>
                  <strong className="text-[#0b1c30] text-sm">3.2x</strong>{" "}
                  Velocity Gain
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: PRICING COMPARISON MATRIX */}
        <section
          className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full"
          id="pricing-matrix"
        >
          <div className="reveal-on-scroll text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#3525cd] uppercase tracking-wider">
              Predictable Investment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-2 mb-4">
              Simple, transparent plans for every stage of growth
            </h2>
            <p className="text-base sm:text-lg text-[#464555]">
              Start free with up to 10 contributors. Scale up to predictive
              machine intelligence when velocity demands it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="reveal-on-scroll bg-[#eff4ff] rounded-2xl p-8 flex flex-col justify-between hover:bg-[#e5eeff] transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-[#dce9ff]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#0b1c30]">Starter</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-xs font-semibold text-[#464555]">
                    Early Stage
                  </span>
                </div>
                <p className="text-xs text-[#464555] mb-6">
                  Everything an agile seed team needs to manage sprints cleanly.
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-black text-[#0b1c30]">$0</span>
                  <span className="text-sm text-[#464555]"> / month forever</span>
                </div>
                <ul className="space-y-3 text-xs text-[#0b1c30] font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> Up to 10
                    team seats
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> Full Kanban &amp;
                    List backlog views
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> Unlimited task
                    creation &amp; docs
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> GitHub / GitLab
                    baseline sync
                  </li>
                </ul>
              </div>
              <Link
                to="/register"
                className="w-full py-3 rounded-xl bg-white hover:bg-[#e5eeff] text-[#0b1c30] text-xs font-bold transition-colors shadow-xs text-center border border-[#c7c4d8]/40"
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro Team */}
            <div className="reveal-on-scroll bg-white rounded-2xl p-8 shadow-xl relative flex flex-col justify-between ring-2 ring-[#712ae2] hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#712ae2] text-white text-xs font-bold shadow-sm whitespace-nowrap">
                Most Popular • 14-Day Free Trial
              </div>
              <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                  <h3 className="text-xl font-bold text-[#0b1c30]">Pro Team</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#eaddff] text-[#25005a] text-xs font-bold">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-[#464555] mb-6">
                  Autonomous telemetry &amp; capacity rebalancing for scaling
                  engineering orgs.
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-black text-[#0b1c30]">$18</span>
                  <span className="text-sm text-[#464555]">
                    {" "}
                    / user / month
                  </span>
                </div>
                <ul className="space-y-3 text-xs text-[#0b1c30] font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#712ae2]" /> Unlimited
                    team members
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#712ae2]" /> Real-time
                    AI Sprint Telemetry 3.4
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#712ae2]" /> Automated
                    Workload Mesh &amp; load-shedding
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#712ae2]" /> Predictive
                    delay &amp; anomaly alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#712ae2]" /> Custom
                    automation flows &amp; webhooks
                  </li>
                </ul>
              </div>
              <Link
                to="/register"
                className="w-full py-3.5 rounded-xl bg-[#712ae2] hover:bg-[#8a4cfc] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg text-center"
              >
                Start Pro Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="reveal-on-scroll bg-[#eff4ff] rounded-2xl p-8 flex flex-col justify-between hover:bg-[#e5eeff] transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-[#dce9ff]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-[#0b1c30]">
                    Enterprise
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-xs font-semibold text-[#464555]">
                    Global Scale
                  </span>
                </div>
                <p className="text-xs text-[#464555] mb-6">
                  Dedicated deployment, advanced audit logs, and tailored ML
                  model parameters.
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-black text-[#0b1c30]">
                    Custom
                  </span>
                  <span className="text-sm text-[#464555]">
                    {" "}
                    / bespoke contract
                  </span>
                </div>
                <ul className="space-y-3 text-xs text-[#0b1c30] font-medium mb-8">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> Everything in
                    Pro
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> Self-hosted
                    private cloud or VPC agent
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> Custom SSO,
                    SAML, &amp; Okta provisioning
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-[#3525cd]" /> Dedicated
                    Solutions Architect &amp; 99.99% SLA
                  </li>
                </ul>
              </div>
              <a
                href="mailto:enterprise@worknest.dev?subject=WorkNest%20Enterprise%20Inquiry"
                className="w-full py-3 rounded-xl bg-white hover:bg-[#e5eeff] text-[#0b1c30] text-xs font-bold transition-colors shadow-xs text-center border border-[#c7c4d8]/40"
              >
                Talk to Enterprise Sales
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7: HIGH-CONVERSION FINAL CTA BANNER */}
        <section className="px-6 lg:px-12 pb-24 max-w-7xl mx-auto w-full">
          <div className="reveal-on-scroll relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#3525cd] via-[#712ae2] to-[#4f46e5] p-10 sm:p-16 text-white shadow-2xl flex flex-col items-center text-center">
            {/* Background elements */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#eaddff]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 backdrop-blur-md">
                <Rocket size={15} /> Ready in under 90 seconds
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
                Ready to give your team unfair velocity?
              </h2>

              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-10">
                Join thousands of engineering teams that never miss target ship
                dates. Connect your repos, invite your squad, and let autonomous
                telemetry do the rest.
              </p>

              {/* Form */}
              <form
                onSubmit={handleCtaSubmit}
                className="w-full max-w-md mx-auto flex flex-col sm:flex-row gap-2 bg-white p-1.5 rounded-2xl shadow-xl mb-4"
              >
                <input
                  type="email"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="w-full px-4 py-3 bg-transparent text-[#0b1c30] text-sm placeholder:text-[#777587] focus:outline-none"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap px-6 py-3 rounded-xl bg-[#712ae2] text-white text-xs font-bold hover:bg-[#8a4cfc] transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <span>Get Started</span>
                  <ArrowRight size={15} />
                </button>
              </form>

              {ctaSubmitted && (
                <p className="font-semibold text-xs text-[#0b1c30] bg-[#eaddff] py-1.5 px-4 rounded-full mb-4 inline-block animate-fade-in shadow-sm">
                  🎉 Workspace invitation link sent! Check your inbox.
                </p>
              )}

              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium mt-4">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> Free 14-day Pro tier
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#eff4ff] border-t border-[#dce9ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2.5 text-[#0b1c30] mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#3525cd] flex items-center justify-center text-white">
                  <Cpu size={18} />
                </div>
                <span className="text-base font-bold text-[#0b1c30]">
                  WorkNest
                </span>
              </div>
              <p className="text-xs text-[#464555] leading-relaxed mb-4">
                Manage Smarter, Work Better. Built for velocity, alignment, and
                focused engineering execution.
              </p>
              <div className="flex items-center gap-2 text-[#464555]">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:text-[#0b1c30] transition-colors border border-[#dce9ff]"
                >
                  <Share2 size={16} />
                </a>
                <a
                  href="https://slack.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:text-[#0b1c30] transition-colors border border-[#dce9ff]"
                >
                  <MessageSquare size={16} />
                </a>
                <a
                  href="https://worknest.dev"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center hover:text-[#0b1c30] transition-colors border border-[#dce9ff]"
                >
                  <Globe size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-xs text-[#464555]">
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#deep-dive"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Deep Ergonomics
                  </a>
                </li>
                <li>
                  <Link
                    to="/ai-insights"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    AI Intelligence
                  </Link>
                </li>
                <li>
                  <a
                    href="#pricing-matrix"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <Link
                    to="/tasks"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Task Boards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-[#464555]">
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    API Reference
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Community Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Status Monitor
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-[#464555]">
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    About WorkNest
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Security &amp; Trust
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-[#0b1c30] transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-[#0b1c30] uppercase tracking-wider mb-4">
                Newsletter
              </h4>
              <p className="text-xs text-[#464555] mb-3 leading-relaxed">
                Weekly product engineering insights and high-output operating
                playbooks.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-9 px-3 rounded-xl bg-white text-xs text-[#0b1c30] placeholder:text-[#777587] border border-[#c7c4d8]/60 focus:outline-none focus:ring-2 focus:ring-[#3525cd]"
                />
                <button
                  type="submit"
                  className="w-full h-9 rounded-xl bg-[#3525cd] text-white text-xs font-bold hover:bg-[#4f46e5] transition-all"
                >
                  Subscribe
                </button>
              </form>
              {newsletterSubmitted && (
                <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                  ✓ Thanks for subscribing!
                </p>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-[#dce9ff] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#464555]">
            <span>© 2026 WorkNest Inc. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <span>System Operations Normal</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-[#0b1c30]">v3.4.1 Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive 2-Min Demo Modal Preview */}
      {isDemoModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0b1c30]/70 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setIsDemoModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl relative border border-[#c7c4d8]/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e5eeff]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#3525cd]/10 text-[#3525cd] flex items-center justify-center">
                  <Play size={14} className="fill-current" />
                </div>
                <span className="text-base font-bold text-[#0b1c30]">
                  WorkNest 2-Minute Product Overview
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(false)}
                className="p-1 rounded-lg hover:bg-[#eff4ff] text-[#464555] hover:text-[#0b1c30] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Player Frame Preview */}
            <div className="w-full aspect-video bg-[#213145] rounded-xl flex flex-col items-center justify-center text-white relative overflow-hidden group shadow-inner">
              <img
                className="w-full h-full object-cover opacity-60"
                alt="Product preview walkthrough"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                <div className="w-16 h-16 rounded-full bg-[#712ae2] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={28} className="fill-current ml-1" />
                </div>
                <span className="text-xs font-semibold text-white/90 mt-3 drop-shadow">
                  Interactive High-Velocity Telemetry Walkthrough
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-xs text-[#464555]">
                Includes: Auto-rebalance heuristics, Kanban shortcuts &amp; burndown alerts
              </span>
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#eff4ff] hover:bg-[#dce9ff] text-xs font-bold text-[#0b1c30] transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}