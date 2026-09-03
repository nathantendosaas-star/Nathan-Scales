import { motion } from 'motion/react';

interface HomePageProps {
  onOpenForm: () => void;
  setActiveTab: (tab: string) => void;
}

export default function HomePage({ onOpenForm, setActiveTab }: HomePageProps) {
  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="pt-12 md:pt-20">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full text-xs font-semibold text-[#475569]"
              >
                <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
                <span>Digital Studio — Web, Growth & Software Systems</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-[#0F172A] leading-[1.08] tracking-tight"
              >
                Websites, marketing, and software built around your business.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-[#475569] max-w-[52ch] leading-relaxed"
              >
                We design high-converting web presences, structure target marketing channels, and engineer bespoke business systems tailored specifically to your commercial goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  onClick={onOpenForm}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#0F172A] text-white font-medium text-sm rounded-lg hover:bg-[#1E293B] transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Start a Project</span>
                  <span className="ml-2">↗</span>
                </button>
                <button
                  onClick={() => navigateTo('work')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#E2E8F0] text-[#334155] font-medium text-sm rounded-lg hover:bg-[#F8FAFC] hover:text-[#0F172A] transition-all duration-200 shadow-sm cursor-pointer"
                >
                  View Featured Work ↓
                </button>
              </motion.div>
            </div>

            {/* Right Column Visual: Clean Studio Portfolio / Feature Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                    Studio Core Offerings
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#CBD5E1] transition-colors">
                    <div className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      01. Web Presence & Positioning
                    </div>
                    <p className="text-sm font-medium text-[#334155]">
                      High-converting web design focused on speed, credibility, and visitor engagement.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#CBD5E1] transition-colors">
                    <div className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      02. Digital Growth & Marketing
                    </div>
                    <p className="text-sm font-medium text-[#334155]">
                      Intent-driven customer acquisition funnels and qualified client pipelines.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl hover:border-[#CBD5E1] transition-colors">
                    <div className="text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-1">
                      03. Custom Business Software
                    </div>
                    <p className="text-sm font-medium text-[#334155]">
                      Automated client intake, internal dashboards, and operational CRM integration.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-medium text-[#64748B]">
                  <span>Dedicated Client Execution</span>
                  <span className="text-[#0F172A] font-semibold">Active & Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Positioning Section */}
      <section className="bg-white border-y border-[#E2E8F0] py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-widest text-[#64748B]">
              Core Methodology
            </div>
            <div className="md:col-span-8">
              <blockquote className="text-xl md:text-2xl text-[#1E293B] font-normal leading-relaxed">
                "From first impression to internal workflow, the goal is consistent: build digital systems that make your business easier to discover, easier to trust, and easier to scale."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-[#0F172A]">
              Connected Capabilities
            </h2>
          </div>
          <button
            onClick={() => navigateTo('services')}
            className="text-sm font-semibold text-[#0F172A] hover:underline"
          >
            Explore all capabilities →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Websites & Web Presences",
              desc: "Bespoke digital presences engineered for maximum credibility, mobile optimization, and conversion clarity."
            },
            {
              num: "02",
              title: "Digital Marketing & Growth",
              desc: "Targeted acquisition systems, campaign funnels, and structured qualified lead generation."
            },
            {
              num: "03",
              title: "Custom Business Systems",
              desc: "Tailored internal tools, automated client discovery portals, and CRM operational workflows."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow">
              <div>
                <span className="text-sm font-bold text-[#94A3B8]">{item.num}</span>
                <h3 className="font-display text-xl font-bold text-[#0F172A] mt-4 mb-3">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
              <button
                onClick={() => navigateTo('services')}
                className="mt-8 text-xs font-semibold uppercase tracking-wider text-[#0F172A] text-left hover:underline"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work Highlights */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#E2E8F0] gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Selected Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-[#0F172A]">
              Engineered Systems & Case Studies
            </h2>
          </div>
          <button
            onClick={() => navigateTo('work')}
            className="text-sm font-semibold text-[#0F172A] hover:underline"
          >
            View all projects →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-full uppercase tracking-wider">
                Software & B2B Pipeline
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0F172A] mt-4 mb-3">
                Lead Research Engine & Verification Pipeline
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Custom commercial research pipeline designed to identify target businesses, verify operating signals, and automatically sync qualified leads directly into CRM systems.
              </p>
            </div>
            <div className="pt-6 border-t border-[#F1F5F9] flex justify-between items-center text-xs text-[#64748B]">
              <span>Lead Verification & Workflow Automation</span>
              <button onClick={() => navigateTo('work')} className="text-[#0F172A] font-semibold hover:underline">Read Case Study →</button>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-full uppercase tracking-wider">
                Web & Commercial Architecture
              </span>
              <h3 className="font-display text-2xl font-bold text-[#0F172A] mt-4 mb-3">
                Commercial Contractors & Industry Portal
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                High-converting web platform engineered for enterprise commercial contractors to showcase major project portfolios and capture tender inquiry submissions.
              </p>
            </div>
            <div className="pt-6 border-t border-[#F1F5F9] flex justify-between items-center text-xs text-[#64748B]">
              <span>UI Architecture & Conversion UX</span>
              <button onClick={() => navigateTo('work')} className="text-[#0F172A] font-semibold hover:underline">Read Case Study →</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1300px] mx-auto px-6 md:px-12">
        <div className="bg-[#0F172A] text-white rounded-2xl p-8 md:p-16 space-y-8 shadow-2xl">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Start Your Project
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready to elevate your digital presence?
            </h2>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed font-normal">
              Tell us what your business needs. Whether it's a new website, a client acquisition funnel, or custom operational software, we are ready to execute.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={onOpenForm}
              className="px-8 py-4 bg-white text-[#0F172A] font-semibold text-sm rounded-lg hover:bg-[#F8FAFC] transition-colors cursor-pointer text-center"
            >
              Start a Project →
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-4 border border-[#334155] text-white font-medium text-sm rounded-lg hover:bg-[#1E293B] transition-colors text-center cursor-pointer"
            >
              Contact Details & Email
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
