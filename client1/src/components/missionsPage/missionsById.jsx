import React, { useState, useEffect } from "react";
import { useParams, useLocation } from 'react-router-dom';
import "./missionsById.css";

function MissionsById() {
  const [missionsData, setMissionsData] = useState([]);
  const [paramsData, setParamsData] = useState({});
  const [showMessage, setShowMessage] = useState(false); 
  const { id} = useParams();
  const location = useLocation(); // Obtient l'objet location contenant l'URL complète

  const paramUrl = new URLSearchParams(location.search); // Crée un nouvel objet URLSearchParams à partir de la chaîne de requête
  const encodedPhoto = paramUrl.get('photo'); // Récupère la valeur du paramètre 'photo'
  const photo = decodeURIComponent(encodedPhoto);
  console.log(photo)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = id;
        console.log("params", params);
        setParamsData(params);

        const response = await fetch(`api/missions/${params}`);
        const data = await response.json();
        console.log(data);
        setMissionsData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleContactClick = () => {
    // Mettez ici votre logique pour le clic sur le bouton "CONTACTER"
    setShowMessage(true); // Afficher le message "À venir"
  };

  return (
    <div className="bodyMissionPage">
    <div className="main-container">
      <div className="image-grosFormat">
         <img src={photo}></img>
        </div>
        <div className="titreLike">
         <h2>{missionsData.titre && missionsData.titre.toUpperCase()}</h2>
          {/* <img src=""></img> */}
        </div>
        {/* <div className="datePubli">
          <p> Aujourd'hui 12h30</p>
        </div> */}
        <div className="infos1">
          <div className="besoin">
            <h3>Besoin</h3>
            <p>Monteur</p>
          </div>
          <div className="lieu">
            <h3>Lieu</h3>
            <p>{missionsData.lieu}</p>
          </div>
          </div>
          <div className="infos2">
            <h3>Date</h3>
            <p>{missionsData.debut}</p>
          </div>
          <div className="infos3">
            <h3>Description</h3>
            <p>
            {missionsData.objet}
            </p>
            <div className="button-grosseAnnonce">
            <button onClick={handleContactClick}>CONTACTER</button>
            </div>
            {showMessage && <div className="messagePreventif">À venir</div>}
          </div>
        </div>
        </div>
  );
}

export default MissionsById;
