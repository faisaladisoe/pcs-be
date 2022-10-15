'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const checkInAndOut = require('./check-in-out/index');
router.use('/checkinout', checkInAndOut);

const busSchedule = require('./schedule/index');
router.use('/schedule', busSchedule);

const busTracking = require('./track/index');
router.use('/track', busTracking);

const user = require('./user/index');
router.use('/user', user);

module.exports = router;