import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import React from 'react';

const FeedbackGallery = () => {
  const feedbackImages = [
    '/images/buyer-feedback/feedback1.jpg',
    '/images/buyer-feedback/feedback2.jpg',
    '/images/products/flying-bird.jpg',
    '/images/products/ambient-light.jpg',
    '/images/products/nautilus-model.jpg',
    '/images/buyer-feedback/feedback1.jpg',
    '/images/buyer-feedback/feedback2.jpg',
    '/images/products/flying-bird.jpg',
    '/images/products/ambient-light.jpg',
    '/images/products/nautilus-model.jpg',
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="py-8 px-4">
      <h2 className="text-center text-xl font-bold uppercase mb-6">#Buyer Feedback Photo</h2>
      <Marquee speed={50} pauseOnHover={true} gradient={false}>
        {feedbackImages.map((image, index) => (
          <div
            key={index}
            className="w-48 h-48 mx-2 overflow-hidden flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img 
              src={image} 
              alt={`Customer feedback ${index + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeedbackGallery;
