import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, Play, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const layerSlow = useTransform(scrollY, [0, 600], [0, -60]);
  const layerFast = useTransform(scrollY, [0, 600], [0, -140]);

  const videoSrc = useMemo(
    () =>
      'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-typing-4541/1080p.mp4',
    []
  );

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950 text-white">
      {/* 3D Scene */}
      <motion.div style={{ y: layerSlow }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Gradient overlays that keep interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <motion.div
        style={{ y: layerFast }}
        className="pointer-events-none absolute -inset-x-20 -top-40 h-[60rem] rounded-full bg-gradient-to-r from-fuchsia-400/15 via-purple-400/10 to-cyan-400/15 blur-3xl"
      />

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
            <span className="text-xs tracking-widest text-cyan-100">IMMERSIVE • FUTURISTIC • APPLE-LIKE</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Portofolio Multimedia
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent"> Interaktif</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto mt-4 max-w-2xl text-base text-indigo-100/90 md:text-lg"
          >
            Video editing, desain grafis, dan web development dipadukan dengan animasi halus, parallax, dan transisi
            bergaya promo produk modern.
          </motion.p>

          {/* Intro video snippet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto mt-8 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
          >
            <div className="relative">
              <video
                className="block h-full w-full object-cover"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs backdrop-blur">
                <Play className="h-3.5 w-3.5 text-cyan-300" />
                <span className="text-white">Showreel • 12s</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 text-white shadow-xl shadow-fuchsia-500/20 transition-transform duration-300 hover:scale-[1.03]"
            >
              Jelajahi Karya
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Tentang Saya
            </a>
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-2 text-indigo-200/80">
            <MousePointer2 className="h-4 w-4" />
            <span>Gerakkan kursor dan scroll untuk melihat parallax & interaksi.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
