import { useState, useEffect, useCallback } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Sync hash to active tab on mount and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'services', 'work', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  // Modal ESC key listener
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsFormOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFormOpen]);

  const renderPage = () => {
    switch (activeTab) {
      case 'services':
        return <ServicesPage onOpenForm={() => setIsFormOpen(true)} />;
      case 'work':
        return <WorkPage onOpenForm={() => setIsFormOpen(true)} />;
      case 'about':
        return <AboutPage onOpenForm={() => setIsFormOpen(true)} />;
      case 'contact':
        return <ContactPage onOpenForm={() => setIsFormOpen(true)} />;
      case 'home':
      default:
        return <HomePage onOpenForm={() => setIsFormOpen(true)} setActiveTab={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-white antialiased flex flex-col justify-between">
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenForm={() => setIsFormOpen(true)}
      />

      <main className="pt-24 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        setActiveTab={handleTabChange}
        onOpenForm={() => setIsFormOpen(true)}
      />

      <ProjectModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
}
