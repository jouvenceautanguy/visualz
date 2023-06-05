import React, {useState } from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import { Routes , Route} from 'react-router-dom';
import MainPage from './components/mainPage';
import InscriptionPage from './components/InscriptionPage';
import TalentsPage from './components/TalentsPage';
import ConnexionPage from './components/connexionPage';
function App() {
 
  return (
    <div className="App">
    <Routes>
    <Route path="/landing" element={<LandingPage />} />
    <Route path="/" element={<MainPage />} />
    <Route path="/inscription" element={<InscriptionPage />} />
    <Route path="/connexion" element={<ConnexionPage />} />
    <Route path="/visualz" element={<TalentsPage />} />
    </Routes>
      
      
    
      
     
    </div>
  );
}

export default App;
