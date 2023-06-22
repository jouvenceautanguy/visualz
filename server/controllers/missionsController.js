const missionsModel = require('../models/missionsModel');

const missionsController = {};

missionsController.getMissions = (req, res) => {
    const { pays } = req.query;
  
    missionsModel.getMissions(pays, (error, results) => {
      if (error) {
        // Gérer l'erreur de requête
        res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
      } else {
        // Renvoyer les résultats de la requête
        res.json(results);
      }
    });
  };

  missionsController.getMissionsById = (req, res) => {
    const id = req.params.id;
  
    missionsModel.getMissionsById(id, (error, results) => {
      if (error) {
        // Gérer l'erreur de requête
        res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
      } else {
        if (results.length === 0) {
          // Aucune mission trouvée avec cet ID
          res.status(404).json({ error: 'Aucune mission trouvée avec cet ID.' });
        } else {
          // Renvoyer la mission trouvée
          res.json(results[0]);
        }
      }
    });
  };

  module.exports = missionsController;