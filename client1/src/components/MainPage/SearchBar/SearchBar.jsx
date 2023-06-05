
import './SearchBar.css'
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function SearchBar() {

  const [options, setOptions] = useState([]);
  const [choix, setChoix] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [villeValue, setVilleValue] = useState('');
  const [categorieValue, setCategorieValue] = useState('');
  
  
  useEffect(() => {
    fetch('/pays') // Remplacez "/pays" avec l'URL correcte pour la route de récupération des options
      .then(response => response.json())
      .then(data => {
        setOptions(data);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }, []);


  const handleChoixChange = (e) => {
    setChoix(e.target.value);
  };

  const handleSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
    setVilleValue(selectedOption?.value);
  };
  const handleCategorieChange = (e) => {
    setCategorieValue(e.target.value); // Mettre à jour la valeur de categorieValue
  };
  
  
  const handleRechercher = () => {
    // Construire l'URL avec les valeurs sélectionnées
    const url = `/visualz?ville=${villeValue}&categorie=${categorieValue}`;
    // Rediriger vers la page de destination
    window.location.href = url;
  };

  return (
    <div className='searchBar'>
      <h3>TROUVEZ LES TALENTS DE L'AUDIOVISUEL POUR TOUT VOS PROJETS</h3>
      
        <div className='choix'>
          <label>
            <input
              type="radio"
              name="choix"
              value="Visualz"
              checked={choix === 'Visualz'}
              onChange={handleChoixChange}
            />
            Visualz
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="choix"
              value="Missions"
              checked={choix === 'Missions'}
              onChange={handleChoixChange}
            />
            Missions
          </label>
        </div>
        <div className='group'>
        <select name="categories" id="cat-select"   value={categorieValue}
          onChange={handleCategorieChange}>
            <option value="">Catégories</option>
          <optgroup label="Animation/Graphic Design">
            <option value="Drone">Drone opérateur</option>
            <option value="Animateur">Animateur 2D/3D</option>
            <option value="Graphiste">Graphiste</option>
          </optgroup>
          <optgroup label="Lightning">
            <option value="Chef-operateur">Chef opérateur</option>
          </optgroup>
          <optgroup label="Audio production/Sound Mixers">
            <option value="Ingenieur-son">Ingénieur son</option>
            <option value="Sound-designer">Sound designer</option>
          </optgroup>
          <optgroup label="Video/Photographers">
            <option value="Drone">Drone opérateur</option>
            <option value="Photographe">Photographe</option>
            <option value="Monteur">Monteur</option>
            <option value="Cadreur">Cadreur</option>
          </optgroup>
          <option value="">Catégories</option>
          <optgroup label="Production">
            <option value="Realisateur">Réalisateur</option>
          </optgroup>
          <optgroup label="Talent/Casting">
            <option value="Acteur">Acteur</option>
          </optgroup>

        </select>
        <div className='searchBarVille'>
          <Select
            value={selectedOption}
            options={options}
            onChange={handleSelect}
            isSearchable
            placeholder="Recherchez une ville"
       
          />
        </div>

      </div>
      <button className='rechercher' onClick={handleRechercher}>
        RECHERCHER
      </button>
    </div>
  )
}

export default SearchBar