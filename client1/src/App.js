import React, {useState } from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import { Routes , Route} from 'react-router-dom';
import MainPage from './components/mainPage';

function App() {
 
  return (
    <div className="App">
    <Routes>
    <Route path="/landing" element={<LandingPage />} />
    <Route path="/" element={<MainPage />} />

    </Routes>
      
      
    
      
     
    </div>
  );
}

export default App;
