const inscriptionController = require('../controllers/inscriptionController');

module.exports = (server) => {
  server.post('/inscription', inscriptionController.createUser);
};