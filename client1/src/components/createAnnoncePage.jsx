import React from 'react'
import HeaderMainBlack from './MainPage/headerMain/headerMainBlack'
import Footer from './Footer/Footer'
import CreateMission from './missionsPage/createMission'
import './pagesStyle/createAnnoncePage.css'

function createAnnoncePage() {
  return (
    <div className='createAnnoncePage-container'>
            <HeaderMainBlack />
            <CreateMission />
            <Footer />
    </div>
  )
}

export default createAnnoncePage