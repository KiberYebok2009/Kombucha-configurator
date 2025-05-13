import React from 'react';
import '../styles/CartItem.css';

const CartItem = ({ item, initialIngredients}) => {

    return (
        <div className='test-box'>
            <p className='cart-item-name'>Название: {item.name}</p>
            <p className='cart-item-volume'>Объём: {item.volume}л</p>
            <p className='cart-item-ingredients-count'>Ингредиенты: {item.ingredientList.length} шт.</p>
            <div className='ingredients'>
                {item.ingredientList.map((ingredient, index) => (
                <img
                key={index}
                src={initialIngredients.filter(ing => ing.id === ingredient).map(elem => elem.image)}
                alt={item.id}
                />
                ))}
            </div>
            <div className='price-button'>
                <p className='cart-item-price'>ИТОГ: {item.totalPrice}₽</p>
                <button>Удалить</button>
            </div>
        </div>
    );
};

export default CartItem;
