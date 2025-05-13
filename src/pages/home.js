import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import StarButton from '../components/starButton';
import FilterItem from '../components/filter';
import CatalogItem from '../components/CatalogItem';

function Home() {

  //----------------------------------Обновлено

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //----------------------------------Обновлено

  const categories = [
		{id: 1, name: 'Ягоды'},
		{id: 2, name: 'Специи'},
		{id: 3, name: 'Травы'},
	];

  const ingredients = [
		{id: 1, name: 'Клюква', category: 1},
		{id: 2, name: 'Ежевика', category: 1},
		{id: 3, name: 'Черника', category: 1},
		{id: 4, name: 'Облепиха', category: 1},
		{id: 5, name: 'Крыжовник', category: 1},

		{id: 6, name: 'Корица', category: 2},
		{id: 7, name: 'Ваниль',category: 2},
		{id: 8, name: 'Кардамон', category: 2},
    {id: 9, name: 'Шафран', category: 2},

		{id: 10, name: 'Мята', category: 3},
		{id: 11, name: 'Шалфей', category: 3},
	];

  const CatalogItems = [
    {
      id: 1, 
      name: 'Кастом №1',
      imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
      volume: 1,
      price: 2000,
      totalPrice: 2000, 
      ingredientList: [1,2,3,4,9],

    },
    {
      id: 2,
      imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
      name: 'Кастом №2',
      volume: 1,
      price: 2000,
      totalPrice: 2000, 
      ingredientList: [1,2,3,4,5],

    },
    {
      id: 3,
      imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
      name: 'Кастом №3',
      volume: 1,
      price: 2000,
      totalPrice: 2000, 
      ingredientList: [1,2,3,4,5],

    },
    {
      id: 4,
      imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
      name: 'Кастом №4',
      volume: 1,
      price: 2000,
      totalPrice: 2000, 
      ingredientList: [1,2,3,4,5],

    },
    {
      id: 5,
      imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
      name: 'Кастом №5',
      volume: 1,
      price: 2000,
      totalPrice: 2000, 
      ingredientList: [1,2,3,4,5],

    },
  ];

  //----------------------------------Обновлено

  // Обновление для того, чтобы не забывать выбранный объём при перезаходе в каталог

  const [catalogItems, setCatalogItems] = useState(() => {
    const savedCatalog = localStorage.getItem('catalogItems');
    return savedCatalog ? JSON.parse(savedCatalog) : CatalogItems;
  });

  //----------------------------------Обновлено





  //-----------------------------------NEW

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('catalogItems', JSON.stringify(catalogItems)); // Необходимо для того, чтобы при возвращении не забывался объём выбранных наборов
  }, [cart, catalogItems]);

  //-----------------------------------NEW

  const handleItemtClick = (product) => {
		if (cart.some((item) => item.id === product.id)) {
			setCart(cart.filter((cartItem) => cartItem.id !== product.id));
		} else {
			setCart([...cart, product]);
		}
    console.log(cart)
	};

  const handleVolumeChange = (itemId, newVolume) => {
    setCatalogItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId
          ? { ...item, volume: newVolume, totalPrice: item.price * newVolume }
          : item
      )
    );
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <section className='to-configurator'>
        <div className='info'>
          <h1 className='kombucha-name'>Kombucha-configurator</h1>
          <p className='project-description'>Откройте для себя мир домашних настоек, где каждый вкус - это ваша личная история!
          Наш конфигуратор - это ваша творческая лаборатория, где вы сами выбираете ингредиенты, сочетаете ароматы и создаёте уникальные напитки, которые удивят даже самых искушённых гурманов.
          </p>
        </div>
        <StarButton/>
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
          {categories.map((category) => (
            <div className='filter-block' key={category.id}>
              <div className='filter-category'>{category.name}</div>
              <div className='filter-list'>
                {ingredients.filter(ingredient => ingredient.category === category.id).map((ingredient) => (
                  <FilterItem
                    key={ingredient.id}
                    ingredient={ingredient}/>
                ))}
              </div>
            </div>
				))}
        </div>
        <div className='catalog-wrapper'>
          {catalogItems.map((item) => (
            <CatalogItem
              key={item.id}
              item={item}
              ingredients={ingredients}
              isAdded={cart.some((cartItem) => cartItem.id === item.id)}
              onVolumeChange={(newVolume) => handleVolumeChange(item.id, newVolume)}
              onClick={() => handleItemtClick(item)}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
