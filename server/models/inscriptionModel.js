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

Inscription.findOne = (email, callback) => {
  db.query('SELECT * FROM utilisateurs WHERE email = ?', [email], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    if (results.length === 0) {
      return callback(null, null); // No user found
    }
    return callback(null, results[0]);
  });
};

module.exports = Inscription;