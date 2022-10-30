const dbo = require('../../db/conn');

const dbConnect = dbo.getDb();
const ObjectID = require('mongodb').ObjectId;

exports.findByFilter = async (res, collection, filter) => {
  return dbConnect
    .collection(collection)
    .find(filter, { sort: { 'license-plate-number': 1 }})
    .toArray((err, result) => {
      if (err) {
        res.status(400).send('Error Fetching Listings!');
      } else {
        res.status(202).json(result);
      }
    });
}

exports.changeStatus = async (res, collection, filter, status) => {
  return dbConnect
    .collection(collection)
    .updateOne(filter, {
      $set: { 'status': status },
      $currentDate: { updatedAt: true }
    }, (err, result) => {
      if (err) {
        res.status(400).send('Error Changing Status of Item!');
      } else {
        console.log(`Updated ${result.modifiedCount} item(s)`);
        res.status(202).send(result);
      }
    });
}

exports.updatePassengerNum = async (res, collection, filter, num) => {
  return dbConnect
    .collection(collection)
    .updateOne(filter, {
      $inc: { 'passenger-num': num },
      $currentDate: { updatedAt: true }
    }, (err, result) => {
      if (err) {
        res.status(400).send('Error Changing Status of Item!');
      } else {
        console.log(`Updated ${result.modifiedCount} item(s)`);
        res.status(202).send(result);
      }
    });
}