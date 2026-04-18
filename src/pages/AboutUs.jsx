import React from 'react';
import Navbar from '../components/navbar/navBar.jsx';
import Footer from '../components/pages/public/footer.jsx';
import Board from '../components/pages/director board/board.jsx';
import './AboutUs.css';

const AboutUs = () => {

  return (
    <>
      <Navbar />
      <div className="about-page-container">
        <div className="about-content-wrapper">
          <h1 className="about-page-title fade-in-up">About Soba Society</h1>
          <p className="about-page-subtitle fade-in-up">
            We are an officially recognized student society driven by our passion for nature conservation, 
            biodiversity protection, and promoting environmental responsibility everywhere we go.
          </p>
          <div className="about-paragraphs fade-in-up" style={{animationDelay: '0.2s'}}>
            <p>
              Since our foundation at the University of Peradeniya, the Soba Society has tirelessly worked to bridge the gap between human activities and environmental preservation. 
            </p>
            <p>
             Our members span across all faculties and bring together unique, diverse skillsets. We organize immersive rewilding habitats, expansive coastal cleanups, educational seminars in local schools, and much more entirely through voluntary student effort. Join us in making an impact!
            </p>
          </div>
        </div>
      </div>
      <Board />
      <Footer />
    </>
  );
};

export default AboutUs;
