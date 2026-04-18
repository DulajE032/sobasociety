import './footer.css';
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-section">
          <div className='bungee-regular' style={{fontSize:'25px'}}>
            සොබා
              </div>
          <p>Protecting the environment for a sustainable future. Join us in making a difference.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/soba/public">Home</a></li>
            <li><a href="/pages/events">Events</a></li>
            <li><a href="/pages/board">Board</a></li>
            <li><a href="/pages/about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@awagreen.org</p>
          <p>Phone: +1 (234) 567-890</p>
          <div className="social-links">
            {/* Social Icons Placeholder */}
            <span className="social-icon">FB</span>
            <span className="social-icon">TW</span>
            <span className="social-icon">IG</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Awa Green Society. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
