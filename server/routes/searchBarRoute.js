const searchController = require('../controllers/searchBarController');

module.exports = (server) => {
  server.get('/api/pays', searchController.getLieux);
  server.get('/api/domaine',searchController.getDomaine);
};