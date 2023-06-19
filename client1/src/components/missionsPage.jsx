import React from 'react'
import Missions from "./missionsPage/missions.jsx"
import HeaderMain from './MainPage/headerMain/headerMain.jsx';
import Footer from './Footer/Footer.jsx';
import SearchBar from './MainPage/SearchBar/SearchBar.jsx';
import './pagesStyle/missionsPage.css'
function missionsPage() {
  return (
    <div className='missionsPageContainer'>
        <HeaderMain />
        <SearchBar />
        <Missions />
        <Footer />
    </div>
  )
}

export default missionsPage