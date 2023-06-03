const bcrypt = require('bcrypt');
const db = require('../db');

const Inscription = {};

Inscription.create = (nom, prenom, email, motDePasse, callback) => {
  bcrypt.hash(motDePasse, 10, (err, hashedPassword) => {
    if (err) {
      return callback(err, null);
    }

    db.query(
      'INSERT INTO utilisateurs (nom, prenom, email, mot_de_passe) VALUES (?, ?, ?, ?)',
      [nom, prenom, email, hashedPassword],
      (error, results) => {
        if (error) {
          return callback(error, null);
        }
        return callback(null, results);
      }
    );
  });
};

module.exports = Inscription;