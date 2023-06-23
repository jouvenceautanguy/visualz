const visualzController = require('../controllers/visualzController');
const jwtMidlleware = require("../Middlewares/jwtMiddleware");
module.exports = (server) => {
    server.get('/api/visualz', visualzController.getVisualzs);
    server.post("/api/inscriptionVisualz", jwtMidlleware.verifyToken, visualzController.createVisualzs);
  };