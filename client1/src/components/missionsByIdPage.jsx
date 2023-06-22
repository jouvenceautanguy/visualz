import React from 'react'
import HeaderMainBlack from './MainPage/headerMain/headerMainBlack.jsx';
import Footer from './Footer/Footer.jsx';
import MissionsById from "./missionsPage/missionsById.jsx";
import './pagesStyle/missionsByIdPage.css'
function MissionsByIdPage() {

    
  return (
    <div className='missionsByIdPage-container'>
        <HeaderMainBlack />
        <MissionsById />
        <Footer />
    </div>
  )
}

export default MissionsByIdPage