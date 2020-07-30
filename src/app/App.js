import React from 'react';
import '../ui/Fonts.css';
import '../ui/Normalize.css';
import '../ui/naUI.css';

import Header from '../components/header/Header';
import Home from '../pages/home/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
