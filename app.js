var express = require("express");
var app = express();

app.set("port", 3001)
var server = app.listen(app.get("port"), appStarted);

function appStarted(){
    var port = server.address().port;
    console.log("magic happens on port " + port);
}