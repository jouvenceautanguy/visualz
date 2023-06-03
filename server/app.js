const express = require("express");
require('dotenv').config();
const db = require('./db');
const path = require('path')

const hostname = "0.0.0.0";
const PORT = process.env.PORT || 5000;
const server = express();
const bodyParser = require('body-parser');
const session = require("express-session");

server.use(express.urlencoded({ extended: true }));// url encodé pour save les données encodé dans des fichiers json
server.use(express.json());

server.use(session({
  name: process.env.SESSION_NAME,
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET,
  cookie:{
    maxAge : 1000 * 60 * 60 * 24 * 7,   
  }
}))

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

// server.use(express.static('../client1/build'))
// server.get('/*', (_,res) => {
//   res.sendFile(path.join(__dirname, '../client1/public/index.html'))
// })

server.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port : ${PORT}`);
});