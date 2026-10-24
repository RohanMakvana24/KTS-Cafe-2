import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { ArrowUp } from 'lucide-react';

interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | number | HTMLElement, options?: { offset?: number; duration?: number; immediate?: boolean }) => void;
  scrollProgress: number;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
  scrollProgress: 0,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize Lenis with butter-smooth inertia configuration (inspired by codeofsagar.in)
    const instance = new Lenis({
      duration: prefersReducedMotion ? 0.3 : 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      infinite: false,
    });

    lenisRef.current = instance;
    setLenis(instance);

    // Track scroll position & page completion
    const onScroll = (e: { progress: number; scroll: number }) => {
      setScrollProgress(Math.min(100, Math.max(0, Math.round(e.progress * 100))));
      setShowScrollTop(e.scroll > 400);
    };

    instance.on('scroll', onScroll);

    // RAF loop for buttery 60/120fps refresh rates
    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global resize handler to keep virtual scroll bounds synchronized
    const handleResize = () => {
      instance.resize();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback(
    (target: string | number | HTMLElement, options?: { offset?: number; duration?: number; immediate?: boolean }) => {
      const activeInstance = lenisRef.current;
      const defaultOffset = -76; // Offset for sticky navbar
      const offset = options?.offset !== undefined ? options.offset : defaultOffset;

      if (activeInstance) {
        if (typeof target === 'string' && target.startsWith('#')) {
          const el = document.querySelector(target);
          if (el) {
            activeInstance.scrollTo(el as HTMLElement, {
              offset,
              duration: options?.duration ?? 1.2,
              immediate: options?.immediate ?? false,
            });
            return;
          }
        }
        activeInstance.scrollTo(target, {
          offset,
          duration: options?.duration ?? 1.2,
          immediate: options?.immediate ?? false,
        });
      } else {
        // Fallback if Lenis is not active
        if (typeof target === 'number') {
          window.scrollTo({ top: target, behavior: 'smooth' });
        } else if (typeof target === 'string') {
          const el = document.querySelector(target);
          if (el) {
            const y = el.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }
    },
    []
  );

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo, scrollProgress }}>
      {/* Top Scroll Progress Indicator (Sleek golden line at the absolute top edge) */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none origin-left"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-[#FFDD17] to-[#00843D] shadow-[0_0_10px_rgba(255,221,23,0.7)] transition-transform duration-75 ease-out"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
            transformOrigin: '0% 50%',
          }}
        />
      </div>

      {children}

      {/* Floating Smooth Scroll-To-Top Button with circular progress ring */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ease-out ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => scrollTo(0, { duration: 1.0, offset: 0 })}
          className="relative group p-3 rounded-full bg-white/90 dark:bg-[#12161E]/90 text-neutral-800 dark:text-neutral-100 border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDD17]"
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="21"
              className="stroke-black/5 dark:stroke-white/10"
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              cx="24"
              cy="24"
              r="21"
              className="stroke-[#FFDD17]"
              strokeWidth="2.5"
              strokeDasharray={131.95}
              strokeDashoffset={131.95 - (131.95 * scrollProgress) / 100}
              strokeLinecap="round"
              fill="none"
              style={{ transition: 'stroke-dashoffset 0.1s linear' }}
            />
          </svg>
          <ArrowUp className="w-5 h-5 text-neutral-800 dark:text-neutral-200 group-hover:text-amber-500 dark:group-hover:text-[#FFDD17] transition-colors relative z-10" />
        </button>
      </div>
    </SmoothScrollContext.Provider>
  );
};
