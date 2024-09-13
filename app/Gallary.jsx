'use client';
import { useState } from 'react';

// Import images from the same directory
import dog4 from './assets/dog4.webp';
import dog5 from './assets/dog5.webp';
import dog6 from './assets/dog6.webp';
import dog7 from './assets/dog7.webp';
import dog9 from './assets/dog9.webp';
import dog10 from './assets/dog10.webp';

export default function Gallary() {
  const images = [dog10.src, dog7.src, dog4.src, dog5.src, dog6.src, dog9.src]; // Array of imported images
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => {
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="w-full bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => openModal(index)}
              />
              
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Image Display */}
      {currentImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-2xl"
            onClick={prevImage}
          >
            &#10094;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`Large View ${currentImageIndex + 1}`}
            className="max-w-full max-h-[90vh] object-cover"
          />
          <button
            className="absolute right-4 text-white text-2xl"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
}
