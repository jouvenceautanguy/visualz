import React, { useState } from 'react';
import Logo from '../../../assets/visualzwhite.png'
import './headerMain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSquarePlus, faMessage, faNewspaper } from '@fortawesome/free-regular-svg-icons'

function HeaderMain() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleAccountLinkClick = (event) => {
        event.preventDefault(); // Empêcher le comportement de lien par défaut
      
        const accessToken = localStorage.getItem('accessToken');
      
        if (accessToken) {
          // Afficher ou masquer l'encart en fonction de l'état de connexion
          setIsLoggedIn(!isLoggedIn);
        } else {
          // Rediriger vers la page de connexion
          window.location.href = '/connexion';
        }
      };

    const handleLogoutClick = () => {
        localStorage.removeItem('accessToken');

        setIsLoggedIn(false); // Mettre à jour l'état de connexion de l'utilisateur
    };

    const handleButtonClick = () => {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            // Rediriger vers /missions/create si l'utilisateur est connecté
            window.location.href = '/missions/create';
        } else {
            // Afficher un message demandant à l'utilisateur de se connecter
            alert('Veuillez vous connecter');
        }
    };

    return (
        <div className="headerMain">
            <a href="/" className='logo-menu'><img src={Logo} alt="Mon Logo"></img></a>
            <a href="#">
                <button className="button-menu" onClick={handleButtonClick}>
                    DÉPOSER UNE ANNONCE
                    <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                </button>
            </a>
            <ul className='header-menu'>
                <li>
                    <a href="#" className="menu-link">
                        <FontAwesomeIcon className="iconsLink" icon={faNewspaper} /> BLOG
                    </a>
                </li>
                {/* <li>
                    <a href="#" className="menu-link">
                        <FontAwesomeIcon icon={faUser} /> FAVORIS
                    </a>
                </li> */}
                <li>
                    <a href="#" className="menu-link">
                        <FontAwesomeIcon className="iconsLink" icon={faMessage} /> MESSAGES
                    </a>
                </li>
                <li>
                    <a href="#" className="menu-link" onClick={handleAccountLinkClick}>
                        <FontAwesomeIcon className="iconsLink" icon={faUser} /> MON COMPTE
                    </a>
                    {isLoggedIn && (
                        <div className="account-panel">
                            <p>Bienvenue dans votre compte.</p>
                            <button onClick={handleLogoutClick}>Se déconnecter</button>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default HeaderMain;