const db = require('../db');


exports.getLieux = (callback) => {
    const query = 'SELECT lieu FROM missions';
    db.query(query, callback);
  };

exports.getDomaine = (callback) => {
  const query = 'SELECT domaine, COUNT(*) AS total FROM visualzs GROUP BY domaine ORDER BY total DESC LIMIT 4';
  db.query(query, callback);
}