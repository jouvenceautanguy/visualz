import React from 'react'
import Logo from '../../../assets/visualzwhite.png'
import './headerMain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSquarePlus, faMessage,faNewspaper} from '@fortawesome/free-solid-svg-icons'
function HeaderMain() {
    return (
        <div className="headerMain">

            <a href="#" className='logo-menu'><img src={Logo} alt="Mon Logo"></img></a>
            <a href="#">
                <button className="button-menu">
                    DÉPOSER UNE ANNONCE 
                    <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                </button>
             
            </a>
            <ul className='header-menu'>
                <li>
                    <a href="#" className="menu-link">
                    <FontAwesomeIcon className ="iconsLink" icon={faNewspaper} /> BLOG
                    </a>
                </li>
                {/* <li>
                    <a href="#" className="menu-link">
                        <FontAwesomeIcon icon={faUser} /> FAVORIS
                    </a>
                </li> */}
                <li>
                    <a href="#" className="menu-link">
                    <FontAwesomeIcon className ="iconsLink" icon={faMessage} /> MESSAGES
                    </a>
                </li>
                <li>
                    <a href="#" className="menu-link">
                        <FontAwesomeIcon className ="iconsLink" icon={faUser} /> MON COMPTE
                    </a>
                </li>
            </ul>

        </div>

    )
}

export default HeaderMain