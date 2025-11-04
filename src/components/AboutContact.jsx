import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, Send, Linkedin, Github, Instagram, GraduationCap } from 'lucide-react';

const TimelineItem = ({ year, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="relative pl-8"
  >
    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-fuchsia-400/60 to-cyan-400/60" />
    <div className="absolute -left-1 top-0 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
    <p className="text-sm text-indigo-200/80">{year}</p>
    <h4 className="text-white">{title}</h4>
    <p className="text-indigo-100/80">{desc}</p>
  </motion.div>
);

const AboutContact = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-blue-950 to-indigo-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl">
            Tentang Saya
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-indigo-100/80">
            Lulusan Universitas Buddhi Dharma (GPA 3.64) dengan fokus tesis pada Sentiment Analysis Web Application.
            Menciptakan pengalaman digital berdaya tarik melalui desain, video, dan kode.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <GraduationCap className="h-4 w-4 text-cyan-300" />
            <span className="text-xs text-indigo-100/90">Universitas Buddhi Dharma • GPA 3.64</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Timeline */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <User className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">Perjalanan Karier</h3>
            </div>
            <div className="space-y-6">
              <TimelineItem
                year="Terkini"
                title="Lead Multimedia • GSJA Pondok Firman"
                desc="Memimpin produksi konten video, desain visual, dan sistem presentasi kreatif untuk event dan kampanye."
              />
              <TimelineItem
                year="Sebelumnya"
                title="Account Receivable Staff • PT. Data Lake Indonesia"
                desc="Mengelola data transaksi, rekonsiliasi, dan automasi pelaporan untuk meningkatkan akurasi dan efisiensi."
              />
              <TimelineItem
                year="Akademik"
                title="Tesis: Sentiment Analysis Web Application"
                desc="Membangun aplikasi web analisis sentimen end-to-end, dari scraping, preprocessing, hingga visualisasi."
              />
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold text-white">Kontak</h3>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get('name');
                const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const body = encodeURIComponent(`Halo,\n\nNama: ${name}\nEmail: ${data.get('email')}\n\nPesan:\n${data.get('message')}`);
                window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-3"
            >
              <div>
                <label className="mb-1 block text-sm text-indigo-100/90">Nama</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white outline-none transition-all placeholder:text-indigo-200/60 focus:border-cyan-400 focus:bg-white/15 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-indigo-100/90">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white outline-none transition-all placeholder:text-indigo-200/60 focus:border-cyan-400 focus:bg-white/15 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-indigo-100/90">Pesan</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white outline-none transition-all placeholder:text-indigo-200/60 focus:border-cyan-400 focus:bg-white/15 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]"
                  placeholder="Sampaikan kebutuhan atau pertanyaan Anda"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-600 to-cyan-600 px-5 py-2 font-medium text-white shadow-lg shadow-fuchsia-500/20"
              >
                <Send className="h-4 w-4" /> Kirim
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 flex items-center gap-3"
              >
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white transition-all hover:translate-y-[-1px] hover:bg-white/20"
                >
                  <Linkedin className="h-4 w-4 text-cyan-300 transition-transform group-hover:scale-110" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white transition-all hover:translate-y-[-1px] hover:bg-white/20"
                >
                  <Github className="h-4 w-4 text-cyan-300 transition-transform group-hover:scale-110" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white transition-all hover:translate-y-[-1px] hover:bg-white/20"
                >
                  <Instagram className="h-4 w-4 text-cyan-300 transition-transform group-hover:scale-110" />
                  <span className="text-sm">Instagram</span>
                </a>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
