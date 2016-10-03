var express = require("express");
var router = express.Router();
var controllers = require("../controllers/")
router
    .route('/heroes')
    .get(controllers.heroes.list);
router
    .route('/heroes/:heroId')
    .get(controllers.heroes.get);
module.exports = router;