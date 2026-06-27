import React, { useState, useEffect } from 'react';

const FACTS = [
  { emoji: '🌱', text: 'PHYTORID™ uses zero energy and zero maintenance to treat sewage naturally.' },
  { emoji: '🏘️', text: '64 villages across Maharashtra now use Dr. Kumar\'s PHYTORID technology.' },
  { emoji: '🚗', text: 'His research led to India\'s 1996 catalytic converter mandate for vehicles.' },
  { emoji: '💧', text: 'India produces 62 billion litres of wastewater daily — PHYTORID tackles this sustainably.' },
  { emoji: '🌍', text: 'He\'s collaborated with WHO, World Bank, USEPA, IAEA, and ADB.' },
  { emoji: '📜', text: '10 patents including 2 international (Europe & Australia) for clean technology.' },
  { emoji: '🎓', text: 'Ranked 1st in M.Tech at IIT Bombay in Environmental Science & Engineering.' },
  { emoji: '🏆', text: '9 international awards for environmental science and innovation.' },
];

export const FactsTicker: React.FC = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentFact((prev) => (prev + 1) % FACTS.length);
        setIsAnimating(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fact = FACTS[currentFact];

  return (
    <div className="facts-ticker">
      <div className="facts-ticker-inner">
        <span className="facts-label">Did you know?</span>
        <div className={`facts-content ${isAnimating ? 'fading' : ''}`}>
          <span className="facts-emoji">{fact.emoji}</span>
          <span className="facts-text">{fact.text}</span>
        </div>
      </div>
    </div>
  );
};
