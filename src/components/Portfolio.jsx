import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Play, FileCode2, ImageIcon } from 'lucide-react';

const projects = [
  {
    title: 'Video Editing Reel',
    tools: 'CapCut • Kinemaster • Premiere Pro • After Effects',
    type: 'Video',
    icon: Play,
    image:
      'https://images.unsplash.com/photo-1526253038957-bce54e05968f?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Graphic Design Showcase',
    tools: 'Photoshop • Canva • EasyWorship',
    type: 'Design',
    icon: ImageIcon,
    image:
      'https://images.unsplash.com/photo-1499651681375-8afc5a4db253?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Web Development Projects',
    tools: 'VS Code • Python • Tableau • Google Colab',
    type: 'Web',
    icon: FileCode2,
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Sentiment Analysis Web App',
    tools: 'Python • NLP • Visualization',
    type: 'System',
    icon: FileCode2,
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    title: 'Attendance Tracking System',
    tools: 'Python • Web • Automation',
    type: 'System',
    icon: FileCode2,
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

const PortfolioCard = ({ project }) => {
  const Icon = project.icon;
  return (
    <motion.a
      whileHover={{ y: -6 }}
      href={project.link}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur transition-colors hover:bg-white/10"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={project.image}
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
    </motion.a>
  );
};

const Portfolio = () => {
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
            Portofolio Multimedia
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-indigo-100/80">
            Cuplikan proyek video, desain, web, dan sistem yang pernah saya kerjakan. Arahkan kursor untuk melihat lebih
            banyak.
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
              <PortfolioCard project={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
