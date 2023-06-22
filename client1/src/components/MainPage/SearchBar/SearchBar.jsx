
import './SearchBar.css'
import React, { useState, useEffect } from 'react';
import Select from 'react-select';

function SearchBar() {

  const [options, setOptions] = useState([]);
  const [choix, setChoix] = useState('Visualz');
  const [selectedOption, setSelectedOption] = useState(null);
  const [villeValue, setVilleValue] = useState('');
  const [categorieValue, setCategorieValue] = useState('');
  
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor:'#F5F5F5',
      border:"none", // Remplacez "red" par la couleur de fond souhaitée
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '9F9F9F', // Remplacez "white" par la couleur du texte de placeholder souhaitée
      // Remplacez "blue" par la couleur de fond souhaitée pour le texte de placeholder
    }),
  };
  
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
    let url = '';
  
    if (choix === 'Visualz') {
      url = `/visualz?ville=${villeValue}&categorie=${categorieValue}`;
    } else if (choix === 'Missions') {
      url = `/missions?ville=${villeValue}`;
    }
  
    // Rediriger vers la page de destination si une URL est définie
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className='searchBar'>
      <h3>TROUVEZ LES TALENTS DE L'AUDIOVISUEL POUR TOUT VOS PROJETS</h3>
      <div className='card'>
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
  {choix !== 'Missions' && (
    <select name="categories" id="cat-select" value={categorieValue} onChange={handleCategorieChange}>
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
      <optgroup label="Production">
        <option value="Realisateur">Réalisateur</option>
      </optgroup>
      <optgroup label="Talent/Casting">
        <option value="Acteur">Acteur</option>
      </optgroup>
    </select>
  )}
  <div className='searchBarVille'>
    <Select
      value={selectedOption}
      options={options}
      onChange={handleSelect}
      id="ville-select"
      isSearchable
      placeholder="Recherchez une ville"
      styles={customStyles}
    />
  </div>
</div>
      <div className='rechercher'>
      <button className='rechercher' onClick={handleRechercher}>
        RECHERCHER
      </button>
      </div>
      </div>
    </div>
  )
}

export default SearchBar