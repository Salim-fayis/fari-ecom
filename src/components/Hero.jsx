// // src/components/Hero.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div className="mt-24 w-full">
//       {/* Nautilus Model Hero */}
//       <div className="relative inset-0  max-h-screen  overflow-hidden">
//         <img 
//           src="/images/products/nautilus-model.jpg" 
//           alt="Artistic Mechanical Metal Nautilus Model" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
//           <div className="mb-4">
//             <img src="/images/logo.png" alt="Stodeer Logo" className="h-12" />
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold uppercase mb-2">
//             Artistic Mechanical Metal Nautilus Model
//           </h2>
//           <Link to="/products/nautilus-model" className="shop-now-btn inline-block mt-4 w-max">
//             Shop Now
//           </Link>
//         </div>
//       </div>
      
//       {/* Anglerfish Model Hero */}
//       <div className=" my-5 relative h-[400px] overflow-hidden">
//         <img 
//           src="/images/products/anglerfish-model.jpg" 
//           alt="Innovative Metal Anglerfish Model" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-16">
//           <div className="mb-4">
//             <img src="/images/logo.png" alt="Stodeer Logo" className="h-12" />
//           </div>
//           <h2 className="text-xl md:text-2xl font-bold uppercase mb-2 text-right">
//             Innovative Metal Anglerfish Model
//           </h2>
//           <Link to="/products/anglerfish-model" className="shop-now-btn inline-block mt-4">
//             Shop Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import { Link } from 'react-router-dom';
import Video from '/videos/herovideo.mp4';

const Hero = () => {
  return (
    <div className="relative w-full ">
      {/* Background Video Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={Video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 md:px-12 ">   
          {/* //bg-black/40  // */}
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-6 drop-shadow-lg">
            Discover Exquisite Mechanical Models
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mb-6 opacity-90">
            Crafted with precision and artistry, our mechanical models bring innovation and elegance together.
          </p>
          <Link to="/shop" className="bg-gradient-to-r from-gold-500 to-yellow-400 hover:from-gold-600 hover:to-yellow-500 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-300 shadow-xl">
            Explore Now
          </Link>
        </div>
      </div>
      
      {/* Nautilus Model Section */}
      <div className="relative h-[500px] overflow-hidden my-5">
        <img 
          src="/images/products/nautilus-model.jpg" 
          alt="Artistic Mechanical Metal Nautilus Model" 
          className="w-full h-full object-fit:contain object-position:center  transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 bg-black/30 ">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2 text-white drop-shadow-lg">
            Artistic Mechanical Metal Nautilus Model
          </h2>
          <Link to="/products/nautilus-model" className="bg-white text-black font-semibold py-2 px-6 rounded-xl transition-all duration-300 hover:bg-gray-200 shadow-md mt-4 w-max">
            Shop Now
          </Link>
        </div>
      </div>
      
      {/* Anglerfish Model Section */}
      <div className="relative h-[500px] overflow-hidden my-5">
        <img 
          src="/images/products/hero1.webp" 
          alt="Innovative Metal Anglerfish Model" 
          className="w-full h-full object-fit:contain object-position:center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-16 bg-black/30 ">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-2 text-white drop-shadow-lg text-right">
            Innovative Metal Anglerfish Model
          </h2>
          <Link to="/products/anglerfish-model" className="bg-white text-black font-semibold py-2 px-6 rounded-xl transition-all duration-300 hover:bg-gray-200 shadow-md mt-4">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
