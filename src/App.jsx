import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, LayoutGrid, Stars, User } from 'lucide-react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import AboutContact from './components/AboutContact';

const App = () => {
  // Smooth scroll behavior for in-page anchors
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Sticky Navigation */}
      <div className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl justify-center p-4">
        <nav className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-2 py-2 backdrop-blur">
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
          >
            <Home className="h-4 w-4 text-cyan-300" /> Beranda
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
          >
            <LayoutGrid className="h-4 w-4 text-cyan-300" /> Portofolio
          </a>
          <a
            href="#skills"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
          >
            <Stars className="h-4 w-4 text-cyan-300" /> Keahlian
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
          >
            <User className="h-4 w-4 text-cyan-300" /> Tentang & Kontak
          </a>
        </nav>
      </div>

      {/* Sections with subtle page-like transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-20"
        >
          <Hero />
          <Portfolio />
          <Skills />
          <AboutContact />

          {/* Footer */}
          <footer className="bg-gradient-to-t from-indigo-950 to-blue-950 py-10 text-center text-indigo-200/80">
            <p>
              © {new Date().getFullYear()} Portfolio Futuristik • Dibangun dengan React, Tailwind, Framer Motion, dan
              Spline.
            </p>
          </footer>
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default App;
