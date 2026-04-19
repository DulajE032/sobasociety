import './gallery.css';
import im1 from '../../../assets/heroimages/im1.png';
import im2 from '../../../assets/heroimages/im2.png';
import im3 from '../../../assets/heroimages/im3.png';
import im4 from '../../../assets/heroimages/im4.png';
import wa1 from '../../../assets/heroimages/WhatsApp Image 2026-04-18 at 14.47.55 (2).jpeg';
import wa2 from '../../../assets/heroimages/WhatsApp Image 2026-04-18 at 14.47.56.jpeg';
import { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

const Gallery = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    // Map your local images to the structure expected by Galleria
    const data = [
      { itemImageSrc: im1, alt: 'River Cleanup' },
      { itemImageSrc: wa1, alt: 'Forest Drive' },
      { itemImageSrc: im2, alt: 'Community Meetup' },
      { itemImageSrc: wa2, alt: 'Nature Session' },
      { itemImageSrc: im3, alt: 'Green Project' },
      { itemImageSrc: im4, alt: 'Wildlife Observation' }
    ];
    setImages(data);
  }, []);

  const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block', borderRadius: '12px' }} />;
  };

  return (
    <section id="gallery" className="gallery-container">
      <h2 className="section-title">Gallery</h2>
      
      <div className="card" style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', maxWidth: '800px', padding: '0 20px' }}>
        <Galleria 
          value={images} 
          style={{ width: '100%' }} 
          changeItemOnIndicatorHover 
          showThumbnails={false} 
          showIndicators 
          item={itemTemplate} 
          circular
          autoPlay
          transitionInterval={3000}
        />
      </div>
    </section>
  );
};

export default Gallery;
