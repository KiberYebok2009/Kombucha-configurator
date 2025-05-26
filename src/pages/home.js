import React, { useState } from 'react';
import '../styles/Home.css';
import StarButton from '../components/StarButton';
import FilterItem from '../components/Filter';
import CatalogItem from '../components/CatalogItem';
import Slide from '../components/Slide';
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

  //-----------------------------СЛАЙДЕР--------------------------------


  // Слайдер работает и без этого кода, но при нажатии на якорную ссылку происходит обновление страницы и скролл вверх
  const scrollToSlide = (slideId) => {
  const slider = document.querySelector('.slider');
  const slide = document.getElementById(slideId);
  
    if (slider && slide) {
      slider.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth'
      });

      const slideTop = slide.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: slideTop - 125,
        behavior: 'smooth'
      });
    }
  };

  const firstThreeSlides = catalogItems.slice(0, 3);

  //--------------------------------КНОПКА ЯКОРЬ------------------------

  function scrollToAnchor(anchorId) {
    const element = document.getElementById(anchorId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 125;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Элемент с id="${anchorId}" не найден.`);
    }
  }

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
            <div style={
              {
                display: 'flex', 
                alignItems: 'center',
                gap: '35px',
              }
            }>
              <StarButton/>
              <button onClick={() => scrollToAnchor('catalog-wrapper')} className='to-catalog'>Каталог</button>
            </div>
          </div>
          <div className='round'>
            <div className='cocktail'></div>
          </div>
        </div>
      </section>

      <section className='slider-wrapper'>
          <div className='slider'>
            {firstThreeSlides.map((elem, index) => (
              <Slide
                key={elem.id}
                item={elem}
                isAdded={cart.some((cartItem) => cartItem.id === elem.id)}
                onVolumeChange={(newVolume) => handleVolumeChange(elem.id, newVolume)}
                onClick={() => toggleCartItem(elem)}
              />
            ))}
          </div>
          <div className='slider-nav'>
            <a href={`#slide-${firstThreeSlides[0].id}`} onClick={e => {
              e.preventDefault();
              scrollToSlide(`slide-${firstThreeSlides[0].id}`);
            }}>1</a>
            <a href={`#slide-${firstThreeSlides[1].id}`} onClick={e => {
              e.preventDefault();
              scrollToSlide(`slide-${firstThreeSlides[1].id}`);
            }}>1</a>
            <a href={`#slide-${firstThreeSlides[2].id}`} onClick={e => {
              e.preventDefault();
              scrollToSlide(`slide-${firstThreeSlides[2].id}`);
            }}>1</a>
          </div>
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
        <div className='catalog-wrapper' id='catalog-wrapper'>
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
