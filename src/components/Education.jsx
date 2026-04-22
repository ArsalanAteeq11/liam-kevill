// Education section – school cards + certification badge
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const EDUCATION = [
  {
    school: 'California Polytechnic State University',
    short: 'Cal Poly SLO',
    degree: 'BS Business Administration',
    focus: 'Finance & Economics',
    period: '2023 – 2027',
    status: 'Junior',
    location: 'San Luis Obispo, CA',
    highlights: ['Orfalea College of Business', 'Finance & Economics Track', 'Dean\'s List Candidate'],
    color: 'from-violet-500 to-indigo-600',
    icon: '🎓',
  },
  {
    school: 'Northgate High School',
    short: 'Northgate HS',
    degree: 'High School Diploma',
    focus: '',
    period: '2019 – 2023',
    status: 'Completed',
    location: 'Walnut Creek, CA',
    highlights: ['Walnut Creek, CA'],
    color: 'from-slate-500 to-slate-600',
    icon: '🏫',
  },
];

const CERTIFICATIONS = [
  {
    name: 'Lean Six Sigma Green Belt',
    issuer: 'MoreSteam',
    date: 'March 2026',
    desc: 'Process improvement, operational efficiency, and data-driven problem-solving methodology.',
    color: 'from-emerald-500 to-teal-600',
    badge: '🟢',
  },
];

const LEADERSHIP = [
  {
    org: 'Delta Upsilon Fraternity',
    role: 'Vice President of External Relations',
    period: '2024 – Present',
    desc: 'Leading external partnerships, alumni relations, and community engagement initiatives for the chapter.',
    color: 'from-amber-500 to-orange-500',
    icon: '🏛️',
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.25,0.46,0.45,0.94] } },
});

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* ── Section Header ── */}
        <motion.div
          variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">03.</span>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl text-slate-100">Education & Leadership</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
        </motion.div>

        {/* ── Education Cards ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.school}
              variants={fadeUp(i * 0.12)} initial="hidden" animate={inView ? 'show' : 'hidden'}
              className="glass rounded-2xl p-6 border border-white/5
                hover:border-violet-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-900/20
                transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${edu.color}
                  flex items-center justify-center text-xl shrink-0 shadow-lg`}>
                  {edu.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-outfit font-bold text-base text-slate-100 leading-tight">{edu.school}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                    {edu.degree}{edu.focus && ` · ${edu.focus}`}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1"><Calendar size={11}/>{edu.period}</span>
                <span className="flex items-center gap-1"><MapPin size={11}/>{edu.location}</span>
                <span className="px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  {edu.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map(h => (
                  <span key={h} className="text-xs px-2.5 py-1 rounded-lg glass border border-white/8 text-slate-400">{h}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Certifications ── */}
        <motion.div
          variants={fadeUp(0.24)} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="mb-8"
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Award size={13} className="text-violet-400"/> Certifications
          </p>
          <div className="space-y-4">
            {CERTIFICATIONS.map(cert => (
              <div key={cert.name}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-emerald-500/20 transition-all duration-200 flex items-center gap-5"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color}
                  flex items-center justify-center text-xl shrink-0`}>
                  {cert.badge}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-100 text-sm">{cert.name}</p>
                  <p className="text-xs text-slate-500">{cert.issuer} · {cert.date}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Leadership ── */}
        <motion.div
          variants={fadeUp(0.3)} initial="hidden" animate={inView ? 'show' : 'hidden'}
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <GraduationCap size={13} className="text-violet-400"/> Leadership & Volunteering
          </p>
          <div className="space-y-4">
            {LEADERSHIP.map(l => (
              <div key={l.org}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-amber-500/20 transition-all duration-200 flex items-center gap-5"
              >
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${l.color}
                  flex items-center justify-center text-xl shrink-0`}>
                  {l.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-100 text-sm">{l.org}</p>
                  <p className={`text-xs font-medium bg-gradient-to-r ${l.color} bg-clip-text text-transparent`}>{l.role}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{l.period}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
