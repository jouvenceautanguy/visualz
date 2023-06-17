import React from 'react'
import "./WordingMain.css"
import Img1 from '../../../assets/Photo1.png'
import Img2 from '../../../assets/Photo2.png'

function WordingMain() {
  return (
    <div>
        <div className='wording1'>
        <div className='text1'>
        <h1>+10 000 MEMBRES</h1>
<p>Plongez dans un réseau dynamique d'échange de services audiovisuels et profitez de la satisfaction garantie de nos adhérents, qui bénéficient d'une collaboration fructueuse, d'une expertise partagée et d'une communauté passionnée dans le domaine de l'audiovisuel.</p>
        </div>
        <div className='image1'>
        <img src={Img1} alt="Mon Logo"></img>
        </div>
    
        </div>
        <div className='wording2'>
        <div className='image2'>
        <img src={Img2} alt="Mon Logo"></img>
        </div>
        <div className='text2'>
        <h1>{`+500 Projets réalisés`.toUpperCase()}</h1>
<p>Assurez la sécurité de vos échanges audiovisuels grâce à notre plateforme d'échange de services, offrant des garanties solides et des mesures de protection avancées pour préserver la confidentialité, la fiabilité et la confiance de nos membres.</p>

        </div>
        </div>
    </div>
  )
}

export default WordingMain