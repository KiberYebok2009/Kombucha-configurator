import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';
import { initialIngredients} from '../data/data';

export default function Cart() {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Подсчёт общего количества товаров и общей суммы
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + (item.totalPrice || item.price || 0), 0);

  return (
    <div style={{ marginTop: '100px' }}>
      <div className='cart-2'>
        <div className='ordered-items'>
          {cart.length === 0 ? (
            <h1 style={{color: "white"}}>Корзина пуста</h1>
          ) : (
            cart.map(item => (
              <CartItem
              key={item.id}
              item={item}
              initialIngredients={initialIngredients}/>
            ))
          )}
        </div>
        <div className='order-wrapper'>
          <div className='order-container'>
            <h1>ВАШ ЗАКАЗ</h1>
            <div className='order-info'>
              <p>в корзине</p>
              <p>{totalItems} {totalItems === 1 ? 'товар' : 'товара'}</p>
            </div>
            <div className='order-info'>
              <p>Цена без скидки</p>
              <p>{totalPrice}₽</p>
            </div>
            <div className='order-info'>
              <p>скидка</p>
              <p>0%</p>
            </div>
            <div className='order-info'>
              <p>ИТОГО</p>
              <p>{totalPrice}₽</p>
            </div>
            <button>ОФОРМИТЬ ЗАКАЗ</button>
          </div>
        </div>
      </div>
    </div>
  );
}