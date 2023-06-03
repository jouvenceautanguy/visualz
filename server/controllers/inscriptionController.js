const Inscription = require('../models/inscriptionModel');


const inscriptionController = {};

inscriptionController.createUser = (req, res) => {
    const { nom, prenom, email, motDePasse } = req.body;
    Inscription.create(nom, prenom, email, motDePasse, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erreur lors de la création de l\'inscription' });
      }
      return res.status(201).json({ message: 'Inscription réussie' });
    });
  };

module.exports = inscriptionController;