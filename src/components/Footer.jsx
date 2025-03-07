// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto pt-12 pb-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Address */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Address</h3>
            <p className="text-sm text-gray-300 mb-2">Room 308, Building A (Changjing Park West Plaza),</p>
            <p className="text-sm text-gray-300 mb-2">Master Mountain Road Po An,</p>
            <p className="text-sm text-gray-300">Changshu, Jiangsu, China</p>
          </div>
          
          {/* Collections */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Collections</h3>
            <ul className="space-y-2">
              <li><Link to="/products/category/featured" className="text-sm text-gray-300 hover:text-white">Featured Products</Link></li>
              <li><Link to="/products/category/new" className="text-sm text-gray-300 hover:text-white">New Arrivals</Link></li>
              <li><Link to="/products/category/tools" className="text-sm text-gray-300 hover:text-white">Tools</Link></li>
              <li><Link to="/products/category/handmade" className="text-sm text-gray-300 hover:text-white">Handmade</Link></li>
            </ul>
          </div>
          
          {/* Customer Care */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-sm text-gray-300 hover:text-white">Shipping Information</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/returns" className="text-sm text-gray-300 hover:text-white">Refund/Return Policy</Link></li>
            </ul>
          </div>
          
          {/* Team & Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Team</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
            
            <h3 className="text-sm font-bold uppercase mb-4 mt-6">Newsletter Sign Up</h3>
            <p className="text-xs text-gray-300 mb-2">Sign up for exclusive updates, new arrivals & insider only discounts</p>
            
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="py-2 px-3 text-black text-sm flex-1"
              />
              <button type="submit" className="bg-white text-black px-4 py-2 text-sm font-bold">SUBMIT</button>
            </form>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-full p-2">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-full p-2">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-black rounded-full p-2">
            <FaYoutube />
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          &copy; {currentYear} Stodeer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;