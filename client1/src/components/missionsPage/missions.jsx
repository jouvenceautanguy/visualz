import React, { useState, useEffect } from "react";
import "./missions.css";
import Generique1 from "../../assets/generique1.jpg";
import Generique2 from "../../assets/generique2.jpg";
import Generique3 from "../../assets/generique3.jpg";
import Generique4 from "../../assets/generique4.jpg";
import Generique5 from "../../assets/generique5.jpg";
import Generique6 from "../../assets/generique6.jpg";
import Generique7 from "../../assets/generique7.jpg";
import Generique8 from "../../assets/generique8.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function MissionsPage() {
  const [missionsData, setMissionsData] = useState([]);
  const [paramsData, setParamsData] = useState({});
  const arrayGenerique = [Generique1, Generique2, Generique3, Generique4, Generique5, Generique6, Generique7, Generique8]


  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log("params", params);
        setParamsData(params);
        const response = await fetch(`api/missions?pays=${params.ville || ""}`);
        const data = await response.json();
        console.log(data);
        setMissionsData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleRedirect = (id, photo) => {
    // Construire l'URL avec l'ID de la mission
    const url = `/missions/${id}?photo=${encodeURIComponent(photo)}`;
    // Rediriger vers la page de destination
    window.location.href = url;
  };

  return (
    <div>
      <div className="missions-container">
        <h2>
          Missions Visualz{" "}
          {paramsData.ville ? "à " + paramsData.ville : "dans toute la France"}
        </h2>
        <div className="cardss-container">
          {missionsData.length > 0 ? (
            missionsData.map((missions, index) => (
              <div key={missions.id_mission} className="card-talentss"   onClick={() => handleRedirect(missions.id_mission, arrayGenerique[index % arrayGenerique.length])}>
                <div className="image-petitFormat">
                  <img src={arrayGenerique[index % arrayGenerique.length]} />
                </div>
                <div className="infos">
                  <div className="coeur">
                    <h2 className="card-title">{missions.titre}</h2>
                    <FontAwesomeIcon className="icon" icon={faHeart} />
                  </div>
                  <p className="card-bio">{missions.objet}</p>
                  <p className="card-location">{missions.lieu}</p>
                  <p className="card-nom">
                    {missions.nom.toUpperCase() +
                      " " +
                      missions.prenom.toUpperCase()}
                  </p>
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

export default MissionsPage;