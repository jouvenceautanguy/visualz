const missionsController = require('../controllers/missionsController');
const jwtMidlleware = require("../Middlewares/jwtMiddleware");
module.exports = (server) => {
    server.get('/missions', missionsController.getMissions);
    // server.post("/createMission", jwtMidlleware.verifyToken, missionsController.createMission);
    // server.get('/missions/:id', jwtMidlleware.verifyToken, missionsController.getMissionsById);
    server.get('/missions/:id', missionsController.getMissionsById);
  };