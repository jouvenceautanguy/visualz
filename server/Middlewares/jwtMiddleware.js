const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

exports.verifyToken = (req, res, next) => {
  console.log('tutututututu')
  let token = req.headers["authorization"];
  if (token !== undefined) {
    jwt.verify(token, jwtKey, (error, payload) => {

      if (error) {

        console.log(error);
        res.status(403);
        res.json({ message: "Acces interdit : token manquant" });
      } else {
        next();
      }
    });
  } else {
    res.status(403);
    res.json({ message: "Acces interdit " });
  }
};