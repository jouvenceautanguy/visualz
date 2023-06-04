const express = require("express");
const dotenv = require("dotenv");
const db = require('./db');
const path = require('path')
const jwt = require("jsonwebtoken");

const hostname = "0.0.0.0";
const PORT = process.env.PORT || 5000;
const server = express();
const bodyParser = require('body-parser');
const session = require("express-session");

dotenv.config();

server.use(express.urlencoded({ extended: true }));// url encodé pour save les données encodé dans des fichiers json
server.use(express.json());



db.connect((err) => {
  if(err) {
      throw err;
  }
  console.log('connected to database');
});

// Middleware de vérification du token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

const landingRoute = require("./routes/landingRoute");
landingRoute(server);

const searchBarRoute = require("./routes/searchBarRoute");
searchBarRoute(server);

const inscriptionRoute = require("./routes/inscriptionRoute");
inscriptionRoute(server);

const authRoute = require("./routes/authRoute");
authRoute(server);

// server.use(express.static('../client1/build'))
// server.get('/*', (_,res) => {
//   res.sendFile(path.join(__dirname, '../client1/public/index.html'))
// })

server.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port : ${PORT}`);
});