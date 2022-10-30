const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/:bus_plate', controller.getPassengersNum);
router.patch('/activate/:bus_plate', controller.changeBusStatusAct);
router.patch('/deactivate/:bus_plate', controller.changeBusStatusDeact);
router.patch('/:bus_plate', controller.incPassenger);
router.patch('/:bus_plate', controller.decPassenger);

module.exports = router;
