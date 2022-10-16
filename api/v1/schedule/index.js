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
router.post('/red-line', controller.createBusSchedule);
router.post('/blue-line', controller.createBusSchedule);
router.put('/red-line/:id', controller.updateBusSchedule);
router.put('/blue-line/:id', controller.updateBusSchedule);
router.delete('/red-line/:id', controller.deleteBusSchedule);
router.delete('/blue-line/:id', controller.deleteBusSchedule);

module.exports = router;
