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

  module.exports = missionsController;