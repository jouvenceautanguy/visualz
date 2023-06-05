const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images') // où stocker les fichiers téléchargés
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()) // nommer le fichier
  }
});

const upload = multer({ storage: storage });