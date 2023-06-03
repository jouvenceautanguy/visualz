import React from 'react'
import Inscription from "./inscription/inscription.jsx"
import HeaderMain from './MainPage/headerMain/headerMain.jsx'
// import "./inscriptionPage.css"
function InscriptionPage() {
  return (
    <div className='Inscription'>
        <HeaderMain />
        <Inscription />
    </div>
  )
}

export default InscriptionPage