interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenForm: () => void;
}

export default function Footer({ setActiveTab, onOpenForm }: FooterProps) {
  const handleNavClick = (id: string, e?: React.MouseEvent) => {
    if (e && (e.ctrlKey || e.metaKey)) return;
    if (e) e.preventDefault();
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-10">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <img src="/NSM-logo.svg" alt="Nathan Scales Logo" className="h-7 w-auto object-contain" />
            <span className="font-display font-bold text-base text-[#0F172A] uppercase tracking-wider">
              Nathan Scales
            </span>
          </div>
          <p className="text-xs text-[#64748B] max-w-sm leading-relaxed font-normal">
            Digital Studio — High-Converting Websites, Growth Funnels & Custom Business Software
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-medium text-[#475569]">
          <a href="/home" onClick={(e) => handleNavClick('home', e)} className="hover:text-[#0F172A] transition-colors cursor-pointer">Home</a>
          <a href="/services" onClick={(e) => handleNavClick('services', e)} className="hover:text-[#0F172A] transition-colors cursor-pointer">Services</a>
          <a href="/work" onClick={(e) => handleNavClick('work', e)} className="hover:text-[#0F172A] transition-colors cursor-pointer">Work</a>
          <a href="/about" onClick={(e) => handleNavClick('about', e)} className="hover:text-[#0F172A] transition-colors cursor-pointer">About</a>
          <a href="/contact" onClick={(e) => handleNavClick('contact', e)} className="hover:text-[#0F172A] transition-colors cursor-pointer">Contact</a>
          <button onClick={onOpenForm} className="hover:text-[#0F172A] transition-colors text-[#0F172A] font-semibold underline cursor-pointer">Start a Project</button>
        </div>

        <div className="text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} Nathan Scales. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
