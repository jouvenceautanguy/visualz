import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./missionsById.css";

function MissionsById() {
  const [missionsData, setMissionsData] = useState([]);
  const [paramsData, setParamsData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = id;
        console.log("params", params);
        setParamsData(params);

        const response = await fetch(`/missions/${params}`);
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
    <div className="bodyMissionPage">
    <div className="main-container">
      <div className="image-grosFormat">
         {/* <img src=""></img> */}
        </div>
        <div className="titreLike">
          <h2>RECHERCHE CADREUR POUR COURT METRAGE</h2>
          {/* <img src=""></img> */}
        </div>
        <div className="datePubli">
          <p> Aujourd'hui 12h30</p>
        </div>
        <div className="infos1">
          <div className="besoin">
            <h3>Besoin</h3>
            <p>Monteur</p>
          </div>
          <div className="lieu">
            <h3>Lieu</h3>
            <p>Paris</p>
          </div>
          </div>
          <div className="infos2">
            <h3>Date</h3>
            <p>12/05/2023</p>
          </div>
          <div className="infos3">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsa alias maxime beatae! Perspiciatis aspernatur itaque enim
              culpa labore repudiandae fugit alias praesentium sunt. Ad labore
              beatae numquam totam debitis?
            </p>
            <div className="button-grosseAnnonce">
            <button>Contacter</button>
            </div>
          </div>
        </div>
        </div>
  );
}

export default MissionsById;
