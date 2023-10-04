// const { MongoClient, ServerApiVersion } = require('mongodb');
// require('dotenv').config();

// const uri = `mongodb+srv://bkoychev95:${process.env.MongoDB_PASS}@clusterexpressshop.thwnayk.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://bkoychev95:yejVBQaBJnzKh6BD@clusterexpressshop.thwnayk.mongodb.net/?retryWrites=true&w=majority`;

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

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      callback(client)
      console.log("Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect
