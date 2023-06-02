import React from 'react'
import Header from '../Header/Header'
import Enceinte from '../../../assets/enceinte.jpg'
import './Hero.css'

const Hero = () => {
  return (
    
    <div className="hero">
        <div className='top-side'>
        <Header/>
        </div>
        <div className='container1'>
        <div className='left-side'>
            <h1>Trouvez les talents du cinéma audiovisuel pour réaliser vos projets !</h1>
            <p>Vous recherchez des talents du ciména audiovisuel pour réaliser vos projets créatifs ? Notre plateforme est là pour vous aider ! Que vous ayez besoin d'un photographe, d'un ingénieur du son, d'un acteur, d'un cadreur, d'un monteur, d'un scénariste, d'un chef opérateur ou d'un réalisateur, notre plateforme de recherche de talents vous permet de trouver les professionnels qualifiés dont vous avez besoin pour concrétiser votre vision cinématographique.</p>

        </div>
        <div className='right-side'>
        <img src={Enceinte} alt="Image" className='enceinte'></img>
        </div>
        </div>
    </div>
  )
}

export default Hero