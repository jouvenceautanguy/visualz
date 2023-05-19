import React, {useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
 
  return (
    <div className="App">
      <Hero/>
      <Newsletter/>
         
    </div>
  );
}

export default App;
