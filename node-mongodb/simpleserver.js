var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
 
 //connection url   
var url = 'mongodb://localhost:27017/conFusion';

// use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
   assert.equal(err,null);
   console.log("Connected correctly to server");
   
   var collection = db.collection("dishes");
   
   collection.insertOne({name: "Pizza", description: "Veggie Pizza"},
        function(err, result) {
            assert.equal(err, null);
            console.log("After insert:");
            console.log(result.ops);
            
            collection.find({}).toArray(function(err, docs) {
               assert.equal(err,null);
               console.log("Found:");
               console.log(docs); 
               //db.close();
               ///*
               db.dropCollection("dishes", function(err, result) {
                   assert.equal(err, null);
                   db.close();
               });
               //*/
            });
        });
});