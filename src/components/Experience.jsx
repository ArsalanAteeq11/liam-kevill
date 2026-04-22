// Experience section – animated vertical timeline
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react';

const EXPERIENCES = [
  {
    title: 'Incoming Summer Associate',
    company: 'AlphaSights',
    division: 'Private Equity Division',
    period: 'Mar 2026 – Present',
    type: 'Upcoming',
    tags: ['Private Equity', 'Research', 'Strategy'],
    desc: 'Joining the private equity division as a Summer Associate, supporting institutional PE clients with expert network research and primary intelligence.',
    color: 'from-violet-500 to-purple-600',
    dot: 'bg-violet-500',
  },
  {
    title: 'Ambassador',
    company: 'Orfalea College of Business',
    division: 'Cal Poly, San Luis Obispo',
    period: 'Feb 2026 – Present',
    type: 'Current',
    tags: ['Leadership', 'Networking', 'Representation'],
    desc: 'Representing the Orfalea College of Business to prospective students, alumni, and professional partners — fostering community and institutional pride.',
    color: 'from-indigo-500 to-blue-600',
    dot: 'bg-indigo-500',
  },
  {
    title: 'Summer Intern',
    company: 'Rosewood Family Advisors',
    division: 'Tax, Accounting & Philanthropic Advisory',
    period: 'Jun 2025 – Aug 2025',
    type: 'Past',
    tags: ['Tax Strategy', 'Accounting', 'Philanthropy'],
    desc: 'Supported advisors in tax planning, financial accounting, and philanthropic advisory for high-net-worth families. Gained hands-on exposure to estate planning and charitable giving structures.',
    color: 'from-emerald-500 to-teal-600',
    dot: 'bg-emerald-500',
  },
  {
    title: 'Intern',
    company: 'Kardder',
    division: 'Growth Strategy & Partnerships',
    period: 'Mar 2025 – Jul 2025',
    type: 'Past',
    tags: ['Growth Strategy', 'Partnerships', 'B2B'],
    desc: 'Developed and executed growth strategies and partnership frameworks to expand Kardder\'s market presence. Identified strategic partnership opportunities and contributed to revenue-generating initiatives.',
    color: 'from-sky-500 to-cyan-600',
    dot: 'bg-sky-500',
  },
  {
    title: 'Marketing Ambassador',
    company: 'Up & Up Festival',
    division: 'Brand Strategy & Audience Growth',
    period: 'Jan 2025 – Jun 2025',
    type: 'Past',
    tags: ['Brand Strategy', 'Marketing', 'Events'],
    desc: 'Spearheaded campus marketing campaigns and audience growth initiatives for the Up & Up music festival. Drove ticket sales and brand awareness through targeted community outreach.',
    color: 'from-rose-500 to-pink-600',
    dot: 'bg-rose-500',
  },
  {
    title: 'Student Marketing Ambassador',
    company: 'CELSIUS Holdings',
    division: 'Campus Growth & Partnerships',
    period: 'Jul 2024 – Jun 2025',
    type: 'Past',
    tags: ['Campus Marketing', 'Partnerships', 'CPG'],
    desc: 'Led campus-level growth initiatives for CELSIUS, a leading energy drink brand. Built strategic partnerships with campus organizations and executed data-driven marketing campaigns to grow brand affinity.',
    color: 'from-amber-500 to-orange-600',
    dot: 'bg-amber-500',
  },
];

const TYPE_COLORS = {
  Upcoming: 'text-violet-300 bg-violet-500/10 border-violet-500/30',
  Current:  'text-blue-300 bg-blue-500/10 border-blue-500/30',
  Past:     'text-slate-400 bg-slate-500/10 border-slate-500/20',
};

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.08 });

  return (
    <section id="experience" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-violet-400 font-mono text-sm">02.</span>
          <h2 className="font-outfit font-bold text-3xl md:text-4xl text-slate-100">Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-indigo-500/30 to-transparent" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.company + exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative pl-16 md:pl-20 group"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-5.5 top-5 w-4 h-4 rounded-full ${exp.dot}
                  ring-4 ring-[#030712] shadow-lg group-hover:scale-125 transition-transform duration-300`}
                  style={{ left: '18px' }}
                />

                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-white/5
                  hover:border-violet-500/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-900/20
                  transition-all duration-300">

                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-outfit font-bold text-lg text-slate-100 group-hover:text-violet-200 transition-colors">
                        {exp.title}
                      </h3>
                      <p className={`font-semibold text-sm bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{exp.division}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`text-xs px-2.5 py-1 rounded-full border ${TYPE_COLORS[exp.type]}`}>
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-lg glass border border-white/8 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
