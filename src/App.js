import './App.css';

import Menu from './widgest/Navbar/index'

import React from  'react'
import Arrumed from './components/arrumed/Arrumed'
import Itens from './components/Itens/itens'
import Avisos from './components/avisos/Avisos'
import Liberacao from './components/liberacao/Liberacao'

function App() {
  return (
    <div className="App container">
      <Arrumed></Arrumed>
      <Menu></Menu>
      <Itens />
      <Avisos />
      <Liberacao />
    </div>
  );
}

export default App;
