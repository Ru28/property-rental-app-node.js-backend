const express = require('express');
const {addPropertyDetails} = require('../controllers/property');
const router= express.Router();

router.post('/addPropertyDetails',addPropertyDetails);

module.exports = router;
