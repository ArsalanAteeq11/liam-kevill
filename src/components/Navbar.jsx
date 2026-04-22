// Floating glassmorphic navbar with active section tracking
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  // Shrink/blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is in view
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-2xl transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-outfit font-bold text-lg tracking-tight gradient-text"
        >
          LK.
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <button
                onClick={() => scrollTo(href)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${active === href.slice(1)
                    ? 'text-violet-300'
                    : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                {active === href.slice(1) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-violet-500/10 border border-violet-500/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:liam.kevill@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
            bg-violet-600/20 border border-violet-500/30 text-violet-300
            hover:bg-violet-600/40 hover:border-violet-400/50 transition-all duration-200"
        >
          Get in Touch
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
            className="block w-5 h-0.5 bg-slate-300 origin-center transition-all" />
          <motion.span animate={{ opacity: open ? 0 : 1 }}
            className="block w-5 h-0.5 bg-slate-300 transition-all" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
            className="block w-5 h-0.5 bg-slate-300 origin-center transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass rounded-b-2xl border-t border-white/5"
          >
            <ul className="flex flex-col py-3 px-4 gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:text-violet-300 rounded-xl hover:bg-violet-500/10 transition-all"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
