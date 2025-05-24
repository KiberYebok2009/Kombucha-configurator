import React, { useState } from 'react';
import '../styles/Home.css';
import StarButton from '../components/StarButton';
import FilterItem from '../components/Filter';
import CatalogItem from '../components/CatalogItem';
import { categories, ingredients} from '../data/data';
import { useCatalog, useCart } from '../hooks/useCatalog';

function Home() {

  const { catalogItems, handleVolumeChange } = useCatalog();
  const { cart, toggleCartItem } = useCart();

  //------------------------------ФИЛЬТРЫ-------------------------------

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const toggleIngredient = (ingredientId) => {
    setSelectedIngredients(prev => 
      prev.includes(ingredientId) 
        ? prev.filter(id => id !== ingredientId) 
        : [...prev, ingredientId]
    );
  };

  const filteredCatalogItems = catalogItems.filter(item => {
    if (selectedIngredients.length === 0) return true;

    return selectedIngredients.every(ingId => item.ingredientList.includes(ingId));
  });

  return (
    <div style={{ marginTop: '100px' }}>
      <section className='to-configurator'>
        <div style={
          {
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <div>
            <div className='info'>
              <h1 className='kombucha-name'>Kombucha-configurator</h1>
              <p className='project-description'>Откройте для себя мир домашних настоек, где каждый вкус - это ваша личная история!
              Наш конфигуратор - это ваша творческая лаборатория, где вы сами выбираете ингредиенты, сочетаете ароматы и создаёте уникальные напитки, которые удивят даже самых искушённых гурманов.
              </p>
            </div>
            <StarButton/>
          </div>
          <div className='round'>
            <div className='cocktail'></div>
          </div>
        </div>
      </section>

      <section className='popular'>

      </section>

      <div className='filter-catalog'>
        <div className='filters'>
          <div className='custom-input'>
            <div className='find'></div>
            <input placeholder='Поиск по названию'></input>
            <div className='clear'></div>
          </div>
          <div className='blocks'>
            {categories.map((category) => (
              <div className='filter-block' key={category.id}>
                <div className='filter-category'>{category.name}</div>
                <div className='filter-list'>
                  {ingredients.filter(ingredient => ingredient.category === category.id).map((ingredient) => (
                    <FilterItem
                      key={ingredient.id}
                      ingredient={ingredient}
                      onToggle={() => toggleIngredient(ingredient.id)}/>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='catalog-wrapper'>
          {filteredCatalogItems.map((item) => (
            <div className='grid-elem' key={item.id}>
              <CatalogItem
                key={item.id}
                item={item}
                ingredients={ingredients}
                isAdded={cart.some((cartItem) => cartItem.id === item.id)}
                onVolumeChange={(newVolume) => handleVolumeChange(item.id, newVolume)}
                onClick={() => toggleCartItem(item)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
