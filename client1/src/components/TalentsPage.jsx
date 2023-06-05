import React from 'react'
import Talents from './TalentsPage/Talents.jsx';
import HeaderMain from './MainPage/headerMain/headerMain.jsx';
import Footer from './Footer/Footer.jsx';
import SearchBar from './MainPage/SearchBar/SearchBar.jsx';
function TalentsPage() {
  return (
    <div>
        <HeaderMain />
        <SearchBar />
        <Talents />
        <Footer />
    </div>
  )
}

export default TalentsPage