import React from 'react';
import '../styles/CartItem.css';

const CartItem = ({ item, initialIngredients}) => {

    return (
        <div className='test-box'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                <div>
                    <p className='cart-item-name'>Название: {item.name}</p>
                    <p className='cart-item-volume'>Объём: {item.volume}л</p>
                    <p className='cart-item-ingredients-count'>Ингредиенты: {item.ingredientList.length} шт.</p>
                </div>
                <button  className ='remove-from-cart' style={{ background: 'none', border: 'none', padding: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                  </svg>
                </button>
            </div>
            <div className='ingredients'>
                {item.ingredientList.map((ingredient, index) => (
                <img
                key={index}
                src={initialIngredients.filter(ing => ing.id === ingredient).map(elem => elem.image)}
                alt={item.id}
                />
                ))}
            </div>
            <p className='cart-item-price'>ИТОГ: {item.totalPrice}₽</p>
        </div>
    );
};

export default CartItem;
