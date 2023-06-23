const mailingController = require('../controllers/landingController');

module.exports = (server) => {
  server.post('/api/mailing', mailingController.createMail);
  
  server.get('/api/mailing', mailingController.getMail);
};