import React from 'react';

interface FooterProps {
  scrollToId: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToId }) => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h4>Dr. Rakesh Kumar</h4>
            <p>
              Former Director, CSIR-NEERI. IIT Bombay M.Tech & M.Sc. Ph.D. in Environmental Engineering. Pioneer of PHYTORID™ technology, now reaching 64 villages across Maharashtra.
            </p>
            <div className="socials">
              <a
                className="soc"
                href="https://www.linkedin.com/in/rakesh-kumar-3478074?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
              >
                in
              </a>
              <button className="soc" onClick={() => scrollToId('contact')}>
                ✉
              </button>
            </div>
          </div>

          <div>
            <h4>Navigate</h4>
            <div className="f-links">
              {['top', 'about', 'journey', 'expertise', 'awards', 'news', 'contact'].map((id) => (
                <button
                  key={id}
                  className="f-link-btn"
                  onClick={() => scrollToId(id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.86rem'
                  }}
                >
                  {id === 'top' ? 'Home' : id === 'about' ? 'About' : id === 'journey' ? 'Career Journey' : id === 'expertise' ? 'Areas of Expertise' : id === 'awards' ? 'Honours & Awards' : id === 'news' ? 'Media & Digital News' : 'Connect'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4>Legacy</h4>
            <div className="f-links">
              <span>95+ Journal Publications</span>
              <span>92 Conference Papers</span>
              <span>10 Patents (2 International)</span>
              <span>9 National & Intl. Honours</span>
              <span>PHYTORID™ — 64 Villages, Maharashtra</span>
              <span>Chairperson, AWMA India Chapter</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Dr. Rakesh Kumar — Environmental Science & Engineering</span>
          <span>Former Director, CSIR-NEERI · Maharashtra, India</span>
        </div>
      </div>
    </footer>
  );
};
