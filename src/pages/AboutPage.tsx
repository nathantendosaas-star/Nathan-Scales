interface AboutPageProps {
  onOpenForm: () => void;
}

export default function AboutPage({ onOpenForm }: AboutPageProps) {
  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-10 md:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
          About
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Business-First Digital Strategy & Engineering
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Combining web design, digital acquisition, and operational software systems into an integrated studio capability.
        </p>
      </div>

      {/* Main Narrative Editorial Layout */}
      <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bold Philosophy Statement */}
        <div className="lg:col-span-5 space-y-4">
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-snug">
            Design is only useful when it makes the business clearer, faster to trust, and easier to scale.
          </blockquote>
          <p className="text-sm text-[#475569] leading-relaxed">
            Most digital agencies treat websites as isolated visual brochures. We view your web presence as a core commercial asset connected directly to lead acquisition and operational workflows.
          </p>
        </div>

        {/* Right Column: Editorial Principles with Rules */}
        <div className="lg:col-span-7 divide-y divide-[#E2E8F0]">
          {[
            {
              num: "01",
              title: "BUSINESS-FIRST FOCUS",
              desc: "We prioritize commercial clarity and performance over superficial design gimmicks. Our focus is ensuring prospective clients quickly understand your offer and act."
            },
            {
              num: "02",
              title: "INTEGRATED CAPABILITY",
              desc: "Instead of managing separate agencies, marketing freelancers, and software contractors, you get a cohesive capability where design, growth, and backend systems align."
            },
            {
              num: "03",
              title: "DIRECT SPECIALIST EXECUTION",
              desc: "Work directly with the specialist engineering your system. No unnecessary account managers, layer delays, or bloated overhead."
            }
          ].map((item, idx) => (
            <div key={idx} className="py-6 first:pt-0 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#94A3B8]">{item.num}</span>
                <h2 className="font-display text-base font-bold text-[#0F172A] tracking-wider">{item.title}</h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed pl-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section — Timeline Sequence */}
      <div className="space-y-8 pt-8 border-t border-[#E2E8F0]">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Execution</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A] mt-1">Process Sequence</h2>
        </div>

        {/* Desktop Connected Horizontal Timeline */}
        <div className="hidden md:block space-y-6">
          <div className="grid grid-cols-5 gap-4 relative">
            {/* Connecting horizontal line */}
            <div className="absolute top-4 left-0 w-full h-[1px] bg-[#E2E8F0] -z-0" />

            {[
              { step: "01", title: "UNDERSTAND", desc: "Audit business objectives, target audience, and current digital bottlenecks." },
              { step: "02", title: "STRUCTURE", desc: "Define content hierarchy, layout architecture, and software parameters." },
              { step: "03", title: "BUILD", desc: "Engineer custom responsive frontends, rapid load times, and data workflows." },
              { step: "04", title: "REFINE", desc: "Perform device quality testing, speed audits, and conversion funnel validation." },
              { step: "05", title: "LAUNCH", desc: "Deploy seamlessly, configure analytics, and ensure long-term performance." }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 space-y-3 pr-2">
                <div className="w-8 h-8 rounded-full bg-white border border-[#CBD5E1] font-mono text-xs font-bold text-[#0F172A] flex items-center justify-center">
                  {item.step}
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-xs font-bold text-[#0F172A] tracking-wider uppercase">{item.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Vertical Connected Sequence */}
        <div className="md:hidden space-y-6 relative pl-6 border-l border-[#E2E8F0]">
          {[
            { step: "01", title: "UNDERSTAND", desc: "Audit business objectives, target audience, and current digital bottlenecks." },
            { step: "02", title: "STRUCTURE", desc: "Define content hierarchy, layout architecture, and software parameters." },
            { step: "03", title: "BUILD", desc: "Engineer custom responsive frontends, rapid load times, and data workflows." },
            { step: "04", title: "REFINE", desc: "Perform device quality testing, speed audits, and conversion funnel validation." },
            { step: "05", title: "LAUNCH", desc: "Deploy seamlessly, configure analytics, and ensure long-term performance." }
          ].map((item, idx) => (
            <div key={idx} className="relative space-y-1">
              <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-white border border-[#CBD5E1] text-[10px] font-mono font-bold text-[#0F172A] flex items-center justify-center">
                {item.step}
              </span>
              <h3 className="font-display text-xs font-bold text-[#0F172A] tracking-wider uppercase">{item.title}</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Action Banner */}
      <div className="bg-[#0F172A] text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h2 className="font-display text-2xl font-bold text-white">Have something that needs building?</h2>
          <p className="text-sm text-[#94A3B8]">Share your parameters and we will discuss scope and execution.</p>
        </div>
        <button
          onClick={onOpenForm}
          className="px-7 py-3.5 bg-white text-[#0F172A] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F8FAFC] transition-colors whitespace-nowrap cursor-pointer"
        >
          Start a Project
        </button>
      </div>
    </div>
  );
}
