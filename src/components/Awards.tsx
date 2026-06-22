import React from 'react';
import { AWARDS, type AwardItem } from '../data/portfolioData';

interface AwardsProps {
  setModalData: (data: AwardItem) => void;
  addReveal: (el: HTMLElement | null) => void;
}

export const Awards: React.FC<AwardsProps> = ({ setModalData, addReveal }) => {
  return (
    <section className="section awards-section rv" id="awards" ref={addReveal}>
      <div className="section-inner">
        <div className="s-head">
          <h2>Honours & Awards</h2>
          <span className="s-num mono">04 / Recognition</span>
        </div>
        
        <div className="awards-grid">
          {AWARDS.map((c, i) => (
            <div 
              className="award-card" 
              key={i} 
              onClick={() => setModalData(c)}
            >
              <div className="award-yr">{c.yr}</div>
              <div className="award-body">
                <h4>{c.h}</h4>
                <p>{c.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
