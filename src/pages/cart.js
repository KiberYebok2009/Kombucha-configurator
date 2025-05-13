import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';

export default function Cart() {
  
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const initialIngredients = [
		{id: 1, name: 'Клюква', enName: 'cranberry', category: 1, price: 100, weight: 150, image: '/assets//Клюква.jpg'},
		{id: 2, name: 'Ежевика', enName: 'blackberry', category: 1, price: 100, weight: 150, image: '/assets/Ежевика.jpg'},
		{id: 3, name: 'Черника', enName: 'blueberry', category: 1, price: 100, weight: 150, image: '/assets/Черника.jpg'},
		{id: 4, name: 'Облепиха', enName: 'sea buckthorn', category: 1, price: 100, weight: 150, image: '/assets/Облепиха.jpg'},
		{id: 5, name: 'Крыжовник', enName: 'gooseberry', category: 1, price: 100, weight: 150, image: '/assets/Крыжовник.jpg'},

		{id: 6, name: 'Корица', enName: 'cinnamon', category: 2, price: 100, weight: 150, image: '/assets/Корица.jpg'},
		{id: 7, name: 'Ваниль', enName: 'vanilla', category: 2, price: 100, weight: 150, image: '/assets/Ваниль.jpg'},
		{id: 8, name: 'Кардамон', enName: 'cardamom', category: 2, price: 100, weight: 150, image: '/assets/Кардамон.jpg'},
		{id: 9, name: 'Шафран', enName: 'saffron', category: 2, price: 100, weight: 150, image: '/assets/Шафран.jpg'},

		{id: 10, name: 'Мята', enName: 'mint', category: 3, price: 100, weight: 150, image: '/assets/Мята.jpg'},
		{id: 11, name: 'Шалфей', enName: 'sage', category: 3, price: 100, weight: 150, image: '/assets/Шалфей.jpg'},
	];

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
              <p>Цена без учёта скидки</p>
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