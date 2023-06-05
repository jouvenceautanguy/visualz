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

visualzController.createVisualzs = (req, res) => {
  const { bio, domaine, location, profilImage } = req.body;
  const id_utilisateur = req.user.userId; // Récupérer l'ID de l'utilisateur connecté à partir du token d'authentification

  visualzModel.create(id_utilisateur, bio, domaine, location, profilImage, (error, visualzId) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de la création de la visualz' });
    }
    return res.status(200).json({ message: 'Visualz créée avec succès', visualzId });
  });
};

module.exports = visualzController;