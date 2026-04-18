import './footer.css';
import React from "react";
import { Mail,  UserCog } from 'lucide-react';

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
          <p>Phone:+94701688327</p>

        </div>
        <div className="footer-section tech-support-section">
          <h3>Technical Support</h3>
          <div className="web-master-card">
            <div className="web-master-pic">
              <UserCog size={28} color="#4CAF50" />
            </div>
            <div className="web-master-info">
              <h4>Web Master</h4>
              <p>Technical Officer</p>
              <p>K DULAJ ASHEN</p>
              <p>FAculty of enginnering university of peradeniya</p>
              <div className="tech-links">
                <a href="mailto:dulajashennew2002@gmail.com" aria-label="Email Technical Support">
                  <Mail size={18} />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Soba Green Society. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
