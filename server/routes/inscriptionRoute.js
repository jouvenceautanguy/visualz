const inscriptionController = require('../controllers/inscriptionController');
const jwtMiddleware = require("../Middlewares/jwtMiddleware");

module.exports = (server) => {
  server.post('/inscription', inscriptionController.createUser);
};