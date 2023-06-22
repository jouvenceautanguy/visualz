import React, { useState, useEffect } from 'react';
import './Talents.css';
import Img from "../../assets/visualzcolor.png";


function TalentsPage() {
  const [visualzData, setVisualzData] = useState([]);
const [paramsData, setParamsData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log('params',params);
        setParamsData(params);
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
    <div>
      <div className='talents-containerr'>
      <h2>Profils Visualz pour : {paramsData.categorie}</h2>

      <div className="cards-containerr">
        {visualzData.length > 0 ? (
          visualzData.map((visualz) => (
            <div key={visualz.id_visualz} className="card-talentss">
               <div className='image-card'><img src={Img} alt="Profil Image" /></div>
               <div className='infos-talents'>
              <h2 className='card-nom'>{visualz.nom.toUpperCase() +" "+visualz.prenom.toUpperCase()}</h2>
              <h3 className='card-domaine'>{visualz.domaine.toUpperCase()}</h3>
              <p className='card-bio'>{visualz.bio}</p>
              <p className='card-location'>{visualz.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Aucune donnée disponible</p>
        )}
      </div>
      </div>
    </div>
  );
}

export default TalentsPage;