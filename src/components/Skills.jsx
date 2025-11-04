import React from 'react';
import { motion } from 'framer-motion';
import { Video, Brush, Code, Cpu, Sparkles } from 'lucide-react';

const SkillPill = ({ icon: Icon, title, items, hue }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow-xl backdrop-blur"
  >
    <div className="mb-3 flex items-center gap-2">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${hue} text-white shadow-lg`}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
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
            Keahlian & Alat
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-indigo-100/80">
            Ikon interaktif dengan tooltip. Arahkan kursor untuk melihat detail setiap alat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SkillPill
            icon={Video}
            title="Pengeditan Video"
            hue="from-fuchsia-600 to-cyan-600"
            items={["CapCut", "KineMaster", "Adobe Premiere", "After Effects"]}
          />
          <SkillPill
            icon={Brush}
            title="Desain Grafis"
            hue="from-purple-600 to-blue-600"
            items={["Canva", "Photoshop", "EasyWorship"]}
          />
          <SkillPill
            icon={Code}
            title="Web Development"
            hue="from-indigo-600 to-cyan-600"
            items={["Visual Studio Code", "Python", "Google Colab", "Tableau"]}
          />
          <SkillPill
            icon={Cpu}
            title="Projects & Systems"
            hue="from-violet-600 to-sky-600"
            items={["Sentiment Analysis Web App", "Attendance Tracking System"]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-xs tracking-widest text-cyan-100">INTERAKTIF</span>
          </div>
          <p className="text-indigo-100/90">
            Setiap elemen dirancang untuk memberi umpan balik visual yang halus: hover glow, transisi gradien, dan
            animasi masuk saat bagian muncul di layar.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
