// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, price, image, brand } = product;
  
  return (
    <div className="product-card  flex flex-col">
      <Link to={`/products/${id}`} className="block overflow-hidden mb-2 group">
        <img 
          src={image} 
          alt={name}
          className="w-full  h-[350px] object-cover object-position:center group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="flex flex-col flex-grow">
        <div className="text-center text-xs text-gray-500 uppercase mb-1">{brand}</div>
        <Link to={`/products/${id}`} className="text-center font-medium text-sm mb-1 hover:underline line-clamp-2">{name}</Link>
        <div className="text-center text-sm mt-auto">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;