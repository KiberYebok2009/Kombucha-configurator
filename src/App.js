import React, { useState } from 'react';
import './styles/App.css';
import IngredientItem from './components/IngredientItem';
import Navbar from './components/navBar';

const App = () => {

  const [ingredients, setIngredients] = useState([]);
  const [volume, setVolume] = useState(1);
  const [recipeName, setRecipeName] = useState('');

  const categories = [
    {id: 1, name: 'Ягоды'},
    {id: 2, name: 'Специи'},
    {id: 3, name: 'Травы'},
  ]

  const customObject = {
    name: recipeName || 'Custom Kombucha Recipe',
    ingredients: ingredients.map((ingredient) => ingredient.name),
    price: ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0) * volume,
    volume: volume,
  };
  
  const initialIngredients = [

    { id: 1, name: 'Клюква', category: 1, price: 100, weight: 150, image: '/assets/Клюква.jpg' },
    { id: 2, name: 'Ежевика', category: 1, price: 100, weight: 150, image: '/assets/Ежевика.jpg' },
    { id: 3, name: 'Черника', category: 1, price: 100, weight: 150, image: '/assets/Черника.jpg' },
    { id: 4, name: 'Облепиха', category: 1, price: 100, weight: 150, image: '/assets/Облепиха.jpg' },
    { id: 5, name: 'Крыжовник', category: 1, price: 100, weight: 150, image: '/assets/Крыжовник.jpg' },

    { id: 6, name: 'Корица', category: 2, price: 100, weight: 150, image: '/assets/Корица.jpg' },
    { id: 7, name: 'Ваниль', category: 2, price: 100, weight: 150, image: '/assets/Ваниль.jpg' },
    { id: 8, name: 'Кардамон', category: 2, price: 100, weight: 150, image: '/assets/Кардамон.jpg' },

    { id: 9, name: 'Мята', category: 3, price: 100, weight: 150, image: '/assets/Мята.jpg' },
    { id: 10, name: 'Шалфей', category: 3, price: 100, weight: 150, image: '/assets/Шалфей.jpg' },
  ];

  const handleIngredientClick = (ingredient) => {
    if (ingredients.some((item) => item.id === ingredient.id)) {
      setIngredients(ingredients.filter((item) => item.id !== ingredient.id));
    } else if (ingredients.length < 9) {
      setIngredients([...ingredients, ingredient]);
    } else {
      alert('Максимальное количество ингредиентов — 9');
    }
  };

  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  const handlePrintAndClear = () => {
    if (ingredients.length > 0 && ingredients.length < 10) {
      console.log('Your Custom', customObject);
      setIngredients([]);
      setRecipeName('');
    } else {
      alert('Выберите от 1 до 9 ингредиентов');
    }
  };

  const handleNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  return (
    <div>

      <header>
        <Navbar/>
      </header>

      <div style={{ marginTop: '100px' }}>

      <div className='nav-list'></div>

      {categories.map((category) => (
        <div key={category.id}>
          <div className='category-name'>{category.name}</div>
          <div className='ingredient-list'>
            {initialIngredients.filter(ingredient => ingredient.category === category.id).map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                ingredient={ingredient}
                isAdded={ingredients.some((item) => item.id === ingredient.id)}
                onClick={() => handleIngredientClick(ingredient)} />
            )
          )
        }
    </div>
  </div>
))}

      </div>

      <div className='row-2'>
        <div className='wrapper'>
          <p>Придумайте название для набора</p>
          <input 
            placeholder='Введите название'
            value={recipeName}
            onChange={handleNameChange}
          >
          </input>
          <p>Выберите желаемый объём</p>
          <div className='buttons'>

            <button className={volume === 1 ? 'active' : ''}
              onClick={() => handleVolumeChange(1)}>
              1
            </button>

            <button className={volume === 2 ? 'active' : ''}
              onClick={() => handleVolumeChange(2)}>
              2
            </button>

            <button className={volume === 3 ? 'active' : ''}
              onClick={() => handleVolumeChange(3)}>
              3
            </button>
          </div>
        </div>

        <div className='gpt-window'></div>
      </div>

      <button onClick={handlePrintAndClear} className="print-button">
        Print and Clear List
      </button>
    </div>
  );
};

export default App;
