var express = require('express');
var router = express.Router()

var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyDuupet_EdHPJzoXXOVVUW-ysZh2AJ1lhk",
    authDomain: "cs2340-fd203.firebaseapp.com",
    databaseURL: "https://cs2340-fd203.firebaseio.com",
    projectId: "cs2340-fd203",
    storageBucket: "cs2340-fd203.appspot.com",
    messagingSenderId: "704772592041"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

router.post('/', function(req, res, next) {
    var namev = (req.body.name == '');
    var emailv = (req.body.email == '');
    var addressv = (req.body.address == '');
    var uidv = (req.body.uid == '');
    var usertypev = (req.body.user_type == undefined);
    if (!namev && !emailv && !addressv && !uidv && !usertypev) {
        var name = req.body.name;
        var email = req.body.email;
        var address = req.body.address;
        var uid = req.body.uid;
        var user_type = req.body.user_type;
        firebase.database().ref('users/' + uid).set({
            name:name,
            email:email,
            address:address,
            user_type:user_type
        })
        // res.send(name + email + address + user_type);
        res.render('newhomepage');
    } else {
        res.render('registration');
    }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('registration');
});

module.exports = router;
