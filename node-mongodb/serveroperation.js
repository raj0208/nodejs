var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
    
var dboper = require('./operations');
//connection url
var url = 'mongodb://localhost:27017/conFusion';
//use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(err, null);
    console.log("Connected successfully to the server");
    
    dboper.insertDocument(db, {name: "Donut", description: "Cookies"}, "dishes", 
        function(result) {
            console.log(result.ops);
            dboper.findDocuments(db, "dishes", function(docs) {
                console.log(docs);
                dboper.updateDocument(db, {name: "Donut"}, {description: "Chocolate cake"}, "dishes",
                function(result) {
                    console.log(result.result);
                    dboper.findDocuments(db, "dishes", function(docs) {
                        console.log(docs);
                        db.dropCollection("dishes", function(result) {
                            console.log(result);
                            db.close();
                        });
                    });
                });
            });                 
    });
});