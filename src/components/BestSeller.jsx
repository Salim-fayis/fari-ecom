// src/components/BestSellers.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const bestSellerProducts = [
    {
      id: 'nautilus-model',
      name: 'Stodeer Creative Mechanical Metal Nautilus Model, High-End Made By The Perfect Fusion Of Nature Art And Mechanics',
      price: 999.99,
      image: '/images/products/nautilus-model.jpg',
      brand: 'STODEER'
    },
    {
      id: 'anglerfish-model',
      name: 'Stodeer Innovative Mechanical Metal Angler Fish Model Perfect For Decorations And Office Handmade Designer Artwork',
      price: 599.99,
      image: '/images/products/anglerfish-model.jpg',
      brand: 'STODEER'
    },
    {
      id: 'flying-bird',
      name: 'Stodeer Mechanical Flying Bird Creative Decoration Metal Handicraft Ornament',
      price: 799.99,
      image: '/images/products/flying-bird.jpg',
      brand: 'STODEER'
    },
    {
      id: 'ambient-light',
      name: 'Stodeer Minimalist Modern Metal Ambient Light, Designer Style Metal Lamp',
      price: 239.99,
      image: '/images/products/ambient-light.jpg',
      brand: 'STODEER'
    },
    {
      id: 'nautilus-model',
      name: 'Stodeer Creative Mechanical Metal Nautilus Model, High-End Made By The Perfect Fusion Of Nature Art And Mechanics',
      price: 999.99,
      image: '/images/products/nautilus-model.jpg',
      brand: 'STODEER'
    },
    {
      id: 'anglerfish-model',
      name: 'Stodeer Innovative Mechanical Metal Angler Fish Model Perfect For Decorations And Office Handmade Designer Artwork',
      price: 599.99,
      image: '/images/products/anglerfish-model.jpg',
      brand: 'STODEER'
    },
    {
      id: 'flying-bird',
      name: 'Stodeer Mechanical Flying Bird Creative Decoration Metal Handicraft Ornament',
      price: 799.99,
      image: '/images/products/flying-bird.jpg',
      brand: 'STODEER'
    },
    {
      id: 'ambient-light',
      name: 'Stodeer Minimalist Modern Metal Ambient Light, Designer Style Metal Lamp',
      price: 239.99,
      image: '/images/products/ambient-light.jpg',
      brand: 'STODEER'
    }
  ];

  return (
    <div className="py-12 px-4 relative">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold uppercase">Best Sellers</h2>
        <div className="w-12 h-0.5 bg-black mx-auto mt-2"></div>
        <Link to="/products" className="text-sm mt-2 inline-block text-blue-600 hover:underline">
          View All
        </Link>
      </div>
      
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          className="pb-8"
        >
          {bestSellerProducts.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
        
       
      </div>
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
          <div className="swiper-button-prev bg-white text-black p-4  shadow-md cursor-pointer pointer-events-auto"></div>
          <div className="swiper-button-next bg-white text-black p-4  shadow-md cursor-pointer pointer-events-auto"></div>
        </div>
    </div>
  );
};

export default BestSellers;





// import React from 'react'
// import ProductCard from './ProductCard'

// const BestSeller = () => {
//   return (
//     <div>
//        <section className='popular top'>
//         <div className="full_container">
//             <div className="heading">
//                 <h1>Most Popular Hotel</h1>
//                 <div className="line"></div>
//             </div>
//             <div className='content'>
//                 <ProductCard />
//             </div>
//         </div>
//     </section>
//     </div>
//   )
// }

// export default BestSeller
