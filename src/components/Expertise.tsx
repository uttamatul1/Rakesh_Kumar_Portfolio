import React from 'react';
import { EXPERTISE, type ExpertiseItem } from '../data/portfolioData';

interface ExpertiseProps {
  setModalData: (data: ExpertiseItem) => void;
  addReveal: (el: HTMLElement | null) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ setModalData, addReveal }) => {
  return (
    <section className="section rv" id="expertise" ref={addReveal}>
      <div className="section-inner">
        <div className="s-head">
          <h2>Areas of Expertise</h2>
          <span className="s-num mono">03 / Capabilities</span>
        </div>
        
        <div className="exp-grid">
          {EXPERTISE.map((c, i) => (
            <div 
              className="exp-card" 
              key={i} 
              onClick={() => setModalData(c)}
            >
              <span className="exp-ico">{c.ico}</span>
              <h4>{c.h}</h4>
              <p>{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
