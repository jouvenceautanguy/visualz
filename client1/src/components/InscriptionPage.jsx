import React from 'react'
import Footer from './Footer/Footer.jsx'
import Inscription from "./inscription/inscription.jsx"
import HeaderMain from './MainPage/headerMain/headerMain.jsx'
// import "./inscriptionPage.css"
function InscriptionPage() {
  return (
    <div className='Inscription'>
        <HeaderMain />
        <Inscription />
        <Footer />
    </div>
  )
}

export default InscriptionPage