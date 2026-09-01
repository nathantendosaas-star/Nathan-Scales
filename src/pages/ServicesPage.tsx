import { useState } from 'react';
import { motion } from 'motion/react';

interface ServicesPageProps {
  onOpenForm: () => void;
}

export default function ServicesPage({ onOpenForm }: ServicesPageProps) {
  const [activeService, setActiveService] = useState<number | null>(0);

  const services = [
    {
      id: 0,
      number: "01",
      title: "Websites & Digital Presences",
      tagline: "High-converting bespoke web design built for commercial credibility and speed.",
      description: "We design and build bespoke web presences tailored specifically for business outcomes. Every site is engineered from scratch for rapid load times, mobile excellence, precise brand authority, and visitor conversion.",
      deliverables: [
        "Custom Brand & Responsive Layout Architecture",
        "High-Conversion Landing Page Systems",
        "Mobile-First Performance Optimization",
        "SEO-Structured Content & Messaging",
        "Analytics & Form Conversion Tracking"
      ]
    },
    {
      id: 1,
      number: "02",
      title: "Digital Growth & Lead Funnels",
      tagline: "Targeted acquisition funnels and verified client lead generation.",
      description: "Connecting your offer directly with high-intent decision makers. We design client research pipelines, structure targeted campaign funnels, and optimize visitor qualification so your sales team talks to qualified prospects.",
      deliverables: [
        "Cost-Per-Lead (CPL) Acquisition Strategy",
        "Target B2B Industry & Company Research",
        "Landing Page Conversion Rate Optimization (CRO)",
        "Intent-Driven Campaign Architecture",
        "Multi-Signal Lead Verification Workflows"
      ]
    },
    {
      id: 2,
      number: "03",
      title: "Custom Software & Business Systems",
      tagline: "Internal operational software, client intake portals, and workflow automation.",
      description: "Eliminate operational friction with custom software built specifically around your internal procedures. We develop client discovery portals, automated CRM synchronization, internal dashboards, and custom API integrations.",
      deliverables: [
        "Custom Internal Operations Dashboards",
        "Automated Client Intake & Discovery Overlays",
        "CRM & Google Workspace Data Integrations",
        "Custom API Development & Workflow Automation",
        "Transactional Email & Notification Pipelines"
      ]
    }
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
          Capabilities & Solutions
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Services & Technical Execution
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Three interconnected capabilities structured to work as a unified commercial growth engine.
        </p>
      </div>

      {/* Accordion / Detailed Service List */}
      <div className="space-y-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`border rounded-2xl transition-all duration-200 ${
              activeService === service.id
                ? "bg-white border-[#CBD5E1] shadow-md"
                : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1]"
            }`}
          >
            <button
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className="w-full p-6 md:p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
            >
              <div className="flex items-start md:items-center gap-6">
                <span className="text-sm font-bold text-[#94A3B8] pt-1 md:pt-0">{service.number}</span>
                <div>
                  <h2 className="font-display text-xl md:text-2xl font-bold text-[#0F172A]">{service.title}</h2>
                  <p className="text-sm text-[#475569] mt-1">{service.tagline}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 self-end md:self-auto text-xs font-semibold text-[#0F172A]">
                <span>{activeService === service.id ? "Hide Details" : "View Details"}</span>
                <span className="text-lg">{activeService === service.id ? "−" : "+"}</span>
              </div>
            </button>

            {activeService === service.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-8 md:px-8 border-t border-[#F1F5F9]"
              >
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-6 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Overview</h3>
                    <p className="text-sm text-[#334155] leading-relaxed">{service.description}</p>
                  </div>
                  <div className="md:col-span-6 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Key Deliverables</h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#334155]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-2xl font-bold text-[#0F172A]">Need a custom solution tailored to your business?</h2>
          <p className="text-sm text-[#475569] mt-1">We can discuss scope, timelines, and technical requirements.</p>
        </div>
        <button
          onClick={onOpenForm}
          className="px-6 py-3 bg-[#0F172A] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#1E293B] transition-colors whitespace-nowrap cursor-pointer"
        >
          Start a Project →
        </button>
      </div>
    </div>
  );
}
