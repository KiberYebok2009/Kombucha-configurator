import { useState, useEffect } from 'react';
import { CatalogItems } from '../data/data';

//------------------------------Catalog---------------------------------

export function useCatalog() {
  const [catalogItems, setCatalogItems] = useState(() => {
    const saved = localStorage.getItem('catalogItems');
    return saved ? JSON.parse(saved) : CatalogItems;
  });

  useEffect(() => {
    localStorage.setItem('catalogItems', JSON.stringify(catalogItems));
  }, [catalogItems]);

  const handleVolumeChange = (itemId, newVolume) => {
    setCatalogItems(prev =>
      prev.map(item =>
        item.id === itemId
          ? { ...item, volume: newVolume, totalPrice: item.price * newVolume }
          : item
      )
    );
  };

  return { catalogItems, setCatalogItems, handleVolumeChange };
}

//-------------------------------Cart-----------------------------------

export function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const toggleCartItem = (product) => {
    setCart(prev =>
      prev.some(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  return { cart, setCart, toggleCartItem };
}
