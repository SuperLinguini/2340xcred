var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("asdf");
    res.render('registration');
});

module.exports = router;
