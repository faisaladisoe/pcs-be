const dbo = require('../../db/conn');

const dbConnect = dbo.getDb();
const ObjectID = require('mongodb').ObjectId;

exports.createItem = async (res, collection, item) => {
  dbConnect
    .collection(collection)
    .insertOne(item, (err, result) => {
      if (err) {
        res.status(400).send("Error Inserting Item!");
      } else {
        console.log(`Added a new bus line item with id ${result.insertedId}`);
        res.status(201).send(result);
      }
    });
}

exports.findByFilter = async (res, collection, filter) => {
  return dbConnect
    .collection(collection)
    .find(filter, { sort: { 'license-plate-number': 1 } })
    .toArray((err, result) => {
      if (err) {
        res.status(400).send('Error Fetching Listings!');
      } else {
        res.status(202).json(result);
      }
    })
}

exports.findItemById = async (collection, id) => {
  return dbConnect
    .collection(collection)
    .findOne({ _id: ObjectID(id) });
}

exports.updateItem = async (res, collection, prev, item) => {
  dbConnect
    .collection(collection)
    .replaceOne(prev, item, (err, result) => {
      if (err) {
        res.status(400).send('Error Updating Item!');
      } else {
        console.log(`Updated ${result.modifiedCount} item(s)`);
        res.status(202).send(result);
      }
    });
}

exports.deleteItem = async (res, collection, id) => {
  dbConnect
    .collection(collection)
    .deleteOne({ _id: ObjectID(id) }, (err, result) => {
      if (err) {
        res.status(400).send('Error Deleting Item!');
      } else {
        console.log(`Successfully Deleted ${result.deletedCount} item(s)`);
        res.status(202).send(result);
      }
    });
}