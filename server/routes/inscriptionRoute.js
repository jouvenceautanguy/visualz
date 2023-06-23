const inscriptionController = require('../controllers/inscriptionController');
const jwtMiddleware = require("../Middlewares/jwtMiddleware");

module.exports = (server) => {
  server.post('/api/inscription', inscriptionController.createUser);
};