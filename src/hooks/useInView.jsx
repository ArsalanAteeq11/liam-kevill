import { useState, useEffect } from 'react';

export function useInView(options = {}) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        // Optional: stop observing once it's in view
        // observer.unobserve(ref);
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    });

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.rootMargin]);

  return [setRef, inView];
}
