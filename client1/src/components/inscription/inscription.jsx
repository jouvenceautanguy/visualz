import React, {useState } from 'react'
import "./inscription.css"


const Inscription = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!nom || !prenom || !email || !motDePasse) {
            console.error('Veuillez remplir tous les champs du formulaire.');
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
              // Effectuer les actions nécessaires en cas de succès de l'inscription, par exemple, rediriger l'utilisateur vers une autre page
            } else {
              console.error('Erreur lors de l\'inscription');
              // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
            }
          })
          .catch((error) => {
            console.error('Erreur lors de l\'envoi des données', error);
            // Gérer les erreurs de connexion ou de requête
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
</div>

        </div>

        </div>
    </div>
    )
}
  export default Inscription;