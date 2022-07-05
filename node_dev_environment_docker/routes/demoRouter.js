const express = require('express');
const demoController = require('../controllers/demoController');

const router = express.Router({ mergeParams: true });

router.route('/').get(demoController.getData);

module.exports = router;
