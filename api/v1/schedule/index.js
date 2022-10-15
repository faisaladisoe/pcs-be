'use strict';

const express = require('express');
const controller = require('./controller');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', controller.getAllBusSchedule);
router.get('/red-line', controller.getRedBusSchedule);
router.get('/blue-line', controller.getBlueBusSchedule);
router.post('/red-line', controller.createRedBusSchedule);
router.post('/blue-line', controller.createBlueBusSchedule);
router.put('/red-line/:licensePlate', controller.updateRedBusSchedule);
router.put('/blue-line/:licensePlate', controller.updateBlueBusSchedule);
router.delete('/red-line/:licensePlate', controller.deleteRedBusSchedule);
router.delete('/blue-line/:licensePlate', controller.deleteBlueBusSchedule);

module.exports = router;