import { useState } from 'react';

interface WorkPageProps {
  onOpenForm: () => void;
}

export default function WorkPage({ onOpenForm }: WorkPageProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'growth' | 'systems'>('all');

  const projects = [
    {
      id: 'lead-research-engine',
      category: 'systems',
      categoryLabel: 'Software / B2B Pipeline',
      title: 'Lead Research & CRM Verification Pipeline',
      description: 'Custom lead intelligence and verification engine built to filter target business accounts using verifiable signals (operating status, digital ad activity, and business scale) before routing qualified leads to CRM sales teams.',
      stack: ['Node.js', 'Resend API', 'Google Sheets Integration', 'CRM Webhooks'],
      deliverables: [
        'Automated multi-signal capacity verification',
        'Structured lead scoring and filtering',
        'Direct CRM data synchronization'
      ]
    },
    {
      id: 'construction-portal',
      category: 'web',
      categoryLabel: 'Web / Enterprise',
      title: 'Commercial Construction & Engineering Portal',
      description: 'High-converting digital presence and portfolio portal engineered for commercial contractors to capture tender inquiries, display enterprise project credentials, and establish market authority.',
      stack: ['React', 'Tailwind CSS', 'Framer Motion', 'SEO Optimization'],
      deliverables: [
        'Enterprise project showcase architecture',
        'Structured commercial tender inquiry form',
        'Mobile-optimized responsive design'
      ]
    },
    {
      id: 'intake-modal-engine',
      category: 'growth',
      categoryLabel: 'Growth / Conversion UX',
      title: 'Client Discovery Overlay & Qualification Module',
      description: 'In-page non-disruptive discovery intake system designed to retain visitors on-site while gathering detailed project parameters and automatically routing prospective clients into review queues.',
      stack: ['TypeScript', 'React Overlay Architecture', 'Google Forms Integration'],
      deliverables: [
        'Non-redirecting in-page intake modal',
        'Structured lead intake parameters',
        'Accessible, keyboard-navigable UI'
      ]
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
          Selected Portfolio
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Featured Work & Case Studies
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Real business applications engineered for conversion clarity, operational efficiency, and measurable digital presence.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#E2E8F0] pb-4">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'web', label: 'Websites' },
          { id: 'growth', label: 'Digital Growth' },
          { id: 'systems', label: 'Custom Software' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              filter === tab.id
                ? 'bg-[#0F172A] text-white'
                : 'bg-white text-[#475569] border border-[#E2E8F0] hover:bg-[#F8FAFC]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Featured Visual Hierarchy Layout */}
      {filter === 'all' ? (
        <div className="space-y-8">
          {/* Featured Dominant Project 1 */}
          <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:border-[#CBD5E1] transition-all">
            <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-md text-xs font-semibold uppercase tracking-wider">
                  <span>Featured Case Study</span>
                  <span>•</span>
                  <span>{projects[0].categoryLabel}</span>
                </div>

                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A]">
                  {projects[0].title}
                </h2>

                <p className="text-sm text-[#475569] leading-relaxed">
                  {projects[0].description}
                </p>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Deliverables</h3>
                  <div className="space-y-1.5">
                    {projects[0].deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {projects[0].stack.map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded text-[#64748B]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dominant Visual Preview Frame */}
              <div className="lg:col-span-6">
                <div className="bg-[#0F172A] text-white rounded-lg p-6 space-y-4 font-mono text-xs shadow-md">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-slate-400 font-sans font-semibold">Lead Research Engine</span>
                    <span className="text-emerald-400 text-[10px] px-2 py-0.5 bg-emerald-950 border border-emerald-800 rounded">Verification Active</span>
                  </div>

                  <div className="space-y-2 font-mono">
                    <div className="p-3 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Operating Status Signal:</span>
                      <span className="text-slate-200 font-bold">Verified Operating</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Digital Ad Signal:</span>
                      <span className="text-emerald-400 font-bold">Active Campaigns</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-400">Routing Target:</span>
                      <span className="text-slate-200 font-bold">CRM Webhook Pipeline</span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-slate-400 font-sans flex justify-between">
                    <span>Direct API Synchronization</span>
                    <span className="text-slate-200 font-semibold">Live Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Projects Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(1).map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#E2E8F0] rounded-xl p-7 space-y-5 flex flex-col justify-between hover:border-[#CBD5E1] transition-all"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  <h2 className="font-display text-xl font-bold text-[#0F172A]">
                    {project.title}
                  </h2>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Deliverables</h3>
                    {project.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded text-[#64748B]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-[#E2E8F0] rounded-xl p-8 space-y-6 flex flex-col justify-between hover:border-[#CBD5E1] transition-all"
            >
              <div className="space-y-4">
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
                <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                  {project.title}
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Deliverables</h3>
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F1F5F9] flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded text-[#64748B]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-[#0F172A] text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 max-w-xl">
          <h2 className="font-display text-2xl font-bold text-white">Have a similar project in mind?</h2>
          <p className="text-sm text-[#94A3B8]">We turn technical and commercial requirements into high-performing digital assets.</p>
        </div>
        <button
          onClick={onOpenForm}
          className="px-7 py-3.5 bg-white text-[#0F172A] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F8FAFC] transition-colors cursor-pointer whitespace-nowrap"
        >
          Start a Project
        </button>
      </div>
    </div>
  );
}
