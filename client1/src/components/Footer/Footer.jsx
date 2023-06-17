import React, {useState } from 'react';
import "./Footer.css"
import Logo from '../../assets/visualzwhite.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter,faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
function Footer() {

  const [userInput, setUserInput] = useState('');
  const [validationError, setValidationError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleSubmit(event) {
      event.preventDefault();

        // Vérifier la validité du formulaire
       const form = event.target;
      if (!form.checkValidity()) {
      setValidationError('Veuillez entrer une adresse email valide.');
      return;
      }

      
      fetch('/mailing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userInput })
      })
      .then(response => {
        if (response.ok) {
          console.log('Email envoyé avec succès');
          setValidationError('');
          setSuccessMessage('Email ajouté avec succès!');
        } else {
          console.log('Erreur lors de l\'envoi de l\'email');
          setValidationError('Une erreur s\'est produite lors de l\'envoi de l\'email.');
        }
      })
      .catch(error => {
          console.log(error);
          setValidationError('Une erreur s\'est produite lors de l\'envoi de l\'email.');
        });
      }

    function handleInputChange(event) {
      setUserInput(event.target.value);
    }


  return (
    <div className='containerFoot'>
      <div className='footer'>
      <div className='reseaux'>
  <a href='#'><FontAwesomeIcon  className="icons" icon={faInstagram} /></a>
  <a href='#'><FontAwesomeIcon className="icons" icon={faTwitter} /></a>
  <a href='#'><FontAwesomeIcon className="icons" icon={faFacebookSquare} /></a>
</div>
<div className='logo'>
<a href="#" className='logo-menu'><img src={Logo} alt="Mon Logo"></img></a>
</div>
<div className='newsletter'>
<h5>
          Inscrivez-vous à notre newsletter.
        </h5>
<div className='barre'>
        <form onSubmit={handleSubmit}>
        <input type="email" name="userInput" placeholder="exemple@visualz.com" value={userInput} onChange={handleInputChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
        <button type="submit">Envoyer</button>
        <div className="validation-error">{validationError}</div>
        <div className="success-message">{successMessage}</div>
        </form>
      </div>
</div>
      </div>

        
    </div>
  )
}

export default Footer