const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router({ mergeParams: true });

router.route('/createuser').post(userController.createuser);

module.exports = router;
