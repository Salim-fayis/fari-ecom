// src/components/ProductCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ products }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="my-8"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;



// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import PopularData from './ProductCardData';  // Ensure you import PopularData

// function ProductCard() {  // Renamed to avoid conflict
//     const SampleNextArrow = ({ onClick }) => (
//         <div className='control-btn' onClick={onClick}>
//             <button className='next'>
//                 <i className='fa fa-long-arrow-alt-right'></i>
//             </button>
//         </div>
//     );

//     const SamplePrevtArrow = ({ onClick }) => (
//         <div className='control-btn' onClick={onClick}>
//             <button className='prev'>
//                 <i className='fa fa-long-arrow-alt-left'></i>
//             </button>
//         </div>
//     );

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 2,
//         initialSlide: 0,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevtArrow />
//     };

//     return (
//         <Slider {...settings}>
//             {PopularData.map((value, index) => (
//                 <div className="cards" key={value.id || index}>
//                     <div className="item">
//                         <div className="image">
//                             <img src={value.image} alt={value.name} />
//                             <i className='fas fa-map-marker-alt'>
//                                 <label>{value.country}</label>
//                             </i>
//                         </div>

//                         <div className="rate">
//                             {[...Array(5)].map((_, i) => (
//                                 <i key={i} className='fa fa-star'></i>
//                             ))}
//                         </div>
                        
//                         <div className="details">
//                             <h2>{value.name}</h2>
//                             <div className="border"></div>
//                             <h3>{value.price} /
//                                 <span>Per Night</span>
//                             </h3>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </Slider>
//     );
// }

// export default ProductCard;
