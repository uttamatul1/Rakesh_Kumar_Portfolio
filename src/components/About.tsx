import React from 'react';
import { ABOUT_CARDS, type CardItem } from '../data/portfolioData';

interface AboutProps {
  setModalData: (data: CardItem) => void;
  addReveal: (el: HTMLElement | null) => void;
}

export const About: React.FC<AboutProps> = ({ setModalData, addReveal }) => {
  return (
    <section className="section rv" id="about" ref={addReveal}>
      <div className="section-inner">
        <div className="s-head">
          <h2>About Dr. Rakesh Kumar</h2>
          <span className="s-num mono">01 / Biography</span>
        </div>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              After acquiring his basic qualification in <strong>Environmental Science and Engineering from IIT Bombay in 1987</strong> (preceded by an M.Sc. in Chemistry, 1983–85), Dr. Kumar pursued work on developing technologies for <strong>automobile pollution control</strong> — research that also led to his <strong>Ph.D. in Environmental Engineering</strong>.
            </p>
            <p>
              His experience spans every field of environmental science and engineering: air pollution control and management, water and wastewater treatment, hazardous & municipal waste management, EIA and EA, and climate change.
            </p>
            <p>
              From 2003 to 2016, he <strong>led a team of more than 25 researchers</strong> in Mumbai, leading to the development of several patented cleaner technologies and serving on committees for Supreme Court and high-level science advisory committees at IIT Delhi.
            </p>
          </div>

          <div className="about-cards">
            {ABOUT_CARDS.map((c, i) => (
              <div 
                className="acard" 
                key={i} 
                onClick={() => setModalData(c)}
              >
                <div className="acard-num mono">{c.num}</div>
                <div>
                  <div className="acard-h">{c.h}</div>
                  <div className="acard-p">{c.p}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
