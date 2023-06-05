const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authModel = require('../models/authModel');

const authController = {};

authController.login = (req, res) => {
  const { email, motDePasse } = req.body;

  // Vérifier les informations d'identification de l'utilisateur dans la base de données
  authModel.getUserByEmail(email, (error, user) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erreur lors de la connexion' });
    }

    // Vérifier si l'utilisateur existe et si le mot de passe correspond
    if (!user || !bcrypt.compareSync(motDePasse, user.mot_de_passe)) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }

    // Générer le token JWT
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_KEY,
      { expiresIn: '24h' }
    );

    return res.status(200).json({ message: 'Connexion réussie', accessToken });
  });
};

module.exports = authController;