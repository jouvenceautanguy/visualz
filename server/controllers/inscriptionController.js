const jwt = require("jsonwebtoken");
const Inscription = require('../models/inscriptionModel');

const inscriptionController = {};

inscriptionController.createUser = (req, res) => {
  const { nom, prenom, email, motDePasse } = req.body;

  // Vérifier si l'utilisateur existe déjà dans la base de données
  Inscription.findOne(email, (error, existingUser) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de la recherche de l\'utilisateur' });
    }

    if (existingUser) {
      return res.status(409).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Créer un nouvel utilisateur
    Inscription.create(nom, prenom, email, motDePasse, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erreur lors de la création de l\'inscription' });
      }

      // Générer le token JWT
      const accessToken = jwt.sign(
        { userId: result._id },
        process.env.JWT_KEY,
        { expiresIn: '24h' }
      );

      return res.status(201).json({ message: 'Inscription réussie', accessToken });
    });
  });
};

module.exports = inscriptionController;