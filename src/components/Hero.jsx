// Hero section – animated name, title, CTA buttons + particle background
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowDown } from 'lucide-react';
import liamPhoto from '../assets/liam.jfif';

/* ── Particle system ─────────────────────────────────────────────────────── */
function Particles({ canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, particles = [], raf;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '139,92,246' : '99,102,241',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef]);
  return null;
}

/* ── Stagger container variant ───────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ── Component ───────────────────────────────────────────────────────────── */
export default function Hero() {
  const canvasRef = useRef(null);

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden  mt-28 md:mt-12"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/5 blur-3xl" />
      </div>

      {/* Particle canvas */}
      <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />
      <Particles canvasRef={canvasRef} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full md:w-1/2 text-center md:text-left"
        >
          {/* Badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            <span className="text-xs font-medium text-violet-400 tracking-widest uppercase">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-outfit font-black text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4 leading-none"
          >
            <span className="gradient-text">Liam</span>
            <br />
            <span className="text-slate-100">Kevill</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-300 font-medium mb-2 mt-6"
          >
            Finance &amp; Economics Student{' '}
            <span className="gradient-text font-semibold">@ Cal Poly</span>
          </motion.p>

          {/* Subtitle */}
          <motion.p variants={item} className="text-sm md:text-base text-slate-500 mb-8">
            Orfalea College of Business Ambassador · Private Equity Enthusiast
          </motion.p>

          {/* Location */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 text-slate-500 text-sm mb-10 justify-center md:justify-start w-full"
          >
            <MapPin size={14} className="text-violet-400" />
            San Francisco Bay Area, CA
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a
              href="mailto:liam.kevill@gmail.com"
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl
                bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm
                shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50
                transition-all duration-300 hover:-translate-y-0.5"
            >
              <Mail size={15} />
              Contact Me
            </a>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl
                glass border border-white/10 text-slate-300 hover:text-white font-semibold text-sm
                hover:border-violet-500/40 hover:bg-violet-500/10
                transition-all duration-300 hover:-translate-y-0.5"
            >
              View Experience
            </button>
          </motion.div>

          {/* Desktop Scroll hint */}
          <motion.div
            variants={item}
            className="mt-16 hidden md:flex flex-col items-start gap-2 text-slate-600 cursor-pointer hover:text-slate-400 transition-colors"
            onClick={scrollToAbout}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-violet-500 to-indigo-500 shadow-2xl shadow-violet-900/40 group">
            <img
              src={liamPhoto}
              alt="Liam Kevill"
              className="w-full h-full object-cover rounded-full border-[6px] border-[#030712] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Mobile scroll hint */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden flex flex-col items-center gap-2 text-slate-600 cursor-pointer"
        onClick={scrollToAbout}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
