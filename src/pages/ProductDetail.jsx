// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  // Mock product data - in a real app, this would come from an API call
  useEffect(() => {
    // Simulate API fetch delay
    setTimeout(() => {
      // This would be replaced with an actual API call
      const mockProducts = {
        'nautilus-model': {
          id: 'nautilus-model',
          name: 'Stodeer Creative Mechanical Metal Nautilus Model',
          subtitle: 'High-End Made By The Perfect Fusion Of Nature Art And Mechanics',
          price: 999.99,
          images: [
            '/images/products/nautilus-model.jpg',
            '/images/products/nautilus-model-alt1.jpg',
            '/images/products/nautilus-model-alt2.jpg',
          ],
          brand: 'STODEER',
          category: 'Sea Creatures',
          description: 'This artistic mechanical metal nautilus model combines intricate craftsmanship with innovative design. Each piece is meticulously handcrafted by skilled artisans, creating a perfect fusion of natural art and mechanical engineering. The model features moving parts that simulate the natural movement of a nautilus.',
          features: [
            'Hand-crafted from premium stainless steel and brass',
            'Intricate mechanical movement',
            'Dimensions: 12" x 8" x 6"',
            'Weight: 2.5 lbs',
            'Includes display stand and protective case'
          ],
          inStock: true
        },
        'anglerfish-model': {
          id: 'anglerfish-model',
          name: 'Stodeer Innovative Mechanical Metal Anglerfish Model',
          subtitle: 'Perfect For Decorations And Office Handmade Designer Artwork',
          price: 599.99,
          images: [
            '/images/products/anglerfish-model.jpg',
            '/images/products/anglerfish-model-alt1.jpg',
            '/images/products/anglerfish-model-alt2.jpg',
          ],
          brand: 'STODEER',
          category: 'Sea Creatures',
          description: 'This innovative mechanical metal anglerfish model showcases remarkable detail and artistic vision. Expertly crafted by hand, this piece brings the mysterious deep-sea creature to life through precision engineering and artistic expression.',
          features: [
            'Crafted from high-quality metal alloys',
            'Articulated fins and illuminated lure',
            'Dimensions: 14" x 6" x 5"',
            'Weight: 1.8 lbs',
            'Includes custom mounting hardware'
          ],
          inStock: true
        }
      };
      
      setProduct(mockProducts[id] || null);
      setLoading(false);
    }, 500);
  }, [id]);
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    console.log('Added to cart:', { ...product, quantity });
    // Implement actual cart functionality
    alert(`Added ${quantity} ${product.name} to cart!`);
  };
  
  const handleAddToWishlist = () => {
    console.log('Added to wishlist:', product);
    // Implement actual wishlist functionality
    alert(`Added ${product.name} to wishlist!`);
  };
  
  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4 flex justify-center">
        <div className="text-xl">Loading product details...</div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <div className="text-xl mb-4">Product not found</div>
        <Link to="/products" className="bg-black text-white px-4 py-2">
          Return to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Breadcrumbs */}
      <div className="text-sm mb-6">
        <Link to="/" className="hover:underline">Home</Link> / 
        <Link to="/products" className="hover:underline mx-1">Products</Link> / 
        <span className="font-medium">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="mb-4 aspect-square overflow-hidden border">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <div 
                key={index}
                className={`cursor-pointer border w-20 h-20 ${activeImage === index ? 'border-black' : 'border-gray-200'}`}
                onClick={() => setActiveImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <div className="text-sm text-gray-500 uppercase mb-1">{product.brand}</div>
          <h1 className="text-2xl font-bold mb-1">{product.name}</h1>
          <h2 className="text-lg mb-4">{product.subtitle}</h2>
          
          <div className="text-xl font-bold mb-6">${product.price.toFixed(2)}</div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Features</h3>
            <ul className="list-disc pl-5">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-700 mb-1">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <div className="font-medium">Quantity</div>
              <input 
                type="number" 
                min="1" 
                value={quantity}
                onChange={handleQuantityChange}
                className="border py-2 px-3 w-20 text-center"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 flex items-center justify-center gap-2 hover:bg-gray-800"
              disabled={!product.inStock}
            >
              <FaShoppingCart />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
            
            <button
              onClick={handleAddToWishlist}
              className="border border-black py-3 px-6 flex items-center justify-center gap-2 hover:bg-gray-100"
            >
              <FaHeart />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;