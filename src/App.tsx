import { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';

// Custom easing for smooth, weighted motion
const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfQDkmxKo7DvARap_JfuQdKgIUFL0PNOpa7jCBOhwqq6b0jxw/viewform?embedded=true";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(0);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Modal accessibility: esc key listener & body scroll lock
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsFormOpen(false);
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isFormOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFormOpen, mobileMenuOpen]);

  const openForm = () => {
    setMobileMenuOpen(false);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-white selection:text-[#0A0A0A] antialiased">
      
      {/* Structural Grid Overlay lines (subtle studio design cue) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-[1400px] mx-auto px-6 md:px-12 opacity-10">
        <div className="w-[1px] h-full bg-zinc-700" />
        <div className="w-[1px] h-full bg-zinc-700 hidden sm:block" />
        <div className="w-[1px] h-full bg-zinc-700 hidden lg:block" />
        <div className="w-[1px] h-full bg-zinc-700" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-display text-lg tracking-wider font-bold text-white uppercase group-hover:text-zinc-300 transition-colors">
              Nathan Scales
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border border-zinc-700 text-zinc-400 rounded-sm">
              Studio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-zinc-400 uppercase">
            <a href="#work" className="hover:text-white transition-colors duration-200">Work</a>
            <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
            <a href="#process" className="hover:text-white transition-colors duration-200">Process</a>
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          </nav>

          {/* Header Action */}
          <div className="hidden md:flex items-center">
            <button
              onClick={openForm}
              className="group relative inline-flex items-center justify-center px-5 py-2.5 bg-white text-[#0A0A0A] font-mono text-xs uppercase font-medium tracking-wider hover:bg-zinc-200 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span>Start a Project</span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="square" />
              ) : (
                <path d="M4 8h16M4 16h16" strokeLinecap="square" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] pt-24 px-6 flex flex-col justify-between pb-12 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-xl font-display font-medium text-zinc-200 border-t border-zinc-800 pt-8">
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">01 / Work</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">02 / Services</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">03 / Process</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors">04 / About</a>
            </nav>
            <div className="space-y-4">
              <button
                onClick={openForm}
                className="w-full py-4 bg-white text-[#0A0A0A] font-mono text-sm uppercase font-semibold tracking-wider text-center"
              >
                Start a Project →
              </button>
              <div className="text-xs font-mono text-zinc-500 text-center">
                Kampala, Uganda — Global Digital Services
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-20">
        
        {/* Section 01: Hero */}
        <section className="min-h-[85vh] flex flex-col justify-center max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: customEase }}
                className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-2"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>01 / Digital Studio — Web / Growth / Software</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: customEase, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] tracking-tight text-white"
              >
                Websites, marketing, and software built around your business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: customEase, delay: 0.2 }}
                className="text-base sm:text-lg text-zinc-400 max-w-[54ch] leading-relaxed font-normal"
              >
                We design high-converting web presences, build automated lead generation engines, and engineer custom software systems tailored specifically to your commercial operations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: customEase, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  onClick={openForm}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A0A0A] font-mono text-sm font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 cursor-pointer shadow-lg"
                >
                  <span>Start a Project</span>
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </button>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center px-8 py-4 border border-zinc-800 text-zinc-300 font-mono text-sm uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all duration-300"
                >
                  View Work ↓
                </a>
              </motion.div>
            </div>

            {/* Right Column: Studio Technical Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: customEase, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="bg-[#1A1A1A] border border-zinc-800 p-6 md:p-8 relative overflow-hidden shadow-2xl">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <div className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                    SYSTEM_ARCHITECTURE // V2.6
                  </div>
                </div>

                {/* Structured Interface Preview Blocks */}
                <div className="space-y-4 font-mono text-xs">
                  {/* Fragment 1: Web Presence */}
                  <div className="bg-[#0A0A0A] border border-zinc-800/80 p-4 transition-colors hover:border-zinc-700">
                    <div className="text-zinc-500 text-[10px] uppercase mb-1">Pillar 01 — Credibility Layer</div>
                    <div className="text-zinc-200 font-medium">HIGH-CONVERTING DIGITAL PRESENCE</div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Performance Index: 99/100</span>
                      <span className="text-zinc-300">UX / Conversion</span>
                    </div>
                  </div>

                  {/* Fragment 2: Lead Gen Engine */}
                  <div className="bg-[#0A0A0A] border border-zinc-800/80 p-4 transition-colors hover:border-zinc-700">
                    <div className="text-zinc-500 text-[10px] uppercase mb-1">Pillar 02 — Acquisition Layer</div>
                    <div className="text-zinc-200 font-medium">QUALIFIED LEAD RESEARCH & CPL PIPELINE</div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Multi-signal Verification</span>
                      <span className="text-white font-semibold">Active Engine</span>
                    </div>
                  </div>

                  {/* Fragment 3: Custom Business Systems */}
                  <div className="bg-[#0A0A0A] border border-zinc-800/80 p-4 transition-colors hover:border-zinc-700">
                    <div className="text-zinc-500 text-[10px] uppercase mb-1">Pillar 03 — Operations Layer</div>
                    <div className="text-zinc-200 font-medium">CUSTOM SOFTWARE & WORKFLOW AUTOMATION</div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Client Intake / CRM Sync</span>
                      <span className="text-zinc-400">Operational</span>
                    </div>
                  </div>
                </div>

                {/* Technical Metric Footer */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span>DEPLOYED: KAMPALA & BEYOND</span>
                  <span>STATUS: OPERATIONAL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 02: Strategic Trust & Positioning Strip */}
        <section className="border-y border-zinc-800 bg-[#0A0A0A] py-12">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 font-mono text-xs uppercase tracking-widest text-zinc-400">
                // POSITIONING STATEMENT
              </div>
              <div className="md:col-span-8">
                <blockquote className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
                  "From first impression to internal workflow, the goal is the same: build digital systems that make the business easier to discover, easier to trust, and easier to operate."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Services */}
        <section id="services" className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-800 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">02 / SERVICES</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
                Connected Capabilities
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-400 max-w-sm">
              Three deliberate capabilities designed to function as one growth engine.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                id: 0,
                num: "01",
                title: "Websites & Digital Presences",
                tagline: "Built for credibility, rapid loading, mobile excellence, and lead conversion.",
                desc: "We engineer websites that represent your business with total commercial authority. No generic templates or clunky page builders—just bespoke, lightning-fast interfaces focused on clear visitor action.",
                capabilities: [
                  "Custom Brand & UI Architecture",
                  "High-Conversion Landing Pages",
                  "Mobile-First Responsive Layouts",
                  "Performance & SEO Optimization",
                  "Structured Business Messaging"
                ]
              },
              {
                id: 1,
                num: "02",
                title: "Digital Marketing & Growth",
                tagline: "Targeted acquisition systems, campaign funnels, and CPL lead generation.",
                desc: "Connecting your business directly to verified, qualified buyers. We build intent-driven acquisition funnels and manage lead research workflows to ensure high client intent.",
                capabilities: [
                  "Cost-Per-Lead (CPL) Campaigns",
                  "Kampala & Regional Business Research",
                  "Conversion Rate Optimization (CRO)",
                  "Campaign Landing Page Engineering",
                  "Multi-Signal Lead Verification"
                ]
              },
              {
                id: 2,
                num: "03",
                title: "Custom Software & Business Systems",
                tagline: "Internal operational tools, client intake portals, and workflow automation.",
                desc: "Solving operational bottlenecks with dedicated software. We design internal dashboards, intake forms, automated CRM integrations, and client portals that streamline day-to-day work.",
                capabilities: [
                  "Custom Internal Business Tools",
                  "Automated Client Intake & Discovery",
                  "CRM & Google Sheets Integrations",
                  "Operational Dashboards",
                  "Custom API Workflows & Resend Messaging"
                ]
              }
            ].map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className={`border border-zinc-800 transition-all duration-300 cursor-pointer ${
                  activeService === service.id ? "bg-[#1A1A1A] border-zinc-700" : "bg-[#0A0A0A] hover:bg-[#121212]"
                }`}
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start md:items-center gap-6">
                    <span className="font-mono text-sm text-zinc-500 pt-1 md:pt-0">{service.num}</span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                      <p className="text-sm text-zinc-400 mt-1 font-normal">{service.tagline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 self-end md:self-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 hidden sm:inline">
                      {activeService === service.id ? "Collapse" : "Explore Detail"}
                    </span>
                    <span className="font-mono text-lg text-zinc-400">
                      {activeService === service.id ? "−" : "+"}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: customEase }}
                      className="overflow-hidden border-t border-zinc-800/80"
                    >
                      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 bg-[#0A0A0A]/50">
                        <div className="md:col-span-6 space-y-4">
                          <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400">Scope Overview</h4>
                          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                            {service.desc}
                          </p>
                        </div>
                        <div className="md:col-span-6 space-y-4">
                          <h4 className="font-mono text-xs uppercase tracking-widest text-zinc-400">Key Deliverables</h4>
                          <ul className="space-y-2">
                            {service.capabilities.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                                <span className="text-zinc-600">—</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Selected Work / Real Repository Showcase */}
        <section id="work" className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">03 / SELECTED WORK</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
                Engineered Systems & Proof
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-400 max-w-md">
              Real projects built around verified commercial criteria, lead qualification, and business workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Featured Project Card 01 */}
            <div className="lg:col-span-7 bg-[#1A1A1A] border border-zinc-800 p-8 flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <span className="font-mono text-xs text-zinc-500 uppercase">SYSTEM ARCHITECTURE // 01</span>
                  <span className="font-mono text-xs text-white bg-zinc-800 px-2 py-0.5">SOFTWARE / B2B PIPELINE</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Kampala Lead Research Engine & CRM Pipeline
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  Custom lead intelligence system built to filter businesses in Greater Kampala across strict budget tiers (USD/UGX). Integrates automated multi-signal capacity verification (URSB status, premises, active ad spend) prior to CRM onboarding.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-zinc-800">
                <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                  <div>
                    <div className="text-zinc-500 uppercase text-[10px]">Filter Discipline</div>
                    <div className="text-zinc-200 mt-0.5">Strict Capacity Evidence</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 uppercase text-[10px]">Stack Integration</div>
                    <div className="text-zinc-200 mt-0.5">Resend / Sheets / CRM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Project Card 02 */}
            <div className="lg:col-span-5 bg-[#1A1A1A] border border-zinc-800 p-8 flex flex-col justify-between group hover:border-zinc-700 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <span className="font-mono text-xs text-zinc-500 uppercase">PROJECT // 02</span>
                  <span className="font-mono text-xs text-zinc-300">WEB / COMMERCIAL</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4">
                  Uganda Construction & Commercial Contractors Portal
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                  High-converting digital presence built specifically for high-capacity commercial construction firms in Mukono, Wakiso, and Kampala to capture commercial tender inquiries.
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-800 font-mono text-xs flex justify-between items-center text-zinc-400">
                <span>UI Architecture & Conversion</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

            {/* Supporting Project Card 03 */}
            <div className="lg:col-span-12 bg-[#1A1A1A] border border-zinc-800 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-zinc-700 transition-all duration-300">
              <div className="max-w-2xl">
                <div className="font-mono text-xs text-zinc-500 uppercase mb-2">SYSTEM // 03 — INTAKE MODAL ENGINE</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Client Discovery & Automated Qualification Overlay
                </h3>
                <p className="text-zinc-400 text-sm font-normal">
                  In-page non-disruptive discovery modal keeping visitors inside the site container while capturing structured client project scope and routing to review queues.
                </p>
              </div>
              <button
                onClick={openForm}
                className="font-mono text-xs uppercase tracking-wider px-6 py-3 border border-zinc-700 text-white hover:bg-white hover:text-[#0A0A0A] transition-all whitespace-nowrap"
              >
                Test Overlay Engine →
              </button>
            </div>

          </div>
        </section>

        {/* Section 05: Process Timeline */}
        <section id="process" className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">04 / PROCESS</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-white">
                How We Execute
              </h2>
            </div>
            <p className="text-sm font-mono text-zinc-400 max-w-xs">
              A structured method ensuring commercial intent, precise code, and predictable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: "01", step: "Understand", desc: "Audit business model, commercial target, customer pain points, and current digital gaps." },
              { num: "02", step: "Structure", desc: "Define content hierarchy, conversion pathways, visual direction, and software data schema." },
              { num: "03", step: "Build", desc: "Engineered frontend development, custom responsive layout, speed optimization, and form routing." },
              { num: "04", step: "Refine", desc: "Rigorous responsive testing across screen viewports, accessibility audit, and lead funnel testing." },
              { num: "05", step: "Launch", desc: "Seamless deployment, live analytics setup, automated notification flows, and long-term scaling." }
            ].map((p, idx) => (
              <div key={idx} className="bg-[#1A1A1A] border border-zinc-800 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors">
                <div>
                  <span className="font-mono text-xs text-zinc-500 block mb-4">// STEP {p.num}</span>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{p.step}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">{p.desc}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-800/60 font-mono text-[10px] text-zinc-600">
                  PHASE_{p.num}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 06: Differentiation / About */}
        <section id="about" className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 border-t border-zinc-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">05 / APPROACH</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Why Work With Nathan Scales?
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                Most agencies treat websites as static visual brochures. We treat your digital presence as a revenue-generating commercial engine connected directly to lead acquisition and custom backend operations.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "Business-First Engineering",
                  desc: "We don't focus solely on visuals. Every layout, copy line, and system feature is chosen to solve specific commercial problems: getting leads, establishing credibility, and saving manual operational hours."
                },
                {
                  title: "Design + Development + Systems Under One Roof",
                  desc: "Instead of hiring separate designers, frontend coders, lead gen specialists, and software developers, you get a cohesive ecosystem where the website seamlessly feeds into your intake and CRM software."
                },
                {
                  title: "Direct Engineering Communication",
                  desc: "You speak directly with the builder who designs and writes the code. No middle managers or delayed feedback loops."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1A1A1A] border border-zinc-800 p-6 md:p-8">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 07: Final Call to Action */}
        <section id="contact" className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 border-t border-zinc-800">
          <div className="bg-[#1A1A1A] border border-zinc-800 p-8 md:p-16 relative overflow-hidden">
            <div className="max-w-3xl space-y-8 relative z-10">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                // ENGAGEMENT DECISION
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
                Have something that needs to be built?
              </h2>
              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Tell us what your business needs, what is not working, and what you want to improve. We'll use that information to understand whether a website, marketing system, custom software, or a combination makes sense.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={openForm}
                  className="group inline-flex items-center justify-center px-8 py-5 bg-white text-[#0A0A0A] font-mono text-sm font-semibold uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 cursor-pointer shadow-xl"
                >
                  <span>Start a Project</span>
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </button>
                
                <a
                  href="mailto:nathantendo.saas@gmail.com?subject=Inquiry%20for%20Nathan%20Scales&body=Hello,%20I'd%20like%20to%20discuss%20a%20project."
                  className="inline-flex items-center justify-center px-8 py-5 border border-zinc-700 text-zinc-300 font-mono text-sm uppercase tracking-wider hover:bg-zinc-900 hover:text-white transition-all duration-300"
                >
                  Send Direct Email ✉
                </a>
              </div>

              <div className="text-xs font-mono text-zinc-500 pt-2">
                In-page overlay intake form • No page redirect required
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-[#0A0A0A] py-12 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <div className="font-display font-bold text-lg text-white uppercase tracking-wider">
              Nathan Scales
            </div>
            <p className="text-xs font-mono text-zinc-500 mt-1">
              Digital Studio — Web, Growth & Software Systems
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-mono text-zinc-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <button onClick={openForm} className="hover:text-white transition-colors text-zinc-200 underline">Start a Project</button>
          </div>

          <div className="text-xs font-mono text-zinc-500">
            © 2026 Nathan Scales. Kampala, Uganda.
          </div>
        </div>
      </footer>

      {/* Google Form Modal Overlay */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, ease: customEase }}
              className="bg-[#1A1A1A] border border-zinc-800 w-full max-w-4xl h-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0A0A0A]">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 bg-white rounded-full" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-medium">
                    Start a Project // Client Discovery Intake
                  </span>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors rounded-sm cursor-pointer"
                  aria-label="Close Intake Form Modal"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Embedded Google Form Container */}
              <div className="flex-1 w-full bg-[#0A0A0A] relative">
                <iframe
                  src={GOOGLE_FORM_URL}
                  className="w-full h-full border-0"
                  title="Nathan Scales Client Discovery Form"
                >
                  Loading form...
                </iframe>
              </div>

              {/* Modal Footer Bar */}
              <div className="px-6 py-3 border-t border-zinc-800 bg-[#0A0A0A] flex justify-between items-center text-[11px] font-mono text-zinc-500">
                <span>PRESS ESC TO CLOSE</span>
                <span>NATHAN SCALES DIRECT INTAKE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
