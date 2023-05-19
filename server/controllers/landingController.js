const Mailing = require('../models/landingModel');

const mailingController = {};

mailingController.createMail = (req, res) => {
  const email = req.body.email;
  console.log(email)
  Mailing.create(email, (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ message: 'Email ajouté avec succès' });
  });
};

mailingController.getMail = (req,res) => {
  console.log('yoo')
    res.send({
        msg:'hello'
    })
}
module.exports = mailingController;