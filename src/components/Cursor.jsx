// Custom cursor that follows the mouse with a trailing ring effect
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top  = mouseY + 'px';
      }
    };

    // Smooth ring lerp
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top  = ringY + 'px';
      }
      requestAnimationFrame(animate);
    };

    // Scale up ring on hoverable elements
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.8)';
        ringRef.current.style.borderColor = 'rgba(139,92,246,0.9)';
        ringRef.current.style.background = 'rgba(139,92,246,0.08)';
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        ringRef.current.style.borderColor = 'rgba(139,92,246,0.6)';
        ringRef.current.style.background = 'transparent';
      }
    };

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
