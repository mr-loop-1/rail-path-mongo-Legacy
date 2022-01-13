const {MongoClient} = require('mongodb');

const uri = "mongodb+srv://commonuser:forCommon@abdatlashackathon.m47fd.mongodb.net/city?retryWrites=true&w=majority";

const client = new MongoClient(uri);

client.connect(err =>{
  if(err) throw err;
/*
  let db = client.db('metro4');

  db.collection('Station').find().toArray(function(err, result){
    if(err) throw err;
    console.log(result);
  });

  db.collection('Station').findOne({'_id':4},function(err, a) {
    if (err) {
      console.log(err);
    } else if (a) {
      console.log(a.Name);
    } else {
      console.log('No a\n');
    } 
  });
      */  
  
})

module.exports = client;