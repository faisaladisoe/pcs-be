require('dotenv').config();

const { MongoClient, ServerApiVersion } = require("mongodb");
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

module.exports = {
  getDb: () => {
    return client.db('bikun-tracker');
  },
};