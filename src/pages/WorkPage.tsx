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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-[#E2E8F0] rounded-2xl p-8 space-y-6 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-lg transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-full uppercase tracking-wider">
                  {project.categoryLabel}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0F172A]">
                {project.title}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.description}
              </p>

              <div className="pt-4 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Key Deliverables</h3>
                <ul className="space-y-1.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#334155]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F1F5F9] flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="text-[11px] font-medium px-2.5 py-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-md text-[#64748B]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 md:p-12 text-center space-y-4">
        <h2 className="font-display text-2xl font-bold text-[#0F172A]">Have a similar project in mind?</h2>
        <p className="text-sm text-[#475569] max-w-xl mx-auto">
          We work with businesses to turn technical and commercial goals into high-performing digital assets.
        </p>
        <button
          onClick={onOpenForm}
          className="inline-flex items-center px-6 py-3 bg-[#0F172A] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#1E293B] transition-colors cursor-pointer"
        >
          Start a Project →
        </button>
      </div>
    </div>
  );
}
