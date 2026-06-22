import React, { useEffect, useRef, useState } from 'react';

interface StatsBandProps {
  addReveal: (el: HTMLElement | null) => void;
}

export const StatsBand: React.FC<StatsBandProps> = ({ addReveal }) => {
  const [counters, setCounters] = useState({
    pub: 0,
    conf: 0,
    pat: 0,
    awd: 0
  });
  
  const statsRef = useRef<HTMLDivElement | null>(null);
  const countersStarted = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { pub: 95, conf: 92, pat: 10, awd: 9 };
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quadratic
      const ease = progress * (2 - progress);

      setCounters({
        pub: Math.floor(ease * targets.pub),
        conf: Math.floor(ease * targets.conf),
        pat: Math.floor(ease * targets.pat),
        awd: Math.floor(ease * targets.awd)
      });

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  const handleStatsRef = (el: HTMLDivElement | null) => {
    statsRef.current = el;
    addReveal(el);
  };

  return (
    <div className="stats-band rv" id="stats" ref={handleStatsRef}>
      <div className="stats-inner">
        <div className="stat-box">
          <div className="stat-n">{counters.pub}</div>
          <div className="stat-l">Journal Publications</div>
        </div>
        <div className="stat-box">
          <div className="stat-n">{counters.conf}</div>
          <div className="stat-l">Conference Papers</div>
        </div>
        <div className="stat-box">
          <div className="stat-n">{counters.pat}</div>
          <div className="stat-l">Patents (2 International)</div>
        </div>
        <div className="stat-box">
          <div className="stat-n">{counters.awd}</div>
          <div className="stat-l">National & Intl. Awards</div>
        </div>
      </div>
    </div>
  );
};
