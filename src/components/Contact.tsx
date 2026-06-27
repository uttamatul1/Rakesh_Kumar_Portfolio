import React, { useState } from 'react';
import { Scheduler } from './Scheduler';

interface ContactProps {
  formSent: boolean;
  setFormSent: (sent: boolean) => void;
  addReveal: (el: HTMLElement | null) => void;
}

export const Contact: React.FC<ContactProps> = ({
  formSent,
  setFormSent,
  addReveal
}) => {
  const [activeTab, setActiveTab] = useState<'message' | 'schedule'>('message');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="section contact-section rv" id="contact" ref={addReveal}>
      <div className="section-inner">
        <div className="s-head">
          <h2>Connect</h2>
          <span className="s-num mono">06 / Get in Touch</span>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Collaborations, consultancy & speaking engagements.</h3>
            <p>
              For media enquiries, institutional collaborations, or to discuss sustainable technology and environmental policy — reach out directly or send a message.
            </p>
            <div className="info-row">
              <div className="info-item">
                <div className="info-ico">✉</div>
                <div>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:rakeshmee@rediffmail.com" className="clickable-link">
                      rakeshmee@rediffmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-ico">in</div>
                <div>
                  <h5>LinkedIn</h5>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/rakesh-kumar-3478074?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="clickable-link"
                    >
                      linkedin.com/in/rakeshkumar-3478074
                    </a>
                  </p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-ico">⌖</div>
                <div>
                  <h5>Based in</h5>
                  <p>Maharashtra, India</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-ico">✓</div>
                <div>
                  <h5>Open for</h5>
                  <p>
                    PHYTORID deployments · Air quality projects · Climate & health research · Mentorship
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="contact-tabs">
              <button
                type="button"
                className={`tab-btn ${activeTab === 'message' ? 'active' : ''}`}
                onClick={() => setActiveTab('message')}
              >
                Send Message
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''}`}
                onClick={() => setActiveTab('schedule')}
              >
                Schedule Call
              </button>
            </div>

            {activeTab === 'message' ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Full Name</label>
                  <input type="text" required placeholder="Your name" />
                </div>
                <div className="form-row">
                  <label>Email</label>
                  <input type="email" required placeholder="you@example.com" />
                </div>
                <div className="form-row">
                  <label>Reason for Contact</label>
                  <select defaultValue="Collaboration / Research Partnership">
                    <option>Collaboration / Research Partnership</option>
                    <option>Consultancy Enquiry</option>
                    <option>Speaking Engagement</option>
                    <option>Media / Press Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-row">
                  <label>Message</label>
                  <textarea rows={4} required placeholder="Tell us about your enquiry..."></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-g"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Send Message
                </button>

                {formSent && (
                  <div id="formMsg" className="show" style={{ marginTop: '14px' }}>
                    Message received — Dr. Kumar's team will be in touch.
                  </div>
                )}
              </form>
            ) : (
              <Scheduler />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

