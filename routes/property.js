const express = require('express');
const {addPropertyDetails} = require('../controllers/property');
const multer = require('multer');
const router= express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/addPropertyDetails',upload.single('image'),addPropertyDetails);

module.exports = router;
