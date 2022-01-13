const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://commonuser:forCommon@abdatlashackathon.m47fd.mongodb.net/city?retryWrites=true&w=majority";

const client = new MongoClient(uri);

client.connect(err =>{
  if(err) throw err;
})

module.exports = client;