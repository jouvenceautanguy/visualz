import React from 'react'
import Logo from '../../../assets/visualzcolor.png'
import './headerMainBlack.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSquarePlus, faMessage,faNewspaper} from '@fortawesome/free-solid-svg-icons'
function HeaderMainBlack() {
    return (
        <div className="headerMain">

            <a href="/" className='logo-menu'><img src={Logo} alt="Mon Logo"></img></a>
            <a href="#">
                <button className="button-menu">
                    DÉPOSER UNE ANNONCE 
                    <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                </button>
             
            </a>
            <ul className='header-menu'>
                <li>
                    <a href="#" className="menu-linkBlack">
                    <FontAwesomeIcon className ="iconsLinkBlack" icon={faNewspaper} /> BLOG
                    </a>
                </li>
                {/* <li>
                    <a href="#" className="menu-link">
                        <FontAwesomeIcon icon={faUser} /> FAVORIS
                    </a>
                </li> */}
                <li>
                    <a href="#" className="menu-linkBlack">
                    <FontAwesomeIcon className ="iconsLinkBlack" icon={faMessage} /> MESSAGES
                    </a>
                </li>
                <li>
                    <a href="#" className="menu-linkBlack">
                        <FontAwesomeIcon className ="iconsLinkBlack" icon={faUser} /> MON COMPTE
                    </a>
                </li>
            </ul>

        </div>

    )
}

export default HeaderMainBlack