var url = 'mongodb://localhost:27017/tourOfHeroes';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

module.exports = {
    get: get
}

function get (res, collection, params) {
    params = params || {};

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        console.log("Connected to Server");

        findDocuments(db, collection, params, function (returnArray) {
            res.status(200)
                .contentType('application/json')
                .send(JSON.stringify(returnArray));
            db.close();
        });
    });
}

var findDocuments = function (db, collectionName, findParams, callback) {
    // Get the documents collection
    var collection = db.collection(collectionName);
    // Find some documents
    collection.find(findParams).toArray(function (err, docs) {
        assert.equal(err, null);
        console.log("Found " + collectionName);
        callback(docs);
    });
}