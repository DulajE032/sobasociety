import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react'
import logo3 from '../../assets/logo/logo3.png'
import './navBar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClassesClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    // Add small delay to ensure path matches / before scrolling
    setTimeout(() => {
      const section = document.getElementById('courses');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <div 
        className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>
      
      <nav className="nav-container">
        <div className="glass-panel nav-glass-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <a href="/soba/public" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: 'inherit', textDecoration: 'none' }}>
              <img src={logo3} alt="Natural Society Logo" style={{ height: '40px' }} />
              <div className='bungee-regular' style={{fontSize:'25px'}}>
              සොබා
                </div>
            </a>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'mobile-nav-dropdown' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            <Link to="/form" className="btn-primary" style={{color:'white', textDecoration:'none', padding:'8px 20px'}} onClick={() => setIsMenuOpen(false)}>Join Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
