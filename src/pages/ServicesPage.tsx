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
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-10 md:py-16 space-y-12">
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
          Capabilities
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Services
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Digital studio capabilities designed to make your business easier to understand, trust, and scale.
        </p>
      </div>

      {/* Editorial Service Rows */}
      <div className="border-t border-[#E2E8F0]">
        {services.map((service) => (
          <div
            key={service.id}
            className="py-10 border-b border-[#E2E8F0] transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Service Number & Header */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-sm font-mono font-bold text-[#94A3B8]">{service.number}</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-[#0F172A]">
                  {service.title}
                </h2>
                <p className="text-sm font-medium text-[#475569] leading-relaxed">
                  {service.tagline}
                </p>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-8 space-y-6">
                <p className="text-sm text-[#334155] leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Capabilities & Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-[#E2E8F0] rounded-md text-xs font-medium text-[#334155] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Direct CTA Block */}
      <div className="bg-[#0F172A] text-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="font-display text-2xl font-bold text-white">Have a project that needs executing?</h2>
          <p className="text-sm text-[#94A3B8]">Share your parameters and we will discuss scope, timeline, and requirements.</p>
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
