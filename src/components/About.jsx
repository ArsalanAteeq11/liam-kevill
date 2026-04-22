// About section – bio, interests, quick stats
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Globe, TrendingUp, BarChart2, DollarSign, Briefcase } from 'lucide-react';

const INTERESTS = [
  { icon: DollarSign, label: 'Private Equity',    color: 'from-violet-500 to-purple-600'   },
  { icon: TrendingUp, label: 'Growth Strategy',   color: 'from-indigo-500 to-blue-600'     },
  { icon: BarChart2,  label: 'Financial Analysis', color: 'from-sky-500 to-cyan-600'        },
  { icon: Briefcase,  label: 'Entrepreneurship',  color: 'from-amber-500 to-orange-600'    },
];

const STATS = [
  { value: '3+',  label: 'Years Experience'  },
  { value: '6',   label: 'Roles Held'        },
  { value: '2',   label: 'Native Languages'  },
  { value: '2027',label: 'Graduation Year'   },
];

/* ── fade-up variant ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.25,0.46,0.45,0.94] } },
});

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-violet-400 font-mono text-sm">01.</span>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl text-slate-100">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Bio */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-5"
          >
            <p className="text-slate-300 text-base leading-relaxed">
              I'm a <span className="text-violet-300 font-semibold">Finance & Economics</span> student
              at California Polytechnic State University (Cal Poly), on track to graduate in 2027
              with a BS in Business Administration. As an Ambassador for the{' '}
              <span className="text-violet-300 font-semibold">Orfalea College of Business</span>,
              I bridge academic excellence with real-world professional experience.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              My career spans private equity research, tax & philanthropic advisory, growth
              partnerships, and brand strategy — giving me a uniquely cross-functional perspective
              on how businesses grow and create value.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I'm driven by the intersection of <span className="text-sky-400 font-medium">capital markets</span>,{' '}
              <span className="text-sky-400 font-medium">strategic decision-making</span>, and the
              operational levers that separate great companies from good ones.
            </p>

            {/* Email */}
            <a
              href="mailto:liam.kevill@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300
                border border-violet-500/30 rounded-xl px-4 py-2.5 glass
                hover:border-violet-400/60 hover:bg-violet-500/10 transition-all duration-200 mt-2"
            >
              <Mail size={14} />
              liam.kevill@gmail.com
            </a>
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Interests grid */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Interests</p>
              <div className="grid grid-cols-2 gap-3">
                {INTERESTS.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="glass rounded-2xl p-4 border border-white/5 hover:border-violet-500/20
                      hover:-translate-y-0.5 transition-all duration-200 group cursor-default"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-3`}>
                      <Icon size={15} className="text-white" />
                    </div>
                    <p className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-4 gap-3"
            >
              {STATS.map(({ value, label }) => (
                <div key={label} className="glass rounded-2xl p-3 border border-white/5 text-center">
                  <p className="font-outfit font-bold text-xl gradient-text">{value}</p>
                  <p className="text-slate-500 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="glass rounded-2xl p-4 border border-white/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <Globe size={14} className="text-violet-400" />
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Languages</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { lang: 'English', level: 'Native' },
                  { lang: 'Portuguese', level: 'Native' },
                  { lang: 'Spanish', level: 'Basic' },
                ].map(({ lang, level }) => (
                  <span key={lang} className="text-xs px-3 py-1.5 rounded-full glass border border-white/10 text-slate-300">
                    {lang} <span className="text-violet-400">· {level}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
