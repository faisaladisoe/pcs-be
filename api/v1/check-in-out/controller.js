const helper = require('./helper');

exports.getPassengersNum = async (req, res) => {
  try {
    const { bus_plate } = req.params;
    return await helper.findByFilter(res, 'schedule', { 'license-plate-number': bus_plate });
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.changeBusStatusAct = async (req, res) => {
  try {
    const { bus_plate } = req.params;
    return await helper.changeStatus(res, 'schedule', { 'license-plate-number': bus_plate }, 'active');
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.changeBusStatusDeact = async (req, res) => {
  try {
    const { bus_plate } = req.params;
    return await helper.changeStatus(res, 'schedule', { 'license-plate-number': bus_plate }, 'deactive');
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.incPassenger = async (req, res) => {
  try {
    const { bus_plate } = req.params;
    return await helper.updatePassengerNum(res, 'schedule', { 'license-plate-number': bus_plate }, 1);
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  } 
}

exports.decPassenger = async (req, res) => {
  try {
    const { bus_plate } = req.params;
    return await helper.updatePassengerNum(res, 'schedule', { 'license-plate-number': bus_plate }, -1);
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}
