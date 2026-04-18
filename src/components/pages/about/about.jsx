import './about.css';
import { TreePine, Droplets, PawPrint } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-container fade-in-up">
      <div className="about-content">
        <h2 className="section-title">Who We Are</h2>
        <p className="about-text">
          Natural Society is a non-profit organization dedicated to preserving the beauty and vitality of our planet. We believe that true harmony is achieved when humanity respects and protects the natural world.
        </p>
        <div className="about-icons">
          <div className="icon-box">
            <TreePine size={48} className="icon-colored" />
            <span>Forests</span>
          </div>
          <div className="icon-box">
            <Droplets size={48} className="icon-colored" />
            <span>Oceans</span>
          </div>
          <div className="icon-box">
            <PawPrint size={48} className="icon-colored" />
            <span>Wildlife</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
