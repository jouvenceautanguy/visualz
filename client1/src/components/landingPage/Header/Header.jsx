import React from 'react'
import './Header.css'
import Logo from '../../../assets/visualzcolor.png'
const Header = () => {
  return (
    <div className="header">
   
        <a href="#" className='logo'><img src={Logo} alt="Mon Logo"></img></a>
        
    
    </div>
  )
}

export default Header