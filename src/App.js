import logo from './assets/images/logo.svg';
import React from 'react'
import './assets/css/App.css';
import Rutas from './components/Rutas';


// Función principal del componente
function App() {
   return (
    <div>
      <img src={logo} alt="logo" width="100px" />

      <Rutas />
      
  </div>
  );
}

export default App;
