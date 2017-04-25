var express = require('express');
var router = express.Router();
var firebase = require('firebase');

console.log("entering profile.js");
//console.log(user);


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('profile');
});

module.exports = router;
