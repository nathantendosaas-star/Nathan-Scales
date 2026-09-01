interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenForm: () => void;
}

export default function Footer({ setActiveTab, onOpenForm }: FooterProps) {
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-14">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="font-display font-bold text-lg text-[#0F172A] uppercase tracking-wider">
            Nathan Scales
          </div>
          <p className="text-xs text-[#64748B] mt-1 max-w-sm leading-relaxed font-normal">
            Digital Studio — High-Converting Websites, Growth Funnels & Custom Business Software
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs font-medium text-[#475569]">
          <button onClick={() => handleNavClick('home')} className="hover:text-[#0F172A] transition-colors cursor-pointer">Home</button>
          <button onClick={() => handleNavClick('services')} className="hover:text-[#0F172A] transition-colors cursor-pointer">Services</button>
          <button onClick={() => handleNavClick('work')} className="hover:text-[#0F172A] transition-colors cursor-pointer">Work</button>
          <button onClick={() => handleNavClick('about')} className="hover:text-[#0F172A] transition-colors cursor-pointer">About</button>
          <button onClick={() => handleNavClick('contact')} className="hover:text-[#0F172A] transition-colors cursor-pointer">Contact</button>
          <button onClick={onOpenForm} className="hover:text-[#0F172A] transition-colors text-[#0F172A] font-semibold underline cursor-pointer">Start a Project</button>
        </div>

        <div className="text-xs text-[#94A3B8]">
          © {new Date().getFullYear()} Nathan Scales. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
