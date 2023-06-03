const authController = require('../controllers/authController');

module.exports = (server) => {
    server.post('/login', authController.login);
  };