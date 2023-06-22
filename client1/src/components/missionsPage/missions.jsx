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

function MissionsPage() {
  const [missionsData, setMissionsData] = useState([]);
  const [paramsData, setParamsData] = useState({});
  const arrayGenerique = [Generique1,Generique2,Generique3,Generique4,Generique5,Generique6,Generique7,Generique8]
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        console.log("params", params);
        setParamsData(params);
        const response = await fetch(`/missions?pays=${params.pays || ""}`);
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
      <div className="missions-container">
        <h2>
          Missions Visualz{" "}
          {paramsData.pays ? "à " + paramsData.pays : "dans toute la France"}
        </h2>
        <div className="cards-container">
          {missionsData.length > 0 ? (
            missionsData.map((missions) => (
              <div key={missions.id_mission} className="card-talents">
                <div className="image-petitFormat">
                <img src={arrayGenerique[0]} />
                  </div>
                <div className="infos">
                  <h2 className="card-title">{missions.titre}</h2>
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
