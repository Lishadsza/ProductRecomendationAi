import './HelpCentre.css';

function HelpCentre() {
  const helpIcon = (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '40px', height: '40px' }}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
  );

  return (
    <div className="help-centre">
      <section className="help-hero">
        <div className="help-hero-content">
          <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            {helpIcon}
            Help & Support
          </h1>
          <p>We're here to help you get the most out of Product AI</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <h3>Email Support</h3>
            <p>support@productai.com</p>
            <span className="contact-desc">Get a response within 24 hours</span>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
              </svg>
            </div>
            <h3>Live Chat</h3>
            <p>Available 24/7</p>
            <span className="contact-desc">Instant support from our team</span>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <h3>Phone Support</h3>
            <p>+91 9988776655</p>
            <span className="contact-desc">Mon-Fri, 9 AM - 6 PM IST</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HelpCentre;
