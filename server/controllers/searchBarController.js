const Search = require('../models/searchBarModel');

const searchController = {};
searchController.getLieux = (req,res) => {
    Search.getLieux((error, results) => {
        if (error) {
          console.error('Error fetching lieux:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          const lieux = results.map(result => ({
            value: result.lieu,
            label: result.lieu
          }));
          res.json(lieux);
        }
      });
}

searchController.getDomaine = (req,res) => {
  Search.getDomaine((error,results) => {
    if (error) {
      console.error('Error fetching domaine:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const domaine = results;
      res.json(domaine);
    }
  })
}
module.exports = searchController;