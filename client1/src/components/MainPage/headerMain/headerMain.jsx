import React from 'react'
import Logo from '../../../assets/visualzcolor.png'
import './headerMain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function HeaderMain() {
  return (
    <div className="headerMain">
   
    <a href="#" className='logo-menu'><img src={Logo} alt="Mon Logo"></img></a>
    <a href='#'><button className='button-menu'>déposer une annonce</button></a>
    <ul className='header-menu'>
    <li>
        <a href="#" className="menu-link">
            <FontAwesomeIcon icon={faUser} /> BLOG
        </a>
    </li>
    <li>
        <a href="#" className="menu-link">
            <FontAwesomeIcon icon={faUser} /> FAVORIS
        </a>
    </li>
    <li>
        <a href="#" className="menu-link">
            <FontAwesomeIcon icon={faUser} /> MESSAGES
        </a>
    </li>
    <li>
        <a href="#" className="menu-link">
            <FontAwesomeIcon icon={faUser} /> MON COMPTE
        </a>
    </li>
</ul>

</div>

  )
}

export default HeaderMain