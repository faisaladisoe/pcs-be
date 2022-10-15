const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

module.exports = router;
