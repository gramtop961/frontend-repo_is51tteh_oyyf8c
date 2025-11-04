import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, FileCode2, ImageIcon, X } from 'lucide-react';

const projects = [
  {
    title: 'Editing Reel — Energy Cuts',
    tools: 'CapCut • KineMaster • Premiere Pro • After Effects',
    type: 'Video',
    icon: Play,
    cover:
      'https://images.unsplash.com/photo-1526253038957-bce54e05968f?q=80&w=1200&auto=format&fit=crop',
    media:
      'https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-typing-4541/1080p.mp4',
    description: 'Kompilasi transisi cepat, speed ramping, dan color grading sinematik.',
  },
  {
    title: 'Graphic Design — Brand Pack',
    tools: 'Photoshop • Canva • EasyWorship',
    type: 'Design',
    icon: ImageIcon,
    cover:
      'https://images.unsplash.com/photo-1499651681375-8afc5a4db253?q=80&w=1200&auto=format&fit=crop',
    media:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    description: 'Identity kit dan sosial media template dengan tipografi modern.',
  },
  {
    title: 'Web Dev — Analytics Dashboard',
    tools: 'VS Code • Python • Tableau • Google Colab',
    type: 'Web',
    icon: FileCode2,
    cover:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    media:
      'https://images.unsplash.com/photo-1551281044-8d8d8f9d7ab9?q=80&w=1600&auto=format&fit=crop',
    description: 'Dashboard interaktif dengan visualisasi real-time dan animasi halus.',
  },
  {
    title: 'System — Sentiment Analysis App',
    tools: 'Python • NLP • Visualization',
    type: 'System',
    icon: FileCode2,
    cover:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    media:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    description: 'Aplikasi web analisis sentimen dengan pipeline end-to-end.',
  },
];

const PortfolioCard = ({ project, onOpen }) => {
  const Icon = project.icon;
  return (
    <motion.button
      type="button"
      whileHover={{ y: -6 }}
      onClick={() => onOpen(project)}
      className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left shadow-2xl backdrop-blur transition-colors hover:bg-white/10"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-indigo-900/70 via-purple-900/20 to-transparent" />
      </div>
      <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
        <Icon className="h-3.5 w-3.5 text-cyan-300" />
        {project.type}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <ExternalLink className="h-4 w-4 text-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <p className="mt-1 text-sm text-indigo-100/80">{project.tools}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10" />
      </div>
    </motion.button>
  );
};

const Modal = ({ open, onClose, project }) => {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-950/90 via-purple-950/80 to-blue-950/90 text-white backdrop-blur"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 backdrop-blur transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="h-72 w-full overflow-hidden">
              {project.type === 'Video' ? (
                <video className="h-full w-full object-cover" src={project.media} autoPlay loop muted playsInline />
              ) : (
                <img className="h-full w-full object-cover" src={project.media} alt={project.title} />
              )}
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-indigo-100/80">{project.tools}</p>
              <p className="mt-3 text-indigo-100/90">{project.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="relative w-full bg-gradient-to-b from-blue-950 to-indigo-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
            Portofolio Interaktif
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-indigo-100/80">
            Grid responsif dengan hover effect, lightbox, dan transisi halus layaknya promo produk modern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <PortfolioCard project={p} onOpen={setActive} />
            </motion.div>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} project={active} />
    </section>
  );
};

export default Portfolio;
