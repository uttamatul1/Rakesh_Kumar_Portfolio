import React from 'react';
import { MEDIA_TABS, type MediaItem } from '../data/portfolioData';

interface MediaNewsProps {
  activeMediaTab: string;
  setActiveMediaTab: (tabId: string) => void;
  setModalData: (data: MediaItem) => void;
  addReveal: (el: HTMLElement | null) => void;
}

export const MediaNews: React.FC<MediaNewsProps> = ({
  activeMediaTab,
  setActiveMediaTab,
  setModalData,
  addReveal
}) => {
  const activeTabObj = MEDIA_TABS.find((tab) => tab.id === activeMediaTab);
  const displayItems = activeTabObj ? activeTabObj.items : [];

  return (
    <section className="section rv" id="news" ref={addReveal}>
      <div className="section-inner">
        <div className="s-head">
          <h2>Media & Digital News</h2>
          <span className="s-num mono">05 / Press & Milestones</span>
        </div>

        {/* Tab Navigation links */}
        <div className="media-tabs-nav">
          {MEDIA_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`media-tab-btn ${activeMediaTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveMediaTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards Grid corresponding to Active Tab */}
        <div className="news-grid">
          {displayItems.map((item, index) => (
            <div
              className="news-card"
              key={index}
              onClick={() => setModalData(item)}
            >
              <div className="news-thumb">{item.thumb}</div>
              <div className="news-body">
                <div className="news-tag mono">{item.tag}</div>
                <h4>{item.h}</h4>
                <p>{item.p}</p>
                <div className="news-meta mono">{item.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
