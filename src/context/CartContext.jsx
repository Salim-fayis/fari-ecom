// src/context/CartContext.jsx
import { createContext, useState, useEffect } from 'react';
import React from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage if available
    const savedCart = localStorage.getItem('stodeerCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [wishlist, setWishlist] = useState(() => {
    // Initialize wishlist from localStorage if available
    const savedWishlist = localStorage.getItem('stodeerWishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  
  // Update localStorage when cart changes
  useEffect(() => {
    localStorage.setItem('stodeerCart', JSON.stringify(cart));
  }, [cart]);
  
  // Update localStorage when wishlist changes
  useEffect(() => {
    localStorage.setItem('stodeerWishlist', JSON.stringify(wishlist));
  }, [wishlist]);
  
  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity
        };
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };
  
  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  // Update item quantity in cart
  const updateCartItemQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => {
      return prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };
  
  // Add item to wishlist
  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      // Check if item already exists in wishlist
      const existingItem = prevWishlist.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevWishlist;
      } else {
        return [...prevWishlist, product];
      }
    });
  };
  
  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };
  
  // Calculate cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  // Get cart items count
  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        addToWishlist,
        removeFromWishlist,
        getCartTotal,
        getCartItemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};