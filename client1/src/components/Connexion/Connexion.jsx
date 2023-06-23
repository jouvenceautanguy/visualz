import React, { useState } from 'react';
import "./Connexion.css";

const Connexion = () => {

  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !motDePasse) {
      setErrorMessage('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    // Validation du champ motDePasse: non vide et au moins 1 majuscule
    const motDePasseRegex = /^(?=.*[A-Z]).+$/;
    if (!motDePasseRegex.test(motDePasse)) {
      setErrorMessage('Le mot de passe doit contenir au moins une lettre majuscule.');
      return;
    }

    // Validation du champ email: non vide et respecter le format email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Veuillez saisir une adresse email valide.');
      return;
    }

    // Création de l'objet contenant les données du formulaire
    const formData = {
      email,
      motDePasse,
    };

    // Envoi des données à l'API en utilisant fetch
    fetch('api/connexion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Connexion réussie');
          setErrorMessage('');
          // Rediriger l'utilisateur vers une autre page
          window.location.href = '/';
        } else {
          console.error('Erreur lors de la connexion');
          setErrorMessage('Mauvaise combinaison email/mot de passe.');
        }
        return response.json(); // Ajoutez cette ligne pour extraire le JSON de la réponse
      })
      .then((data) => {
        const { accessToken } = data; // Extrayez l'accessToken du JSON de la réponse
        localStorage.setItem('accessToken', accessToken); // Stockez l'accessToken dans localStorage
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi des données', error);
        setErrorMessage('Erreur lors de la connexion');
      });
  };

  return (
    <div>
      <div className='connexion'>
        <div className='main-card-connexion'>
          <div className='titre-connect'>
          <h2>Se connecter</h2>
          </div>
          
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <div className='champs'>
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className='champs'>
                <label htmlFor="motDePasse">Mot de passe </label>
                <input
                  type="password"
                  id="motDePasse"
                  value={motDePasse}
                  onChange={(event) => setMotDePasse(event.target.value)}
                />
              </div>
              <div className='button-login'>
              <button type="submit">Envoyer</button>
              </div>
             
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connexion;