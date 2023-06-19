import React, { useState, useEffect } from 'react';
import './missions.css'

function MissionsPage() {

  const [missionsData, setMissionsData] = useState([]);
  const [paramsData, setParamsData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log('params', params);
        setParamsData(params);
        const response = await fetch(`/missions?pays=${params.pays || ''}`);
        const data = await response.json();
        console.log(data);
        setMissionsData(data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <div className='missions-container'>
        {/* <h2>Profils Visualz pour : {paramsData.categorie}</h2> */}
        <h2>Missions Visualz pour : Graphiste</h2>
        <div className="cards-container">
          {missionsData.length > 0 ? (
            missionsData.map((missions) => (
              <div key={missions.id_mission} className="card-talents">
                <div className='infos'>
                  <h2 className='card-title'>{missions.titre}</h2>
                  <p className='card-bio'>{missions.objet}</p>
                  <p className='card-location'>{missions.lieu}</p>
                  <p className='card-nom'>{missions.nom.toUpperCase() + " " + missions.prenom.toUpperCase()}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Aucune donnée disponible</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MissionsPage