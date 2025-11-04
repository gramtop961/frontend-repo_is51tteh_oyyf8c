import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient / Glass overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-purple-900/30 to-blue-900/60" />
      <div className="pointer-events-none absolute -inset-x-20 -top-40 h-[60rem] rounded-full bg-gradient-to-r from-indigo-500/20 via-fuchsia-400/10 to-cyan-400/20 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs tracking-widest text-cyan-100">FUTURISTIC PORTFOLIO</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Mencipta Visual, Kode, dan Pengalaman
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent"> Futuristik</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto mt-4 max-w-2xl text-base text-indigo-100/90 md:text-lg"
          >
            Saya adalah kreator multimedia yang menggabungkan pengeditan video, desain grafis, dan pengembangan web
            untuk menghadirkan cerita yang kuat dan antarmuka yang responsif.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-white shadow-xl shadow-fuchsia-500/20 transition-transform duration-300 hover:scale-[1.03]"
            >
              <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              Lihat Karya
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Hubungi Saya
            </a>
          </motion.div>

          {/* Profile chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mx-auto mt-10 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur"
          >
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=240&auto=format&fit=crop"
              alt="Foto Profesional"
              className="h-10 w-10 rounded-xl object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Multimedia Specialist</p>
              <p className="text-xs text-indigo-100/80">Video Editing • Desain Grafis • Web Dev</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
