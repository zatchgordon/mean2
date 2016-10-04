var express = require("express");
var app = express();
var routes = require("./server/routes")

app.set("port", 3001);

app.use(function (req, res, next) {

    console.log(req.method, req.url);
    var allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use("/api", routes);
// Add headers
var server = app.listen(app.get("port"), appStarted);
function appStarted() {
    var port = server.address().port;
    console.log("magic happens on port " + port);
}