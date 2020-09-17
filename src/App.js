import React from 'react';
import './App.css';
import Header from './Components/Header';
import Pets from './Components/Pets';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Pets />
      <Footer />
    </div>
  );
}

export default App;
