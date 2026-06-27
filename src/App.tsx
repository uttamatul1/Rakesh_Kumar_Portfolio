import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Forest3D } from './components/Forest3D';
import { Hero } from './components/Hero';
import { StatsBand } from './components/StatsBand';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { Expertise } from './components/Expertise';
import { Awards } from './components/Awards';
import { MediaNews } from './components/MediaNews';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FactsTicker } from './components/FactsTicker';
import { Modal } from './components/Modal';

export const App: React.FC = () => {
  const mode = 'day';
  const [activeMediaTab, setActiveMediaTab] = useState<string>('innovation');
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [solid, setSolid] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [showTop, setShowTop] = useState<boolean>(false);
  const [modalData, setModalData] = useState<{ tag: string; title: string; body: string } | null>(null);
  const [formSent, setFormSent] = useState<boolean>(false);

  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  // Set theme attribute to day mode on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'day');
  }, []);

  // Handle window scrolling events (progress bar and top arrow display)
  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 60);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setProgress(pct);
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-reveal effects
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.08 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const scrollToId = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setNavOpen(false);
  };

  return (
    <>
      {/* Top scroll progress indicator */}
      <div 
        id="prog" 
        style={{ width: `${progress}%` }} 
      />

      {/* 3D forest environment */}
      <Forest3D mode={mode} />

      {/* Responsive navigation header */}
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        solid={solid}
        scrollToId={scrollToId}
      />

      {/* Main content sections */}
      <Hero scrollToId={scrollToId} />

      <FactsTicker />

      <StatsBand addReveal={addReveal} />

      <About setModalData={setModalData} addReveal={addReveal} />

      <Journey setModalData={setModalData} addReveal={addReveal} />

      <Expertise setModalData={setModalData} addReveal={addReveal} />

      <Awards setModalData={setModalData} addReveal={addReveal} />

      <MediaNews
        activeMediaTab={activeMediaTab}
        setActiveMediaTab={setActiveMediaTab}
        setModalData={setModalData}
        addReveal={addReveal}
      />

      <Contact
        formSent={formSent}
        setFormSent={setFormSent}
        addReveal={addReveal}
      />

      <Footer scrollToId={scrollToId} />

      {/* Shared detail modal overlays */}
      <Modal data={modalData} onClose={() => setModalData(null)} />

      {/* Back to top scroll button */}
      <button 
        id="toTop" 
        className={showTop ? 'show' : ''} 
        onClick={() => scrollToId('top')}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </>
  );
};

export default App;
