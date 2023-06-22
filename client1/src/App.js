import React, {useState } from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import { Routes , Route} from 'react-router-dom';
import MainPage from './components/mainPage';
import InscriptionPage from './components/InscriptionPage';
import TalentsPage from './components/TalentsPage';
import ConnexionPage from './components/connexionPage';
import MissionsPage from './components/missionsPage';
import MissionsByIdPage from "./components/missionsByIdPage";
import CreateAnnoncePage from './components/createAnnoncePage';
function App() {
 
  return (
    <div className="App">
    <Routes>
    <Route path="/landing" element={<LandingPage />} />
    <Route path="/" element={<MainPage />} />
    <Route path="/inscription" element={<InscriptionPage />} />
    <Route path="/connexion" element={<ConnexionPage />} />
    <Route path="/visualz" element={<TalentsPage />} />
    <Route path="/missions" element={<MissionsPage /> } />
    <Route path="/missions/:id" element={<MissionsByIdPage /> } />
    <Route path="/missions/create" element={<CreateAnnoncePage /> } />
    </Routes>
      
      
    
      
     
    </div>
  );
}

export default App;
