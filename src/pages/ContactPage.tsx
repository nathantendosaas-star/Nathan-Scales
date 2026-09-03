import { useState } from 'react';

interface ContactPageProps {
  onOpenForm: () => void;
}

export default function ContactPage({ onOpenForm }: ContactPageProps) {
  const [copied, setCopied] = useState(false);
  const email = "nathanscales.marketing@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#64748B]">
          Direct Engagement
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#0F172A] tracking-tight">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
          Have a project in mind, an existing site to upgrade, or operational software to build? We'd love to discuss how we can help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        {/* Primary Contact Options */}
        <div className="md:col-span-7 bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 space-y-8 flex flex-col justify-between shadow-sm">
          <div className="space-y-4">
            <span className="text-xs font-semibold px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-full uppercase tracking-wider">
              Primary Intake Form
            </span>
            <h2 className="font-display text-3xl font-bold text-[#0F172A]">
              Start a Project Intake
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Fill out our structured client discovery form to share your goals, timeline, and scope parameters. We will review your details and respond within 24 hours.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onOpenForm}
              className="w-full sm:w-auto px-8 py-4 bg-[#0F172A] text-white font-semibold text-sm rounded-lg hover:bg-[#1E293B] transition-colors cursor-pointer text-center"
            >
              Open Project Form →
            </button>
          </div>
        </div>

        {/* Direct Email Contact */}
        <div className="md:col-span-5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 md:p-12 space-y-8 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs font-semibold px-2.5 py-1 bg-[#E2E8F0] text-[#334155] rounded-full uppercase tracking-wider">
              Direct Communication
            </span>
            <h2 className="font-display text-2xl font-bold text-[#0F172A]">
              Send an Email
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed">
              Prefer traditional email? Contact us directly anytime regarding inquiries or project parameters.
            </p>

            <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl flex items-center justify-between gap-2">
              <span className="text-xs font-medium text-[#0F172A] truncate">
                {email}
              </span>
              <button
                onClick={copyEmail}
                className="text-xs font-semibold text-[#0F172A] hover:underline cursor-pointer whitespace-nowrap"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E2E8F0] text-xs text-[#64748B] space-y-1">
            <p className="font-semibold text-[#0F172A]">Studio Hours</p>
            <p>Monday – Friday, 9:00 AM – 6:00 PM</p>
            <p>Direct Email Response within 24 Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
