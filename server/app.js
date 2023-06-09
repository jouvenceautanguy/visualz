const express = require("express");
const dotenv = require("dotenv");
const db = require('./db');
const path = require('path')
const jwt = require("jsonwebtoken");
dotenv.config();

const hostname = "0.0.0.0";
const PORT = process.env.PORT || 5000;
const server = express();
const bodyParser = require('body-parser');
const session = require("express-session");


server.use(express.urlencoded({ extended: true }));// url encodé pour save les données encodé dans des fichiers json
server.use(express.json());



db.connect((err) => {
  if(err) {
      throw err;
  }
  console.log('connected to database');
});

const landingRoute = require("./routes/landingRoute");
landingRoute(server);

const searchBarRoute = require("./routes/searchBarRoute");
searchBarRoute(server);

const inscriptionRoute = require("./routes/inscriptionRoute");
inscriptionRoute(server);

const authRoute = require("./routes/authRoute");
authRoute(server);

const visualzRoute = require("./routes/visualzRoute");
visualzRoute(server);

const missionsRoute = require("./routes/missionsRoute");
missionsRoute(server);

// server.use(express.static('../client1/build'))
// server.get('/', (_,res) => {
//   res.sendFile(path.join(__dirname, '../client1/public/index.html'))
// })
server.use(express.static('../client1/build'));// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route

server.get('*', (req, res) => {
  console.log('toto')
  res.sendFile(path.resolve("..", 'client1', 'build', 'index.html'));
});


server.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port : ${PORT}`);
});