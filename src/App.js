import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../src/pages/home.js';
import Profile from '../src/pages/profile.js';
import Cart from '../src/pages/cart.js';
import Configurator from '../src/pages/configurator.js';
import Login from './pages/login.js';
import Navbar from './components/NavBar';
import '../src/styles/App.css';

const AppContent = () => {
  const location = useLocation();

  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && (
        <header>
          <Navbar />
        </header>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2>Страница не найдена</h2>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
