import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home.js';
import Profile from '../src/pages/profile.js';
import Cart from '../src/pages/cart.js'
import Configurator from '../src/pages/configurator.js'
import Navbar from '../src/components/navBar.js';
import '../src/styles/App.css';

const App = () => {
	return (
	  <Router>
		<header>
		  <Navbar />
		</header>
  
		<Routes>
		  <Route path="/" element={<Home />} />
		  <Route path="/configurator" element={<Configurator />} />
		  <Route path="/profile" element={<Profile />} />
		  <Route path="/cart" element={<Cart />} />
		  {/* Можно добавить 404 страницу */}
		  <Route path="*" element={<h2>Страница не найдена</h2>} />
		</Routes>
	  </Router>
	);
};
  
export default App;
