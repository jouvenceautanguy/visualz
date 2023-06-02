const searchController = require('../controllers/searchBarController');

module.exports = (server) => {
  server.get('/pays', searchController.getLieux);
  server.get('/domaine',searchController.getDomaine);
};