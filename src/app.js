// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Monedas from './monedas/Monedas';
import Menu from './pages/Menu';
import Logo from './pages/Logo';
import Footer from './pages/Footer';
import Dolar from './monedas/Dolar';
import Euro from './monedas/Euro';
import Libra from './monedas/Libra';
import Real from './monedas/Real';
import PesoUruguayo from './monedas/PesoUruguayo';
import DolarBlue from './monedas/DolarBlue';
import ContadoConLiqui from './monedas/DolarContadoLiqui';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import './styles/style.css';
import './styles/responsive.css';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Almacena el estado actual del modo oscuro en localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Recupera el estado del modo oscuro al cargar la aplicación
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
    }
  }, []);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <div>
        <button onClick={toggleDarkMode}>
          <ContrastOutlinedIcon />
        </button>
      </div>
      <Router>
        <>
          <Logo />
          <Menu />
          <Routes>
            <Route path="/Home" element={<Inicio />} />
            <Route path="/Monedas/*" element={<Monedas />} />
            <Route path="/Dolar" element={<Dolar />} />
            <Route path="/Euro" element={<Euro />} />
            <Route path="/Libra" element={<Libra />} />
            <Route path="/Real" element={<Real />} />
            <Route path="/PesoUruguayo" element={<PesoUruguayo />} />
            <Route path="/DolarBlue" element={<DolarBlue />} />
            <Route path="/ContadoConLiqui" element={<ContadoConLiqui />} />
          </Routes>
          
          <Footer />
        </>
      </Router>
    </div>
  );
};

export default App;
