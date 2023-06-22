const db = require("../db");
const missionsModel = {};


missionsModel.create = (titre, objet, duree, debut, lieu, etat, id_client, callback) => {
  db.query(
    'INSERT INTO missions (titre, objet, duree, debut, lieu, etat, id_client) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [titre, objet, duree, debut, lieu, etat, id_client],
    (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    }
  );
};

missionsModel.getMissions = (pays, callback) => {
  let query =
    "SELECT missions.*, utilisateurs.nom, utilisateurs.prenom FROM missions JOIN utilisateurs ON missions.id_client = utilisateurs.id_utilisateur";

  if (pays) {
    query += " WHERE missions.lieu = ?";
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

missionsModel.getMissionsById = (id, callback) => {
  let query = "SELECT missions.*, utilisateurs.nom, utilisateurs.prenom FROM missions JOIN utilisateurs ON missions.id_client = utilisateurs.id_utilisateur WHERE missions.id_mission = ?";
  if (id) {
    db.query(query, [id], (error, results) => {
      return callback(error, results);
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  } else {
    const error = new Error("L'id de la mission est manquant.");
    return callback(error, null);
}};

module.exports = missionsModel;
