const db = require('../db');
const visualzModel = {};

visualzModel.getVisualzs = (pays, domaine, callback) => {
  let query = 'SELECT visualzs.*, utilisateurs.nom, utilisateurs.prenom FROM visualzs JOIN utilisateurs ON visualzs.id_utilisateur = utilisateurs.id_utilisateur';

  if (pays && domaine) {
    query += ' WHERE visualzs.location = ? AND visualzs.domaine = ?';
    db.query(query, [pays, domaine], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  } else if (pays) {
    query += ' WHERE visualzs.location = ?';
    db.query(query, [pays], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  } else if (domaine) {
    query += ' WHERE visualzs.domaine = ?';
    db.query(query, [domaine], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  } else {
    db.query(query, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  }
};

visualzModel.create = (id_utilisateur, bio, domaine, location, profilImage, callback) => {
  const sql = 'INSERT INTO visualzs (id_utilisateur, bio, domaine, location, profilImage) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [id_utilisateur, bio, domaine, location, profilImage], (error, results) => {
    if (error) {
      return callback(error);
    }
    callback(null, results.insertId); // Retourne l'ID de la visualz créée
  });
};

module.exports = visualzModel;