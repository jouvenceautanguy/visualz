const missionsController = require('../controllers/missionsController');
const jwtMidlleware = require("../Middlewares/jwtMiddleware");
module.exports = (server) => {
    server.get('/api/missions', missionsController.getMissions);
    // server.post("/createMission", jwtMidlleware.verifyToken, missionsController.createMission);
    // server.get('/missions/:id', jwtMidlleware.verifyToken, missionsController.getMissionsById);
    server.get('/api/missions/:id', missionsController.getMissionsById);
    server.post('/api/missions', jwtMidlleware.verifyToken ,missionsController.createMission);
  };