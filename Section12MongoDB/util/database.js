const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db

const uri = `mongodb+srv://bkoychev95:yejVBQaBJnzKh6BD@clusterexpressshop.thwnayk.mongodb.net/shop?retryWrites=true&w=majority`;

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("Connected!");
      _db = client.db()
      callback()
    })
    .catch((err) => {
      console.log(err);
      throw err
    });
};

const getDb = () => {
  if (_db) {
    return _db
  }
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb

// const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

// const uri = `mongodb+srv://bkoychev95:${process.env.MongoDB_PASS}@clusterexpressshop.thwnayk.mongodb.net/?retryWrites=true&w=majority`;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);