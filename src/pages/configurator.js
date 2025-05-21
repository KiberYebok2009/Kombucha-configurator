import React, { useState } from 'react';
import '../styles/Configurator.css';
import IngredientItem from '../components/IngredientItem';
import { categories, initialIngredients} from '../data/data';
import { useWebSocket } from '../hooks/useWebsocket';


const Configurator = () => {

	const [ingredients, setIngredients] = useState([]);
	const [volume, setVolume] = useState(1);
	const [recipeName, setRecipeName] = useState('');

	const { chatLog, sendMessage } = useWebSocket('ws://localhost:8080/ws');

	const customObject = {
		name: recipeName || 'Custom Kombucha Recipe',
		ingredients: ingredients.map((ingredient) => ingredient.name),
		price: ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0) * volume,
		volume: volume,
	};

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

	const handleNameChange = (e) => {
		setRecipeName(e.target.value);
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

	const handleGetRecipe = () => {
		if (ingredients.length === 0) {
		alert('Выберите хотя бы один ингредиент');
		return;
		}
		const ingredientsList = ingredients.map(i => i.name).join(', ');
		const message = `Напиши рецепт домашней настойки, содержащей следующие ингредиенты: ${ingredientsList}.`;
		sendMessage(message);
	};

	return (
		<div>
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
									onClick={() => handleIngredientClick(ingredient)} 
								/>
							))}
						</div>
					</div>
				))}
			</div>

			<div className='row-2'>
				<div className="col-2">
					<div className='wrapper'>
						<p>Придумайте название для вашего набора</p>
						<input
							placeholder='Введите название'
							value={recipeName}
							onChange={handleNameChange}
						/>
						<p>Выберите желаемый объём</p>
						<div className='buttons'>
							<button className={volume === 1 ? 'active' : ''}
								onClick={() => handleVolumeChange(1)}>1</button>
							<button className={volume === 2 ? 'active' : ''}
								onClick={() => handleVolumeChange(2)}>2</button>
							<button className={volume === 3 ? 'active' : ''}
								onClick={() => handleVolumeChange(3)}>3</button>
						</div>
					</div>

          <div className="row-2 between">
            <button className='recipe-button' onClick={handleGetRecipe}>
              Узнать рецепт
            </button>

            <button className='add-to-cart-button' onClick={handlePrintAndClear}>
              В корзину
            </button>
          </div>
				</div>

				<div className='gpt-window'>
					<div>
						{chatLog.map((msg, index) => (
							<p key={index}>{msg}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Configurator;
