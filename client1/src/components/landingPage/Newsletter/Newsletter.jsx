import React, {useState } from 'react';
import './Newsletter.css'

const Newsletter = () => {

    const [userInput, setUserInput] = useState('');
    const [validationError, setValidationError] = useState('');
    function handleSubmit(event) {
        event.preventDefault();

          // Vérifier la validité du formulaire
         const form = event.target;
        if (!form.checkValidity()) {
        setValidationError('Veuillez entrer une adresse email valide.');
        return;
        }

        
        fetch('api/mailing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: userInput })
        })
        .then(response => {
          if (response.ok) {
            console.log('Email envoyé avec succès');
            setValidationError('');
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

    <div className='newsLetter'>
        <h5>
          Inscrivez-vous à notre newsletter afin de ne rien rater.
        </h5>
  
      <div className='barre'>
        <form onSubmit={handleSubmit}>
        <input type="email" name="userInput" placeholder="Adresse mail" value={userInput} onChange={handleInputChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
        <button type="submit">Envoyer</button>
        <div className="validation-error">{validationError}</div>
        </form>
      </div>

    </div>
  )
}

export default Newsletter