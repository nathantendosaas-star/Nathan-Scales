interface AboutPageProps {
  onOpenForm: () => void;
}

export default function AboutPage({ onOpenForm }: AboutPageProps) {
  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
          About Nathan Scales
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Business-First Engineering & Digital Strategy
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          We combine bespoke web design, digital lead acquisition, and operational software systems into a single cohesive capability.
        </p>
      </div>

      {/* Main Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-8 space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#0F172A]">Our Approach</h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Most digital agencies treat websites as isolated visual brochures. We view your web presence as a core commercial asset connected directly to lead acquisition and operational business workflows.
            </p>
            <p className="text-sm text-[#475569] leading-relaxed">
              Every interface, content layout, and software integration is deliberately built to solve business problems: building credibility, generating high-intent leads, and saving valuable team hours.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {[
            {
              title: "Business-First Focus",
              desc: "We prioritize commercial clarity and speed over superficial design trends. Our focus is ensuring your prospective clients quickly understand your value and take action."
            },
            {
              title: "Unified Service Ecosystem",
              desc: "Instead of managing separate website agencies, marketing contractors, and software freelancers, you receive an integrated solution where design, growth, and backend systems work together."
            },
            {
              title: "Direct Specialist Collaboration",
              desc: "Work directly with the builder engineering your system. No unnecessary account managers, communication layers, or delayed feedback loops."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] rounded-2xl p-8 space-y-2">
              <h3 className="font-display text-lg font-bold text-[#0F172A]">{item.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="space-y-8 pt-8 border-t border-[#E2E8F0]">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Process</span>
          <h2 className="font-display text-3xl font-bold text-[#0F172A] mt-1">How We Execute</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { step: "01", title: "Understand", desc: "Audit your business goals, target audience, and current digital bottlenecks." },
            { step: "02", title: "Structure", desc: "Define content hierarchy, layout architecture, and software parameters." },
            { step: "03", title: "Build", desc: "Engineer custom responsive frontends, fast loading speeds, and data workflows." },
            { step: "04", title: "Refine", desc: "Perform rigorous quality testing across devices, speed audits, and lead funnels." },
            { step: "05", title: "Launch", desc: "Deploy seamlessly, configure analytics, and ensure long-term operational performance." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold text-[#94A3B8]">Phase {item.step}</span>
                <h3 className="font-display text-base font-bold text-[#0F172A] mt-2 mb-1">{item.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Banner */}
      <div className="bg-[#0F172A] text-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl font-bold">Ready to discuss your business requirements?</h2>
          <p className="text-sm text-[#94A3B8] mt-1">Start a conversation using our direct client intake form.</p>
        </div>
        <button
          onClick={onOpenForm}
          className="px-6 py-3 bg-white text-[#0F172A] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#F8FAFC] transition-colors whitespace-nowrap cursor-pointer"
        >
          Start a Project →
        </button>
      </div>
    </div>
  );
}
