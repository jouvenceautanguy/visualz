import React, { useEffect, useState } from 'react';
import './TopCategorie.css';
// import graphisteImg from '../../assets/graphisteIcon.jpg';
// import ingenieurSonImg from './images/ingenieur-son.png';
// import photographeImg from './images/photographe.png';
// import motionDesignImg from './images/motion-design.png';

function TopCategorie() {
  const [domaines, setDomaines] = useState([]);

  useEffect(() => {
    fetchDomaines();
  }, []);

  const fetchDomaines = () => {
    fetch('/domaine')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des domaines');
        }
        return response.json();
      })
      .then(data => {
        setDomaines(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des domaines:', error);
      });
  };

  const handleClick = domaine => {
    console.log("Domaine cliqué:", domaine);
        // Construire l'URL avec les valeurs sélectionnées
        const url = `/visualz?ville=&categorie=${domaine.domaine}`;
        // Rediriger vers la page de destination
        window.location.href = url;
    // Ajoutez ici la logique que vous souhaitez exécuter lors du clic sur un domaine
  };
  return (
    <div className="top-domaine">
     
      <h3 className='wording'>TOP CATÉGORIES</h3>
      <div className='categories'>
      {domaines.map(domaine => (
        <div className="square" key={domaine.domaine} onClick={() => handleClick(domaine)}>
          <div className="nom-domaine">{domaine.domaine.toUpperCase()}</div>
          <div className="total-domaine">{domaine.total} {domaine.total === 1 ? 'Profil' : 'Profils'}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default TopCategorie;