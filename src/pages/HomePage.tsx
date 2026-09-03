import { motion } from 'motion/react';

interface HomePageProps {
  onOpenForm: () => void;
  setActiveTab: (tab: string) => void;
}

export default function HomePage({ onOpenForm, setActiveTab }: HomePageProps) {
  const navigateTo = (tab: string, e?: React.MouseEvent) => {
    if (e && (e.ctrlKey || e.metaKey)) return;
    if (e) e.preventDefault();
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="pt-8 md:pt-14">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full text-xs font-semibold text-[#475569]"
              >
                <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
                <span>DIGITAL STUDIO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] leading-[1.08] tracking-tight"
              >
                Websites, marketing, and software built around your business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-[#475569] max-w-[50ch] leading-relaxed"
              >
                We design high-converting web presences, structure targeted acquisition channels, and engineer custom operational software tailored to your commercial goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  onClick={onOpenForm}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0F172A] text-white font-medium text-sm rounded-md hover:bg-[#1E293B] transition-all duration-200 cursor-pointer"
                >
                  Start a Project
                </button>
                <a
                  href="/work"
                  onClick={(e) => navigateTo('work', e)}
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white border border-[#E2E8F0] text-[#334155] font-medium text-sm rounded-md hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-all duration-200 cursor-pointer"
                >
                  View Work →
                </a>
              </motion.div>
            </div>

            {/* Right Column Visual: Real Featured Work Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div
                onClick={() => navigateTo('work')}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden cursor-pointer hover:border-[#CBD5E1] transition-all duration-200 group"
              >
                <div className="p-5 border-b border-[#F1F5F9] bg-[#F8FAFC] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">Featured Project</span>
                    <span className="text-[#CBD5E1]">/</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0F172A]">Commercial Web</span>
                  </div>
                  <span className="text-xs font-semibold text-[#0F172A] group-hover:underline">View →</span>
                </div>

                <div className="p-6 space-y-5">
                  <div className="space-y-1">
                    <h2 className="font-display text-xl font-bold text-[#0F172A] group-hover:text-[#1E293B]">
                      Commercial Construction & Engineering Portal
                    </h2>
                    <p className="text-xs text-[#64748B]">
                      Enterprise web presence & tender inquiry platform
                    </p>
                  </div>

                  {/* Authentic visual preview fragment */}
                  <div className="bg-[#0F172A] text-white rounded-lg p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-[11px] font-mono uppercase text-slate-400">Tender Inquiry Intake</span>
                      <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded font-mono">Live System</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 space-y-0.5">
                        <div className="text-[10px] text-slate-400">Project Type</div>
                        <div className="font-medium text-slate-200 truncate">Enterprise Commercial</div>
                      </div>
                      <div className="bg-slate-900/80 p-2.5 rounded border border-slate-800 space-y-0.5">
                        <div className="text-[10px] text-slate-400">Conversion UX</div>
                        <div className="font-medium text-emerald-400">Direct Tender Intake</div>
                      </div>
                    </div>

                    <div className="pt-1 flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">React</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">Tailwind CSS</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">TypeScript</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs text-[#64748B] font-medium border-t border-[#F1F5F9]">
                    <span>Client: Enterprise Contractor</span>
                    <span className="text-[#0F172A] font-semibold">Active Production</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Positioning Statement Section */}
      <section className="bg-white border-y border-[#E2E8F0] py-10 md:py-12">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-3 text-xs font-bold uppercase tracking-widest text-[#64748B]">
              Our Philosophy
            </div>
            <div className="md:col-span-9">
              <blockquote className="text-lg md:text-xl text-[#1E293B] font-medium leading-relaxed">
                "From first impression to internal workflow, design is only useful when it makes the business easier to understand, trust, and scale."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section — Editorial Layout */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Capabilities</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-1 text-[#0F172A]">
              Services
            </h2>
          </div>
          <a
            href="/services"
            onClick={(e) => navigateTo('services', e)}
            className="text-xs font-semibold text-[#0F172A] hover:underline cursor-pointer"
          >
            Full Capabilities Detail →
          </a>
        </div>

        {/* Editorial Rows replacing repetitive card grid */}
        <div className="divide-y divide-[#E2E8F0]">
          {[
            {
              num: "01",
              title: "WEBSITES",
              summary: "Websites that make the business easier to understand, trust, and contact.",
              capabilities: ["Web Design", "UX Strategy", "Performance Optimization", "SEO Structure", "Conversion Layouts"]
            },
            {
              num: "02",
              title: "GROWTH",
              summary: "Digital acquisition systems built around specific audiences and offers.",
              capabilities: ["Lead Generation", "Landing Pages", "Campaign Funnels", "Conversion Optimization", "Lead Scoring"]
            },
            {
              num: "03",
              title: "SOFTWARE",
              summary: "Custom systems for businesses that need more than a website.",
              capabilities: ["Internal Dashboards", "Client Portals", "Workflow Automation", "CRM Integrations", "Custom APIs"]
            }
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigateTo('services')}
              className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-white/60 transition-colors cursor-pointer group"
            >
              <div className="md:col-span-1 text-sm font-mono font-bold text-[#94A3B8]">
                {item.num}
              </div>
              <div className="md:col-span-4 space-y-1">
                <h3 className="font-display text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#1E293B]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {item.summary}
                </p>
              </div>
              <div className="md:col-span-7 flex flex-wrap gap-2 md:justify-end items-center self-center pt-2 md:pt-0">
                {item.capabilities.map((cap, cIdx) => (
                  <span
                    key={cIdx}
                    className="text-xs font-medium px-3 py-1 bg-white border border-[#E2E8F0] text-[#334155] rounded-md"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Portfolio</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold mt-1 text-[#0F172A]">
              Selected Work
            </h2>
          </div>
          <a
            href="/work"
            onClick={(e) => navigateTo('work', e)}
            className="text-xs font-semibold text-[#0F172A] hover:underline cursor-pointer"
          >
            View All Projects →
          </a>
        </div>

        {/* Visual Scale Hierarchy: Featured Project + Secondary Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Dominant Project */}
          <div
            onClick={(e) => navigateTo('work', e)}
            className="lg:col-span-7 bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-6 cursor-pointer hover:border-[#CBD5E1] transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                Primary Case Study
              </span>
              <span className="text-xs font-medium text-[#0F172A] group-hover:underline">
                Read Details →
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold text-[#0F172A]">
                Lead Research Engine & Verification Pipeline
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Custom commercial research pipeline designed to identify target businesses, verify operating signals, and automatically sync qualified leads directly into CRM workflows.
              </p>
            </div>

            <div className="bg-[#0F172A] text-white p-6 rounded-lg space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-slate-400 text-[11px]">
                <span>Automated Data Pipeline</span>
                <span className="text-emerald-400">Connected & Syncing</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">Verification</div>
                  <div className="text-slate-100 font-bold mt-0.5">Multi-Signal</div>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">CRM Sync</div>
                  <div className="text-slate-100 font-bold mt-0.5">Automated</div>
                </div>
                <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-sans">Filtering</div>
                  <div className="text-slate-100 font-bold mt-0.5">Custom Rules</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Projects Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div
              onClick={(e) => navigateTo('work', e)}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4 cursor-pointer hover:border-[#CBD5E1] transition-all group flex-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                  Web & Enterprise
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mt-2 mb-2">
                  Commercial Contractors Portal
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  High-converting web platform engineered for enterprise commercial contractors to showcase major projects and capture tender inquiry submissions.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F5F9] flex justify-between items-center text-xs text-[#64748B]">
                <span>Tender Inquiry UX</span>
                <span className="text-[#0F172A] font-semibold group-hover:underline">View →</span>
              </div>
            </div>

            <div
              onClick={(e) => navigateTo('work', e)}
              className="bg-white border border-[#E2E8F0] rounded-xl p-6 space-y-4 cursor-pointer hover:border-[#CBD5E1] transition-all group flex-1 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                  Growth / Conversion UX
                </span>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mt-2 mb-2">
                  Client Discovery Intake System
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  In-page non-disruptive discovery overlay designed to qualify prospective clients and route detailed scope specifications into review queues.
                </p>
              </div>
              <div className="pt-4 border-t border-[#F1F5F9] flex justify-between items-center text-xs text-[#64748B]">
                <span>In-Page Modal Architecture</span>
                <span className="text-[#0F172A] font-semibold group-hover:underline">View →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA Section */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="bg-[#0F172A] text-white rounded-xl p-8 md:p-14 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Initiate Project
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              Have something that needs building?
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-normal">
              Tell us about your business goals. Whether it's a new website, a growth funnel, or custom internal software, we are ready to execute.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenForm}
              className="px-7 py-3.5 bg-white text-[#0F172A] font-semibold text-sm rounded-md hover:bg-[#F8FAFC] transition-colors cursor-pointer text-center"
            >
              Start a Project
            </button>
            <a
              href="/contact"
              onClick={(e) => navigateTo('contact', e)}
              className="px-7 py-3.5 border border-[#334155] text-white font-medium text-sm rounded-md hover:bg-[#1E293B] transition-colors text-center cursor-pointer"
            >
              Contact Details & Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
