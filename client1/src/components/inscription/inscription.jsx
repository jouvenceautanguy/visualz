import React, { useState } from 'react';
import "./inscription.css";

const Inscription = () => {

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nom || !prenom || !email || !motDePasse) {
      setErrorMessage('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    // Validation du champ nom: non vide et seulement des lettres
    const nomRegex = /^[a-zA-Z]+$/;
    if (!nomRegex.test(nom)) {
      setErrorMessage('Le champ nom ne doit contenir que des lettres.');
      return;
    }

    // Validation du champ prenom: non vide et seulement des lettres
    const prenomRegex = /^[a-zA-Z]+$/;
    if (!prenomRegex.test(prenom)) {
      setErrorMessage('Le champ prénom ne doit contenir que des lettres.');
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
      nom,
      prenom,
      email,
      motDePasse,
    };

    // Envoi des données à l'API en utilisant fetch
    fetch('/inscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Inscription réussie');
          setErrorMessage('');
          // Rediriger l'utilisateur vers une autre page
          window.location.href = '/';
        } else {
          console.error('Erreur lors de l\'inscription');
          setErrorMessage('Erreur lors de l\'inscription');
        }
        return response.json(); // Ajoutez cette ligne pour extraire le JSON de la réponse
      })
      .then((data) => {
        const { accessToken } = data; // Extrayez l'accessToken du JSON de la réponse
        localStorage.setItem('accessToken', accessToken); // Stockez l'accessToken dans localStorage
      })
      .catch((error) => {
        console.error('Erreur lors de l\'envoi des données', error);
        setErrorMessage('Erreur lors de l\'envoi des données');
      });
  };

  return (
    <div>
      <div className='inscription'>
        <div className='main-card'>
          <h2>Créer un compte</h2>
          <p>Créer un compte pour déposer une mission, proposer vos services ou faire appel à un Visualz.</p>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <div className='champs'>
                <label htmlFor="nom">Nom </label>
                <input
                  type="text"
                  id="nom"
                  value={nom}
                  onChange={(event) => setNom(event.target.value)}
                />
              </div>
              <div className='champs'>
                <label htmlFor="prenom">Prénom </label>
                <input
                  type="text"
                  id="prenom"
                  value={prenom}
                  onChange={(event) => setPrenom(event.target.value)}
                />
              </div>
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
              <button type="submit">Envoyer</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;