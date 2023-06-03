const db = require('../db');

const Mailing = {};

Mailing.create = (email, callback) => {
  db.query('INSERT INTO mailing (email) VALUES (?)', [email], callback);
};

module.exports = Mailing;
