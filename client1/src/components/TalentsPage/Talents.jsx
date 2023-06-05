import React, { useState, useEffect } from 'react';
import './Talents.css';

function TalentsPage() {
  const [visualzData, setVisualzData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log(params);
        const response = await fetch(`/visualz?pays=${params.ville || ''}&domaine=${params.categorie || ''}`);
        const data = await response.json();
        console.log(data);
        setVisualzData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="talents-container">
      <h2>Profils Visualz pour : Monteur</h2>

      <div className="cards-container">
        {visualzData.length > 0 ? (
          visualzData.map((visualz) => (
            <div key={visualz.id_visualz} className="card">
              <p>{visualz.bio}</p>
              <p>{visualz.domaine}</p>
              <p>{visualz.location}</p>
              <img src={visualz.profilImage} alt="Profil Image" />
            </div>
          ))
        ) : (
          <p>Aucune donnée disponible</p>
        )}
      </div>
    </div>
  );
}

export default TalentsPage;