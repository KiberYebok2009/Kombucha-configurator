import React, { useState, useEffect } from 'react';
import '../styles/Configurator.css';
import IngredientItem from '../components/IngredientItem';

const Configurator = () => {
	const [ws, setWs] = useState(null);
	const [message, setMessage] = useState('');
	const [chatLog, setChatLog] = useState([]);

	const [ingredients, setIngredients] = useState([]);
	const [ingredientsEn, setEnIngredients] = useState([]);
	const [volume, setVolume] = useState(1);
	const [recipeName, setRecipeName] = useState('');

	const categories = [
		{id: 1, name: 'Ягоды'},
		{id: 2, name: 'Специи'},
		{id: 3, name: 'Травы'},
	];

	const customObject = {
		name: recipeName || 'Custom Kombucha Recipe',
		ingredients: ingredients.map((ingredient) => ingredient.name),
		ingredientsEn: ingredients.map((ingredient) => ingredient.enName),
		price: ingredients.reduce((sum, ingredient) => sum + ingredient.price, 0) * volume,
		volume: volume,
	};

	const initialIngredients = [
		{id: 1, name: 'Клюква', enName: 'cranberry', category: 1, price: 100, weight: 150, image: '/assets//Клюква.jpg'},
		{id: 2, name: 'Ежевика', enName: 'blackberry', category: 1, price: 100, weight: 150, image: '/assets/Ежевика.jpg'},
		{id: 3, name: 'Черника', enName: 'blueberry', category: 1, price: 100, weight: 150, image: '/assets/Черника.jpg'},
		{id: 4, name: 'Облепиха', enName: 'sea buckthorn', category: 1, price: 100, weight: 150, image: '/assets/Облепиха.jpg'},
		{id: 5, name: 'Крыжовник', enName: 'gooseberry', category: 1, price: 100, weight: 150, image: '/assets/Крыжовник.jpg'},

		{id: 6, name: 'Корица', enName: 'cinnamon', category: 2, price: 100, weight: 150, image: '/assets/Корица.jpg'},
		{id: 7, name: 'Ваниль', enName: 'vanilla', category: 2, price: 100, weight: 150, image: '/assets/Ваниль.jpg'},
		{id: 8, name: 'Кардамон', enName: 'cardamom', category: 2, price: 100, weight: 150, image: '/assets/Кардамон.jpg'},
		{id: 9, name: 'Шафран', enName: 'saffron', category: 2, price: 100, weight: 150, image: '/assets/Шафран.jpg'},

		{id: 10, name: 'Мята', enName: 'mint', category: 3, price: 100, weight: 150, image: '/assets/Мята.jpg'},
		{id: 11, name: 'Шалфей', enName: 'sage', category: 3, price: 100, weight: 150, image: '/assets/Шалфей.jpg'},
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
			setEnIngredients([]);
			setRecipeName('');
		} else {
			alert('Выберите от 1 до 9 ингредиентов');
		}
	};

	const handleNameChange = (e) => {
		setRecipeName(e.target.value);
	};

	useEffect(() => {
		const socket = new WebSocket('ws://localhost:8080/ws');
		socket.binaryType = "arraybuffer"; // Используем бинарные сообщения
		setWs(socket);

		socket.onopen = () => {
			console.log('Соединение установлено');
		};

		socket.onmessage = (event) => {
      if (event.data instanceof ArrayBuffer) {
        const decoder = new TextDecoder('utf-8');
        const data = decoder.decode(new Uint8Array(event.data));
        const cleanData = data.replace(/[{}#*]/g, '');
        setChatLog((prevLog) => [...prevLog, cleanData]);
      } else {
        const cleanData = event.data.replace(/[{}#*]/g, '');
        setChatLog((prevLog) => [...prevLog, cleanData]);
      }
    };

		socket.onclose = (event) => {
			console.log('Соединение закрыто:', event.code, event.reason);
			setWs(null);
		};

		socket.onerror = (event) => {
			console.log('Ошибка подключения:', event);
		};

		return () => {
			if (socket) {
				socket.close();
			}
		};
	}, []);

	const handleReconnect = () => {
		if (!ws) {
			setTimeout(() => {
				const newSocket = new WebSocket('ws://localhost:8080/ws');
				newSocket.binaryType = "arraybuffer"; // Используем бинарные сообщения
				setWs(newSocket);
			}, 1000); // Задержка в 1 секунду
		}
	};

	useEffect(() => {
		if (!ws) {
			handleReconnect();
		}
	}, [ws]);

	const handleSendMessage = () => {
		if (ws && ws.readyState === WebSocket.OPEN) {
			console.log('Отправка сообщения:', message);
			try {
				ws.send(message);
				setMessage('');
			} catch (error) {
				console.log('Ошибка при отправке сообщения:', error);
			}
		} else {
			console.log('Соединение не установлено или закрыто');
		}
	};

	const handleGetRecipe = () => {
    if (ws && ws.readyState === WebSocket.OPEN && ingredients.length > 0) {
      const ingredientsList = ingredients.map((ingredient) => ingredient.name).join(', ');
      const message = `Напиши рецепт домашней настойки, содержащей следующие ингредиенты: ${ingredientsList}.`;
      try {
        ws.send(message);
      } catch (error) {
        console.log('Ошибка при отправке сообщения:', error);
      }
    } else if (ingredients.length === 0) {
      alert('Выберите хотя бы один ингредиент');
    } else {
      console.log('Соединение не установлено или закрыто');
    }
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
									onClick={() => handleIngredientClick(ingredient)} />
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
