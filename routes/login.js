var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('firebaselogin', { title: 'Express' });
  console.log("testing if it ends");
  next();
});

module.exports = router;
