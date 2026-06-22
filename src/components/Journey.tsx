import React from 'react';
import { TIMELINE, type TimelineEvent } from '../data/portfolioData';

interface JourneyProps {
  setModalData: (data: TimelineEvent) => void;
  addReveal: (el: HTMLElement | null) => void;
}

export const Journey: React.FC<JourneyProps> = ({ setModalData, addReveal }) => {
  return (
    <section className="section rv" id="journey" ref={addReveal}>
      <div className="section-inner">
        <div className="s-head">
          <h2>Career Journey</h2>
          <span className="s-num mono">02 / Timeline</span>
        </div>
        
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <div 
              className="tl-item" 
              key={i} 
              onClick={() => setModalData(t)}
            >
              <div className="tl-year mono">{t.year}</div>
              <h4>{t.h}</h4>
              <p>{t.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
