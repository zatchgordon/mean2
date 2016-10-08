var mongo = require("./mongo.controllers.js")

module.exports = {
    list: list,
    get: get
}

function list(req, res) {
    mongo.get(res, "heroes");
}

function get(req, res) {
    var heroId = +req.params.heroId;
    var params = {
        "id": heroId
    }

    mongo.get(res, "heroes", params);

}