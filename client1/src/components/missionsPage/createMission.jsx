import React, { useState, useEffect } from "react";
import "./createMission.css"

function CreateMission() {
    const [titre, setTitre] = useState('');
    const [objet, setObjet] = useState('');
    const [duree, setDuree] = useState('');
    const [debut, setDebut] = useState('');
    const [lieu, setLieu] = useState('');
    const [etat, setEtat] = useState('En cours');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!titre || !objet || !duree || !duree || !debut || !lieu) {
            setErrorMessage('Veuillez remplir tous les champs du formulaire.');
            return;
        }

        // Création de l'objet contenant les données du formulaire
        const formData = {
            titre,
            objet,
            duree,
            debut,
            lieu,
            etat
        };
        // Check if you have the JWT available
        const accessToken = localStorage.getItem('accessToken'); // Example: Retrieve the JWT from localStorage
        console.log("localStorage", accessToken);
        if (!accessToken) {
            // Handle the case when the JWT is not available
            setErrorMessage('Vous devez être connecté pour effectuer cette action.');
            return;
        }
        // Envoi des données à l'API en utilisant fetch
        fetch('/missions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${accessToken}`,
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('mission créée');
                    setErrorMessage('');
                    // Rediriger l'utilisateur vers une autre page
                    window.location.href = '/';
                } else {
                    console.error('Erreur lors de la création');
                    setErrorMessage('Erreur lors de la création');
                }
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi des données', error);
                setErrorMessage('Erreur lors de l\'envoi des données');
            });
    };

    return (
        <div className='createMission'>
            <div className='main-card-mission'>
                <div className='titre-mission'>
                    <h2>VOTRE ANNONCE</h2>
                </div>

                <div className='form-mission'>
                    <form onSubmit={handleSubmit}>
                        <div className='champs'>
                            <p> Choisissez un titre pour votre annonce <span>*</span></p>
                            <input
                                type="text"
                                id="nom"
                                placeholder="Recherche monteur sur Paris"
                                value={titre}
                                onChange={(event) => setTitre(event.target.value)}
                            />
                        </div>
                        <div className='champs'>
                            <p> Décrivez-nous votre projet <span>*</span></p>
                            <input
                                type="text"
                                id="objet"
                                placeholder="J'ai besoin d'un monteur pour un projet..."
                                value={objet}
                                onChange={(event) => setObjet(event.target.value)}
                            />
                        </div>
                        <div className='champs'>
                            <p> Pour quel durée ? <span>*</span></p>
                            <input
                                type="text"
                                id="duree"
                                placeholder="5"
                                value={duree}
                                onChange={(event) => setDuree(event.target.value)}
                            />
                        </div>
                        <div className='champs'>
                            <p> Une date de début ? <span>*</span></p>
                            <input
                                type="date"
                                id="debut"
                                value={debut}
                                onChange={(event) => setDebut(event.target.value)}
                            />
                        </div>
                        <div className='champs'>
                            <p>Où se déroulera votre projet ? <span>*</span></p>
                            <input
                                type="text"
                                id="lieu"
                                value={lieu}
                                placeholder="Paris"
                                onChange={(event) => setLieu(event.target.value)}
                            />
                        </div>
                        <div className="button-createMission">
                            <button type="submit">Envoyer</button>
                        </div>


                    </form>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
            </div>
        </div>

    );
}


export default CreateMission