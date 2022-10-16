const helper = require('./helper');

exports.getAllBusSchedule = async (req, res) => {
  try {
    return await helper.findByFilter(res, 'schedule', {});
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.getRedBusSchedule = async (req, res) => {
  try {
    return await helper.findByFilter(res, 'schedule', { line: 'red' });
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.getBlueBusSchedule = async (req, res) => {
  try {
    return await helper.findByFilter(res, 'schedule', { line: 'blue' });
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.createBusSchedule = async (req, res) => {
  try {
    const newRedBusSchedule = req.body;
    newRedBusSchedule.createdAt = Date.now();
    newRedBusSchedule.updatedAt = Date.now();

    return await helper.createItem(res, 'schedule', newRedBusSchedule);
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.updateBusSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = req.body;
    const previousItem = await helper.findItemById('schedule', id);

    updatedItem.createdAt = previousItem.createdAt;
    updatedItem.updatedAt = Date.now();
    
    return await helper.updateItem(res, 'schedule', previousItem, updatedItem);
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}

exports.deleteBusSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    return await helper.deleteItem(res, 'schedule', id);
  } catch (err) {
    console.log(err);
    res.set('Access-Control-Expose-Headers', 'x-access-token');
    res.status(err.statusCode).send(err.message);
  }
}
