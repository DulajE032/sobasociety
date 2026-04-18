import './gallery.css';
import im1 from '../../../assets/heroimages/im1.png';
import im2 from '../../../assets/heroimages/im2.png';
import im3 from '../../../assets/heroimages/im3.png';
import im4 from '../../../assets/heroimages/im4.png';
import logo from '../../../assets/logo/logo3.png';
import wa1 from '../../../assets/heroimages/WhatsApp Image 2026-04-18 at 14.47.55 (2).jpeg';
import wa2 from '../../../assets/heroimages/WhatsApp Image 2026-04-18 at 14.47.56.jpeg';
import { useState } from 'react';

const Gallery = () => {
  const images = [im1, im2, im3, im4, wa1, wa2];
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 3;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const prevPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  const nextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));

  return (
    <section id="gallery" className="gallery-container">
      <h2 className="section-title">Gallery</h2>
      <div className="gallery-grid">
        {currentImages.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`Nature ${indexOfFirstImage + i + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">
            Previous
          </button>
          <span className="pagination-info">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-btn">
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
