import React from 'react'
import "./WordingMain.css"
import Logo from '../../../assets/visualzcolor.png'

function WordingMain() {
  return (
    <div>
        <div className='wording1'>
        <div className='text1'>
        <h1>LOREM IPSUM</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, tempora. Possimus dicta est ad architecto voluptate esse voluptatum accusamus doloremque temporibus sed! Labore aliquid minima nemo dignissimos similique, hic nesciunt?</p>
        </div>
        <div className='image1'>
        <img src={Logo} alt="Mon Logo"></img>
        </div>
    
        </div>
        <div className='wording2'>
        <div className='image2'>
        <img src={Logo} alt="Mon Logo"></img>
        </div>
        <div className='text2'>
        <h1>LOREM IPSUM</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, tempora. Possimus dicta est ad architecto voluptate esse voluptatum accusamus doloremque temporibus sed! Labore aliquid minima nemo dignissimos similique, hic nesciunt?</p>

        </div>
        </div>
    </div>
  )
}

export default WordingMain