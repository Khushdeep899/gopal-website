"use client"

import React, { useState } from 'react';

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 rounded-lg max-w-3xl max-h-full mx-4 my-8">
        <img src={image.src} alt={image.alt} className="max-w-full max-h-full" />
        <button 
          onClick={onClose} 
          className="absolute top-0 right-0 mt-4 mr-4 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 rounded-full p-2"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover object-center" onClick={() => handleImageClick(image)} />
          </div>
        ))}
      </div>
      {selectedImage && <ImageModal image={selectedImage} onClose={handleCloseModal} />}
    </>
  );
};

export default ImageGallery;
