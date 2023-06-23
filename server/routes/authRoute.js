const authController = require('../controllers/authController');
const jwtMidlleware = require("../Middlewares/jwtMiddleware");
module.exports = (server) => {
    server.post('/api/connexion', authController.login);
  };
