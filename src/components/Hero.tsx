import React from 'react';

interface HeroProps {
  scrollToId: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToId }) => {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div>
          <div className="eyebrow">Environmental Scientist · Former Director, CSIR-NEERI</div>
          <h1>Science for a<br /><em>greener, cleaner</em><br />India.</h1>
          <p className="hero-sub">
            Dr. Rakesh Kumar — IIT Bombay M.Tech & M.Sc., Ph.D. in Environmental Engineering — dedicated over 35 years to transforming India's environment through research, policy, and breakthrough technologies like PHYTORID™, now reaching 64 villages across Maharashtra.
          </p>
          <div className="hero-btns">
            <button className="btn btn-g" onClick={() => scrollToId('about')}>
              View Full Profile
            </button>
            <button className="btn btn-o" onClick={() => scrollToId('contact')}>
              Get in Touch
            </button>
          </div>
        </div>

        <div className="photo-wrap">
          <div className="photo-outer">
            <div className="photo-ring" />
            <div className="photo-ring-gap" />
            <div className="photo-circle">
              <img
                src="https://imgs.search.brave.com/RTVNfywIUUNeLow62eIomA7sWaIMovqAwZn0E5nS4y8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY2Nz/YWYuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzAxL1Vu/dGl0bGVkLWRlc2ln/bi00Mi5wbmc"
                alt="Dr. Rakesh Kumar"
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = 'https://imgs.search.brave.com/RTVNfywIUUNeLow62eIomA7sWaIMovqAwZn0E5nS4y8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY2Nz/YWYuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzAxL1Vu/dGl0bGVkLWRlc2ln/bi00Mi5wbmc';
                }}
              />
            </div>
            <div className="ftag ftag-desktop t1">🌱 PHYTORID™ Inventor</div>
            <div className="ftag ftag-desktop t2">🏆 9 Int'l Awards</div>
            <div className="ftag ftag-desktop t3">📜 10 Patents</div>
          </div>

          <div style={{ marginTop: '28px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="photo-name">Dr. Rakesh Kumar</div>
            <div className="photo-title">Former Director, CSIR-NEERI · IIT Bombay · Ph.D.</div>
            <div className="ftags-mobile-container">
              <span className="ftag-mobile">🌱 PHYTORID™ Inventor</span>
              <span className="ftag-mobile">🏆 9 Int'l Awards</span>
              <span className="ftag-mobile">📜 10 Patents</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
