const mailingController = require('../controllers/landingController');

module.exports = (server) => {
  server.post('/mailing', mailingController.createMail);
  server.get('/mailing', mailingController.getMail);
};