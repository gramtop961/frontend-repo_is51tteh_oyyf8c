import React from 'react';
import { motion } from 'framer-motion';
import { Video, Brush, Code, Cpu } from 'lucide-react';

const meters = [
  { icon: Video, title: 'Video Editing', items: ['CapCut', 'KineMaster', 'Premiere', 'After Effects'], level: 92 },
  { icon: Brush, title: 'Desain Grafis', items: ['Canva', 'Photoshop', 'EasyWorship'], level: 88 },
  { icon: Code, title: 'Web Development', items: ['VS Code', 'Python', 'Google Colab', 'Tableau'], level: 84 },
  { icon: Cpu, title: 'Systems / Projects', items: ['Sentiment App', 'Attendance System'], level: 80 },
];

const Gauge = ({ level }) => {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.35)]"
      />
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, items, level }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-xl backdrop-blur"
  >
    <div className="mb-3 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg transition-transform group-hover:rotate-3">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="mb-3 flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it}
          title={`Alat: ${it}`}
          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-indigo-100/90 transition-colors hover:bg-white/20"
        >
          {it}
        </span>
      ))}
    </div>
    <Gauge level={level} />
    <div className="mt-1 text-right text-xs text-indigo-200/80">{level}%</div>
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-500/10" />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-gradient-to-b from-indigo-950 to-blue-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
            Keahlian Dinamis
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-indigo-100/80">
            Ikon interaktif, bar grafis animasi, dan tooltip pada setiap alat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {meters.map((m) => (
            <SkillCard key={m.title} icon={m.icon} title={m.title} items={m.items} level={m.level} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
