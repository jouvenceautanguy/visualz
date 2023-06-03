const bcrypt = require('bcrypt');
const db = require('../db');

const authModel = {};

authModel.getUserByEmail = (email, callback) => {
  db.query('SELECT * FROM utilisateurs WHERE email = ?', [email], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results[0]);
  });
};

module.exports = authModel;