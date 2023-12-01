const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller')
console.log('router loaded');

// GET request to homepage
router.get('/',homeController.home);

router.use('/users',require('./users'));

module.exports = router;
