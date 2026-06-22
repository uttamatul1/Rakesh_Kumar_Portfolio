import React from 'react';

interface NavbarProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  solid: boolean;
  scrollToId: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  navOpen,
  setNavOpen,
  solid,
  scrollToId
}) => {
  const navLinks = ['about', 'journey', 'expertise', 'awards', 'news', 'contact'];

  const handleLinkClick = (id: string) => {
    scrollToId(id);
    setNavOpen(false);
  };

  const getLinkLabel = (id: string) => {
    switch (id) {
      case 'about': return 'About';
      case 'journey': return 'Journey';
      case 'expertise': return 'Expertise';
      case 'awards': return 'Awards';
      case 'news': return 'Media & News';
      case 'contact': return 'Contact';
      default: return id;
    }
  };

  return (
    <>
      <nav className={`nav ${solid ? 'solid' : ''}`}>
        <button className="brand" onClick={() => handleLinkClick('top')} aria-label="Scroll to top">
          <div className="brand-dot">RK</div> Dr. Rakesh Kumar
        </button>

        {/* Navigation Drawer Container */}
        <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
          <button className="drawer-close" onClick={() => setNavOpen(false)} aria-label="Close menu">
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>
          
          {navLinks.map((id) => (
            <li key={id}>
              <button className="nav-link-btn" onClick={() => handleLinkClick(id)}>
                {getLinkLabel(id)}
              </button>
            </li>
          ))}


        </ul>

        {/* Backdrop overlay for mobile menu drawer */}
        <div 
          className={`nav-overlay ${navOpen ? 'open' : ''}`} 
          onClick={() => setNavOpen(false)}
        />

        {/* Hamburger button visible on mobile when menu is closed */}
        {!navOpen && (
          <button className="hamburger" onClick={() => setNavOpen(true)} aria-label="Open menu">
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        )}
      </nav>
    </>
  );
};
