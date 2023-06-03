const bcrypt = require('bcrypt');
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

    // Générer un token de session et le stocker dans la session de l'utilisateur
    req.session.token = req.sessionID;
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.username = user.nom;

    return res.status(200).json({ message: 'Connexion réussie' });
  });
};

module.exports = authController;