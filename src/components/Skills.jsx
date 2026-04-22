// Skills section – animated bars + tag cloud
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const SKILL_BARS = [
  { name: 'Financial Analysis',  pct: 88, color: 'from-violet-500 to-purple-600'  },
  { name: 'Private Equity',      pct: 82, color: 'from-indigo-500 to-blue-600'    },
  { name: 'Growth Strategy',     pct: 85, color: 'from-sky-500 to-cyan-600'       },
  { name: 'Marketing Strategy',  pct: 80, color: 'from-rose-500 to-pink-600'      },
  { name: 'Partnerships',        pct: 83, color: 'from-amber-500 to-orange-500'   },
  { name: 'Tax Strategy',        pct: 72, color: 'from-emerald-500 to-teal-600'   },
  { name: 'Accounting Basics',   pct: 70, color: 'from-slate-400 to-slate-500'    },
];

const SKILL_TAGS = [
  'Excel / Spreadsheets', 'Financial Modeling', 'Market Research',
  'Brand Development', 'Public Speaking', 'Client Relations',
  'Due Diligence', 'Strategic Planning', 'Lean Six Sigma',
  'Event Management', 'Team Leadership',
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.25,0.46,0.45,0.94] } },
});

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section id="skills" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">04.</span>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl text-slate-100">Skills</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Skill bars */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'show' : 'hidden'} className="space-y-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Core Competencies</p>
            {SKILL_BARS.map((skill, i) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                  <span className="text-xs font-mono text-slate-500">{skill.pct}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.pct}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tags + Languages */}
          <motion.div variants={fadeUp(0.2)} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Additional Skills</p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {SKILL_TAGS.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  className="glass border border-white/8 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-400
                    hover:border-violet-500/30 hover:text-violet-300 transition-all duration-200 cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Languages */}
            <div className="glass rounded-2xl p-5 border border-white/5">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Languages</p>
              <div className="space-y-3">
                {[
                  { lang: 'English',    level: 'Native', pct: 100, color: 'from-violet-500 to-indigo-500' },
                  { lang: 'Portuguese', level: 'Native', pct: 100, color: 'from-green-500 to-emerald-500' },
                  { lang: 'Spanish',    level: 'Basic',  pct: 35,  color: 'from-amber-500 to-orange-500'  },
                ].map((l, i) => (
                  <div key={l.lang}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-slate-300">{l.lang}</span>
                      <span className="text-xs text-slate-500">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${l.pct}%` } : { width: 0 }}
                        transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${l.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
