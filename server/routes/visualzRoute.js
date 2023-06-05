const visualzController = require('../controllers/visualzController');
const jwtMidlleware = require("../Middlewares/jwtMiddleware");
module.exports = (server) => {
    server.get('/visualz', visualzController.getVisualzs);
    server.post("/inscriptionVisualz", jwtMidlleware.verifyToken, visualzController.createVisualzs);
  };