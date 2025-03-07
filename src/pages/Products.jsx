// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  // Sample product data - in a real app, this would come from an API
  const [products, setProducts] = useState([
    {
      id: 'nautilus-model',
      name: 'Stodeer Creative Mechanical Metal Nautilus Model, High-End Made By The Perfect Fusion Of Nature Art And Mechanics',
      price: 999.99,
      image: '/images/products/nautilus-model.jpg',
      brand: 'STODEER',
      category: 'Sea Creatures'
    },
    {
      id: 'anglerfish-model',
      name: 'Stodeer Innovative Mechanical Metal Angler Fish Model Perfect For Decorations And Office Handmade Designer Artwork',
      price: 599.99,
      image: '/images/products/anglerfish-model.jpg',
      brand: 'STODEER',
      category: 'Sea Creatures'
    },
    {
      id: 'flying-bird',
      name: 'Stodeer Mechanical Flying Bird Creative Decoration Metal Handicraft Ornament',
      price: 799.99,
      image: '/images/products/flying-bird.jpg',
      brand: 'STODEER',
      category: 'Birds'
    },
    {
      id: 'ambient-light',
      name: 'Stodeer Minimalist Modern Metal Ambient Light, Designer Style Metal Lamp',
      price: 239.99,
      image: '/images/products/ambient-light.jpg',
      brand: 'STODEER',
      category: 'Lighting'
    },
    {
      id: 'portable-light',
      name: 'Stodeer Portable USB Rechargeable Metal Rectangle LED Hanging Lamp Decorative Ambient Table Lamp',
      price: 93.99,
      image: '/images/products/portable-light.jpg',
      brand: 'STODEER',
      category: 'Lighting'
    },
    {
      id: 'decorative-clock',
      name: 'Stodeer Translucent Mechanical Clock Desk Lighting Calendar Wall Decorative Ambiance Timepiece',
      price: 117.99,
      image: '/images/products/decorative-clock.jpg',
      brand: 'STODEER',
      category: 'Clocks'
    },
    {
      id: 'mechanical-pen',
      name: 'Stodeer LS-01 Mechanical Puzzle EDC Mini Professional Mechanical Tool Ink Pen Notebook Pen',
      price: 69.99,
      image: '/images/products/mechanical-pen.jpg',
      brand: 'STODEER',
      category: 'Stationery'
    }
  ]);
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Categories derived from products
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-8 text-center">All Products</h1>
      
      {/* Category filters */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 text-sm ${
              selectedCategory === category 
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;