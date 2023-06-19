const db = require('../db');
const missionsModel = {};

missionsModel.getMissions = (pays, callback) => {
    let query = 'SELECT missions.*, utilisateurs.nom, utilisateurs.prenom FROM missions JOIN utilisateurs ON missions.id_client = utilisateurs.id_utilisateur';
  
    if (pays) {
      query += ' WHERE missions.lieu = ?';
      db.query(query, [pays], (error, results) => {
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

  module.exports = missionsModel;