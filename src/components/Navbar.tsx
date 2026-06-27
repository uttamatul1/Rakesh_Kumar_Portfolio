import React, { useEffect } from 'react';

interface NavbarProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  solid: boolean;
  scrollToId: (id: string) => void;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: '🧑‍🔬' },
  { id: 'journey', label: 'Journey', icon: '🛤️' },
  { id: 'expertise', label: 'Expertise', icon: '🧪' },
  { id: 'awards', label: 'Awards', icon: '🏆' },
  { id: 'news', label: 'Media & News', icon: '📰' },
  { id: 'contact', label: 'Contact', icon: '📬' },
];

export const Navbar: React.FC<NavbarProps> = ({
  navOpen,
  setNavOpen,
  solid,
  scrollToId
}) => {
  // Lock body scroll when drawer is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  const handleLinkClick = (id: string) => {
    scrollToId(id);
    setNavOpen(false);
  };

  return (
    <>
      <nav className={`nav ${solid ? 'solid' : ''}`}>
        <button className="brand" onClick={() => handleLinkClick('top')} aria-label="Scroll to top">
          <div className="brand-dot">RK</div> Dr. Rakesh Kumar
        </button>

        {/* Desktop nav links — hidden on mobile via CSS */}
        <ul className="nav-links-desktop">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <button className="nav-link-btn" onClick={() => handleLinkClick(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger button — visible only on mobile */}
        <button
          className="hamburger"
          onClick={() => setNavOpen(true)}
          aria-label="Open menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`drawer-overlay ${navOpen ? 'open' : ''}`}
        onClick={() => setNavOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <aside className={`drawer ${navOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <div className="brand-dot">RK</div>
            <span>Navigation</span>
          </div>
          <button className="drawer-close" onClick={() => setNavOpen(false)} aria-label="Close menu">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="1" y1="1" x2="17" y2="17" />
              <line x1="17" y1="1" x2="1" y2="17" />
            </svg>
          </button>
        </div>

        <ul className="drawer-links">
          {NAV_ITEMS.map(({ id, label, icon }) => (
            <li key={id}>
              <button className="drawer-link" onClick={() => handleLinkClick(id)}>
                <span className="drawer-link-icon">{icon}</span>
                <span className="drawer-link-label">{label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="drawer-footer">
          <p>🌱 "Science for a greener, cleaner India."</p>
        </div>
      </aside>
    </>
  );
};
