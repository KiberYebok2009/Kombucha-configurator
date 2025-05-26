import React from 'react';
import '../styles/CatalogItem.css';

const CatalogItem = ({ item, ingredients, isAdded, onClick, onVolumeChange }) => {

    return (
        <div className={`card-wrapper ${isAdded ? 'active-item' : ''}`}>
            <img className='card-image' alt={item.name} src={item.imageUrl}></img>
            <div className='card-info'>
                <div className='card-name'>Название: {item.name}</div>
                <div className="volume-buttons">
                    {[1, 2, 3].map((num) => (
                    <button
                        key={num}
                        className={item.volume === num ? 'active' : ''}
                        onClick={() => !isAdded && onVolumeChange(num)}
                        disabled={isAdded}
                    >
                        {num}
                    </button>
                    ))}
                </div>
                <div className='card-ingredients'>
                {item.ingredientList.map((ingredientId, index) => {
                    const ingredient = ingredients.find(ing => ing.id === ingredientId);
                    const name = ingredient ? ingredient.name : 'Неизвестный ингредиент';
                    return (
                        <span key={index} className="ingredient-item-name">
                        {name}{index < item.ingredientList.length - 1 ? ', ' : ''}
                        </span>
                    );
                })}
                </div>
                <div className='price-and-button'>
                    <p>Цена: {item.totalPrice}₽</p>
                    <button
                        onClick={onClick}
                        className={`ingredient-button ${isAdded ? 'remove' : 'add'}`}
                    >
                        {isAdded ? 'Удалить' : 'Добавить'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;
