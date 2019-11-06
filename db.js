const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://localhost/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  global.mongodb = client.db("travele")
  console.log("conectado na base")
});