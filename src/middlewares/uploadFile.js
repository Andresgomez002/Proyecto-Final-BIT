const express = require('express');
const multer = require('multer');
const app = express();

// const PATH_STORAGE = `${ process.cwd() }/imageUpload`;


// Configura el almacenamiento de las imágenes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, '/imageUpload');
  },
  filename: function (req, file, cb) {
    // Define un nombre único para cada imagen
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Filtrar los archivos para aceptar solo imágenes
const fileFilter = function (req, file, cb) {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten imágenes JPEG, PNG y GIF.'), false);
  }
};

// Configura multer con las opciones definidas
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
module.exports = upload;

// // Ruta para manejar la subida de las imágenes
// app.post('/subir', upload.array('imagenes', 5), (req, res) => {
//   // Aquí puedes manejar las imágenes subidas
//   console.log(req.files); // Array con información de las imágenes subidas
//   res.send('Imágenes subidas con éxito.');
// });


