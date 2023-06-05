const visualzModel = require('../models/visualzModel');

const visualzController = {};

// Méthode pour récupérer les données en fonction des paramètres pays et domaine
visualzController.getVisualzs = (req, res) => {
  const { pays, domaine } = req.query;

  visualzModel.getVisualzs(pays, domaine, (error, results) => {
    if (error) {
      // Gérer l'erreur de requête
      res.status(500).json({ error: 'Erreur lors de la récupération des données.' });
    } else {
      // Renvoyer les résultats de la requête
      res.json(results);
    }
  });
};

module.exports = visualzController;