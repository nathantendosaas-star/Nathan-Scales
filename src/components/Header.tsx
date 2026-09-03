import { useState } from 'react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenForm: () => void;
}

export default function Header({ activeTab, setActiveTab, onOpenForm }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FBFBF9]/90 backdrop-blur-md border-b border-[#E2E8F0]">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none"
        >
          <span className="font-display text-xl font-bold tracking-tight text-[#0F172A] uppercase">
            Nathan Scales
          </span>
          <span className="text-[11px] font-sans font-medium uppercase tracking-wider px-2.5 py-0.5 bg-[#F1F5F9] text-[#475569] rounded-full border border-[#E2E8F0]">
            Studio
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-[#475569]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors duration-200 cursor-pointer ${
                activeTab === item.id
                  ? 'text-[#0F172A] font-semibold border-b-2 border-[#0F172A] pb-1'
                  : 'hover:text-[#0F172A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenForm}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#0F172A] text-white text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#1E293B] transition-all duration-200 cursor-pointer shadow-sm"
          >
            <span>Start a Project</span>
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#334155] hover:text-[#0F172A] focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBFBF9] border-b border-[#E2E8F0] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  activeTab === item.id ? 'text-[#0F172A] font-semibold' : 'text-[#475569]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-[#E2E8F0]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenForm();
              }}
              className="w-full py-3 bg-[#0F172A] text-white text-xs uppercase font-semibold tracking-wider rounded-md text-center"
            >
              Start a Project →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
