import React from 'react';
import '../styles/IngredientItem.css';

const IngredientItem = ({ ingredient, isAdded, onClick }) => {
  return (
    <div
      className={`ingredient-item ${isAdded ? 'active-item' : ''}`}
    >
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className="ingredient-image"
      />
      <div className="ingredient-content">
        <p className="ingredient-name">{ingredient.name}</p>
        <div className="row-3">
          <p className='ingredient-price'>{ingredient.price}₽</p>
          <p className='ingredient-weight'>/{ingredient.weight}гр</p>
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

export default IngredientItem;
