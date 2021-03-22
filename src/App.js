import './App.css';

import React from  'react'

import Menu from './widgest/Navbar/index'
import Arrumed from './components/arrumed/Arrumed'
import Itens from './components/Itens/itens'
import Avisos from './components/avisos/Avisos'
import Liberacao from './components/liberacao/Liberacao'
import Routes from './Route';

function App() {
  return (
    <div className="App container">
        <Routes/>
    </div>
  );
}

export default App;
