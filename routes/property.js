const express = require('express');
const {addPropertyDetails} = require('../controllers/property');
const multer = require('multer');
const router= express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Set the destination folder for uploaded images
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`); // Create a unique filename
    },
  });
const upload = multer({ storage: storage });

router.post('/addPropertyDetails',upload.single('image'),addPropertyDetails);

module.exports = router;
