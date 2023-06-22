const missionsModel = require('../models/missionsModel');
const jwt = require('jsonwebtoken');
const missionsController = {};

missionsController.createMission = (req, res) => {
  const { titre, objet, duree, debut, lieu, etat } = req.body;
  const id_visualz = "";
  const token = req.headers.authorization;
  const decodedToken = jwt.verify(token, process.env.JWT_KEY);
  const id_client = decodedToken.userId;
  console.log("Valeur de id_client :", id_client);

  missionsModel.create(
      titre,
      objet,
      duree,
      debut,
      lieu,
      etat,
      id_client,
      (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Erreur lors de la création de la mission' });
        }

        return res.status(201).json({ message: 'Mission créée avec succès' });
      }
    );
  };


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