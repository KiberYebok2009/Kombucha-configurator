import React from 'react';
import '../styles/Slide.css';
import {initialIngredients} from '../data/data'

const Slide = ({ item, isAdded, onClick, onVolumeChange }) => {

    return (
        <div className='slide-wrapper' id={`slide-${item.id}`}>
            <div style={
                {
                    display: 'flex', 
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                <div>
                    <h1 className='slide-elem-name'>{item.name}</h1>
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
                    <div className='slide-elem-ingredients'>
                        {item.ingredientList.map((ingredientId, index) => {
                            const ingredient = initialIngredients.find(ing => ing.id === ingredientId);
                            const url = ingredient ? ingredient.png_image : 'Неизвестный ингредиент';
                            return (
                                <img
                                key={index}
                                src={url}
                                alt={item.id}/>
                            );
                        })}
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '25px'}}>
                        <p className='slide-elem-price'>Цена: {item.totalPrice}₽</p>
                        <button
                            onClick={onClick}
                            className={`slide-elem-button ${isAdded ? 'remove' : 'add'}`}
                        >
                            {isAdded ? 'Удалить' : 'Добавить'}
                        </button>
                    </div>
                </div>
                <img
                    className='slide-elem-image'
                    src={`${item.imageUrl}`}
                    alt={`${item.name}`}
                ></img>
            </div>
        </div>
    );
};

export default Slide;
