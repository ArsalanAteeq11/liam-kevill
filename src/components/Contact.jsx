// Contact section – animated form UI + social links
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, XIcon } from './Icons';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.25,0.46,0.45,0.94] } },
});

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-900/10 blur-[120px] pointer-events-none rounded-t-full" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={fadeUp(0)} initial="hidden" animate={inView ? 'show' : 'hidden'}
          className="text-center mb-16"
        >
          <span className="text-violet-400 font-mono text-sm mb-4 block">05. What's Next?</span>
          <h2 className="font-outfit font-black text-5xl md:text-6xl text-slate-100 mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            I'm currently exploring new opportunities in private equity, growth strategy, and financial advisory.
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Direct Contact info (2 cols) */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'show' : 'hidden'} className="md:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-6 border border-white/5 h-full flex flex-col justify-center text-center items-center group">
              <div className="w-16 h-16 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail size={24} className="text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Email Me</h3>
              <p className="text-slate-400 text-sm mb-8">Let's connect and discuss how we can create value together.</p>
              <a
                href="mailto:liam.kevill@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                  bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm
                  shadow-lg shadow-violet-900/40 transition-all duration-300"
              >
                liam.kevill@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Form UI (3 cols) */}
          <motion.div variants={fadeUp(0.2)} initial="hidden" animate={inView ? 'show' : 'hidden'} className="md:col-span-3">
            <form className="glass rounded-2xl p-6 md:p-8 border border-white/5 space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 ml-1">Name</label>
                  <input type="text" placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400 ml-1">Email</label>
                  <input type="email" placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400 ml-1">Message</label>
                <textarea placeholder="Hi Liam, I'd like to discuss..." rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all resize-none" />
              </div>
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                  glass border border-white/10 text-slate-200 font-semibold text-sm
                  hover:bg-violet-500/20 hover:border-violet-500/50 transition-all duration-300 mt-2 group"
              >
                Send Message
                <ArrowUpRight size={16} className="text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div variants={fadeUp(0.3)} initial="hidden" animate={inView ? 'show' : 'hidden'} className="mt-24 text-center border-t border-white/5 pt-8">
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-slate-500 hover:text-violet-400 transition-colors"><LinkedInIcon size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-violet-400 transition-colors"><GitHubIcon size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-violet-400 transition-colors"><XIcon size={20} /></a>
          </div>
          <p className="text-sm text-slate-600 font-mono">
            Designed & Built by Liam Kevill &copy; {new Date().getFullYear()}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
