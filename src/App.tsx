import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';

// Custom easing for GSAP-like feel
const customEase = [0.16, 1, 0.3, 1];

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Initialize Lenis for smooth scrolling
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

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isFormOpen]);

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: customEase, delay: 0.2 }}
        className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-6 bg-white/90 backdrop-blur-md z-50 border-b border-black/5"
      >
        <div className="flex items-center">
          <img src="/logo.svg" alt="Nathan Scales" className="h-8 md:h-10 mix-blend-multiply" />
        </div>
        <a 
          href="#contact" 
          className="text-sm font-medium hover:text-blue-600 transition-colors"
        >
          Get in touch &rarr;
        </a>
      </motion.nav>

      <main>
        {/* Hero */}
        <section className="min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-12 pt-28 md:pt-32 pb-12 gap-8 md:gap-12 lg:gap-24 max-w-[1800px] mx-auto">
          <div className="flex-1 space-y-8 md:space-y-12 z-10 w-full lg:pt-0 pt-8">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: customEase, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] tracking-tight max-w-[15ch]"
            >
              Websites that win clients. Leads that close deals.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: customEase, delay: 0.3 }}
              className="text-base sm:text-lg md:text-2xl text-zinc-600 max-w-[45ch] leading-relaxed"
            >
              I build high-converting websites and run lead generation for businesses in Kampala &mdash; so you get more customers, not just a prettier page.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: customEase, delay: 0.4 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full"
            >
              <a 
                href="https://wa.me/256782165730?text=Hey,%20I'd%20like%20to%20inquire%20about%20your%20website%20development%20services." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 bg-zinc-950 text-white font-medium text-base sm:text-lg hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                Website Inquiry ↗
              </a>
              <a 
                href="https://wa.me/256782165730?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20lead%20generation%20services." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 bg-white text-zinc-950 border border-zinc-200 font-medium text-base sm:text-lg hover:bg-zinc-50 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                Lead Gen Inquiry ↗
              </a>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 bg-zinc-100 text-zinc-950 font-medium text-base sm:text-lg hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                Intake Form ↗
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: customEase, delay: 0.2 }}
            className="flex-1 w-full relative h-[40vh] md:h-[50vh] lg:h-[85vh] overflow-hidden bg-zinc-100 rounded-lg lg:rounded-none"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Premium office space" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-out"
            />
            <div className="absolute inset-0 bg-black/5 mix-blend-multiply pointer-events-none" />
          </motion.div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="px-6 md:px-12 py-16 md:py-24 lg:py-32 max-w-screen-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-6xl mb-12 lg:mb-16"
          >
            Two things. Done well.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: customEase }}
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 md:mb-6">Website Design & Development</h3>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
                Clean, fast, professional websites built to convert visitors into paying customers. No templates. No fluff. Built for your business specifically.
              </p>
              <a 
                href="https://wa.me/256782165730?text=Hey,%20I'd%20like%20to%20inquire%20about%20your%20website%20development%20services." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-zinc-950 font-medium underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                Inquire about websites &rarr;
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: customEase, delay: 0.2 }}
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 md:mb-6">Lead Generation (CPL)</h3>
              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed mb-4 md:mb-6">
                I bring qualified customers directly to your business. You only pay per lead. No retainer, no risk &mdash; just results.
              </p>
              <a 
                href="https://wa.me/256782165730?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20lead%20generation%20services." 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-zinc-950 font-medium underline underline-offset-4 hover:text-blue-600 transition-colors"
              >
                Inquire about leads &rarr;
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 md:px-12 py-16 md:py-24 lg:py-48 max-w-screen-2xl mx-auto border-t border-zinc-100 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="max-w-4xl"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8">Ready to grow your business?</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 mb-10 md:mb-16 leading-relaxed max-w-[40ch]">
              Let's talk about what you need. No lengthy back and forth &mdash; just a quick conversation and we get moving.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap w-full">
              <a 
                href="https://wa.me/256782165730?text=Hey,%20I'd%20like%20to%20inquire%20about%20your%20website%20development%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-zinc-950 text-white font-medium text-base sm:text-lg hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300 cursor-pointer whitespace-nowrap w-full sm:w-auto"
              >
                Website Inquiry ↗
              </a>
              <a 
                href="https://wa.me/256782165730?text=Hello,%20I'd%20like%20to%20inquire%20about%20your%20lead%20generation%20services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-white border border-zinc-200 text-zinc-950 font-medium text-base sm:text-lg hover:bg-zinc-50 hover:scale-[1.02] transition-all duration-300 cursor-pointer whitespace-nowrap w-full sm:w-auto"
              >
                Lead Gen Inquiry ↗
              </a>
              <button 
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 bg-zinc-100 text-zinc-950 font-medium text-base sm:text-lg hover:bg-zinc-200 hover:scale-[1.02] transition-all duration-300 cursor-pointer whitespace-nowrap w-full sm:w-auto"
              >
                Intake Form ↗
              </button>
              <a 
                href="mailto:nathantendo.saas@gmail.com?subject=Inquiry%20about%20your%20services&body=Hello,%20I'd%20like%20to%20inquire%20about%20your%20services." 
                className="text-lg sm:text-xl font-medium underline underline-offset-8 hover:text-blue-600 transition-colors sm:ml-4 sm:mt-0 pt-2 sm:pt-0"
              >
                Send an email
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-8 border-t border-zinc-100 text-zinc-400 text-sm flex justify-between">
        <p>&copy; 2026 Nathan Scales. Kampala, Uganda.</p>
      </footer>

      {/* Google Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 md:p-12"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white w-full max-w-4xl h-full max-h-[95vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 md:p-6 border-b border-zinc-100">
                <h3 className="font-display font-bold text-xl md:text-2xl">Client Discovery</h3>
                <button 
                  onClick={() => setIsFormOpen(false)}
                  className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="flex-1 w-full bg-zinc-50 overflow-hidden">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfQDkmxKo7DvARap_JfuQdKgIUFL0PNOpa7jCBOhwqq6b0jxw/viewform?embedded=true" 
                  className="w-full h-full border-0"
                  title="Client Discovery Form"
                >
                  Loading...
                </iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
