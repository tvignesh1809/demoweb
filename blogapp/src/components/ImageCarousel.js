import React, { useState } from 'react';

const images = [
  '/banner1.png',
  '/banner2.jpg',
  '/banner3.jpg',
  '/banner4.jpg'
  // '/manifest.json' — this should not be included; it's not an image
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.carouselContainer}>
      <div style={{ ...styles.imageTrack, transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`carousel-${index}`}
            style={styles.image}
          />
        ))}
      </div>
      <button onClick={goToPrev} style={{ ...styles.button, left: '10px' }} aria-label="Previous">
        &#8249;
      </button>
      <button onClick={goToNext} style={{ ...styles.button, right: '10px' }} aria-label="Next">
        &#8250;
      </button>
    </div>
  );
};

const styles = {
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '1000px',
    margin: '20px auto',
    height: '400px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
  imageTrack: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    height: '100%',
    width: '400%' // or images.length * 100%
  },
  image: {
    width: '100%',
    flexShrink: 0,
    objectFit: 'cover',
    height: '100%',
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 10,
  }
};

export default ImageCarousel;
