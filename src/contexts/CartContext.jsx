import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialCart = JSON.parse(localStorage.getItem('reignBoxesCart')) || [];

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialCart);
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem('reignBoxesCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id && item.name === product.name);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id && item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to Cart! 🛍️",
      description: `${product.name} has been added to your cart.`,
      className: "bg-primary border-primary text-primary-foreground",
    });
  };

  const removeFromCart = (productId, productName) => {
    setCartItems(prevItems => prevItems.filter(item => !(item.id === productId && item.name === productName) ));
    toast({
      title: "Item Removed",
      description: "The item has been removed from your cart.",
      variant: "destructive",
    });
  };

  const updateQuantity = (productId, productName, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId, productName);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId && item.name === productName ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  
  const cartTotal = cartItems.reduce((total, item) => {
    const priceString = item.price.replace(/[^0-9.-]+/g,"");
    const priceNumber = parseFloat(priceString);
    return total + (priceNumber * item.quantity);
  }, 0);


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};