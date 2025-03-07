// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import FeedbackGallery from '../components/FeedbackGallery';
import BestSellers from '../components/BestSeller';

const Home = () => {
  // Three product categories for the mid-section banners
  const categories = [
    {
      id: 'anglerfish',
      title: 'Innovative Metal Anglerfish Model',
      image: '/images/products/anglerfish-model.jpg',
      link: '/products/category/anglerfish'
    },
    {
      id: 'clocks',
      title: 'Mechanical Clock',
      image: '/images/products/decorative-clock.jpg',
      link: '/products/category/clocks'
    },
    {
      id: 'lights',
      title: 'Ambient Light',
      image: '/images/products/ambient-light.jpg',
      link: '/products/category/lights'
    }
  ];

  return (
    <div className='mt-20 px-2'>
      {/* Hero Sections */}
      <Hero />
      
      {/* Category Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4 ">
        {categories.map(category => (
          <div key={category.id} className="relative h-[250px] overflow-hidden">
            <img 
              src={category.image} 
              alt={category.title} 
              className="w-full h-full object-fill object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-lg font-bold text-white bg-black bg-opacity-50 py-2 px-4 uppercase">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Best Sellers Section */}
      <BestSellers />
      
      {/* Buyer Feedback Gallery */}
      <FeedbackGallery />
    </div>
  );
};

export default Home;