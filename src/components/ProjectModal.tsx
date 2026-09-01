import { motion } from 'motion/react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfQDkmxKo7DvARap_JfuQdKgIUFL0PNOpa7jCBOhwqq6b0jxw/viewform?embedded=true";

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.25 }}
        className="bg-white border border-[#E2E8F0] w-full max-w-4xl h-full max-h-[90vh] flex flex-col rounded-xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-[#F8FAFC]">
          <div>
            <h3 className="text-sm font-semibold text-[#0F172A]">
              Start a Project
            </h3>
            <p className="text-xs text-[#64748B] mt-0.5">
              Client Discovery & Project Scope Intake
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0]/60 rounded-lg transition-colors cursor-pointer"
            aria-label="Close form"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Embedded Google Form Container */}
        <div className="flex-1 w-full bg-white relative">
          <iframe
            src={GOOGLE_FORM_URL}
            className="w-full h-full border-0"
            title="Nathan Scales Client Discovery Form"
          >
            Loading client intake form...
          </iframe>
        </div>

        {/* Modal Footer Bar */}
        <div className="px-6 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC] flex justify-between items-center text-xs text-[#64748B]">
          <span>Press ESC to close</span>
          <span>Nathan Scales Direct Intake</span>
        </div>
      </motion.div>
    </div>
  );
}
