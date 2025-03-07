// // src/components/Header.jsx
// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
// import useCart from '../hooks/useCart';

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { getCartItemsCount, wishlist } = useCart();
  
//   const cartCount = getCartItemsCount();
//   const wishlistCount = wishlist.length;

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching for:', searchQuery);
//     // Implement search functionality
//   };
  
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4">
//         {/* Logo */}
//         <div className="flex items-center mb-0">
//           <Link to="/" className="flex items-center">
//             <span className="text-2xl font-bold">STO<span className="text-gray-500">DEER</span></span>
//           </Link>
//         </div>
        
//         {/* Mobile menu button */}
//         <button
//           type="button"
//           className="md:hidden text-gray-700"
//           onClick={toggleMobileMenu}
//           aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
//         >
//           {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
        
//         {/* Navigation - Desktop */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-8 uppercase text-sm font-medium">
//             <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
//             <li><Link to="/products" className="hover:text-gray-500">All Products</Link></li>
//             <li><Link to="/about" className="hover:text-gray-500">About Us</Link></li>
//             <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
//           </ul>
//         </nav>
        
//         {/* Search and User Actions */}
//         <div className="hidden md:flex items-center space-x-4">
//           {/* Search */}
//           <form onSubmit={handleSearch} className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="py-1 px-2 border border-gray-300 rounded-sm w-32 md:w-auto"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
//               <FaSearch className="text-gray-400 text-sm" />
//             </button>
//           </form>
          
//           {/* Shopping Cart */}
//           <Link to="/cart" className="relative">
//             <FaShoppingCart className="text-gray-700" />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
          
//           {/* Wishlist */}
//           <Link to="/wishlist" className="relative">
//             <FaHeart className="text-gray-700" />
//             {wishlistCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 {wishlistCount}
//               </span>
//             )}
//           </Link>
          
//           {/* User Account */}
//           <Link to="/account" className="text-sm">
//             Sign In
//           </Link>
          
//           {/* Language Selector */}
//           <div className="border rounded px-2 py-1 text-xs flex items-center">
//             <span>EN</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Mobile Navigation Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t px-4 py-2">
//           <nav className="mb-4">
//             <ul className="flex flex-col space-y-2">
//               <li><Link to="/" className="hover:text-gray-500 block py-1">Home</Link></li>
//               <li><Link to="/products" className="hover:text-gray-500 block py-1">All Products</Link></li>
//               <li><Link to="/about" className="hover:text-gray-500 block py-1">About Us</Link></li>
//               <li><Link to="/contact" className="hover:text-gray-500 block py-1">Contact</Link></li>
//             </ul>
//           </nav>
          
//           <div className="flex items-center justify-between py-2 border-t">
//             <Link to="/cart" className="flex items-center space-x-1">
//               <FaShoppingCart />
//               <span>Cart ({cartCount})</span>
//             </Link>
            
//             <Link to="/wishlist" className="flex items-center space-x-1">
//               <FaHeart />
//               <span>Wishlist ({wishlistCount})</span>
//             </Link>
            
//             <Link to="/account" className="flex items-center space-x-1">
//               <FaUser />
//               <span>Account</span>
//             </Link>
//           </div>
          
//           <form onSubmit={handleSearch} className="relative mt-2">
//             <input
//               type="text"
//               placeholder="Search"
//               className="py-2 px-3 border border-gray-300 rounded-sm w-full"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
//               <FaSearch className="text-gray-400" />
//             </button>
//           </form>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;




import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartItems, setCartItems] = useState(0)



  const categories = [
    { name: "Women", subcategories: ["Handbags", "Ready-to-Wear", "Shoes", "Accessories", "Jewelry"] },
    { name: "Men", subcategories: ["Bags", "Ready-to-Wear", "Shoes", "Accessories", "Watches"] },
    { name: "Jewelry & Watches", subcategories: ["Fine Jewelry", "Fashion Jewelry", "Watches"] },
    { name: "Art of Living", subcategories: ["Home", "Travel", "Gifts"] },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-serif tracking-wider text-center md:text-left">
          <span className="text-2xl font-bold">LE<span className="text-gray-500">FEVER</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <div key={category.name} className="group relative">
                <Link 
                  to={`/category/${category.name.toLowerCase()}`} 
                  className="py-2 text-sm uppercase tracking-widest hover:text-gray-600"
                >
                  {category.name}
                </Link>
                <div className="absolute left-0 top-full bg-white shadow-lg pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-48 z-10">
                  {category.subcategories.map((subcat) => (
                    <Link 
                      key={subcat} 
                      to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-50 whitespace-nowrap"
                    >
                      {subcat}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-800"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            <Link to="/account" className="text-gray-800">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-800 relative">
              <ShoppingBag size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              />
              <button className="absolute right-0 top-2">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-16 shadow-lg max-h-screen overflow-y-auto z-50">
            {categories.map((category) => (
              <div key={category.name}>
                <Link 
                  to={`/category/${category.name.toLowerCase()}`}
                  className="block px-4 py-3 text-sm uppercase tracking-widest border-b border-gray-100"
                >
                  {category.name}
                </Link>
                <div className="bg-gray-50">
                  {category.subcategories.map((subcat) => (
                    <Link 
                      key={subcat}
                      to={`/category/${category.name.toLowerCase()}/${subcat.toLowerCase().replace(/ /g, '-')}`}
                      className="block px-8 py-2 text-sm border-b border-gray-100"
                    >
                      {subcat}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="py-4 px-4 border-t border-gray-200 ">
              <Link to="/stores" className="block py-2 text-sm">Store Finder</Link>
              <Link to="/account" className="block py-2 text-sm">My Account</Link>
              <Link to="/about" className="block py-2 text-sm">About</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
