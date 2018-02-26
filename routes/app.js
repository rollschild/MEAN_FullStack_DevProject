var express = require('express');
var router = express.Router();
// var User = require('../models/user');
router.get('/', function (req, res, next) {
    // front-end warning:
    // will ONLY thow one view through Angular
    // single-page application
    res.render('index');
    /*
    // this is for data operations in mongoDB
    // fetch directly on the model
    User.findOne({}, function(err, doc) {
        if(err) {
            return res.send('Error!');
        }
        res.render('node', {email: doc.email}); // node.hbs
    }); // give us the first one
    */
});

/*
router.get('/message', function(req, res, next) {
    // :msg can be variable data
    res.render('node');
});
*/
/*
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Jovi',
        lastName: 'Shi',
        password: 'password_jovi',
        email: email
    });
    user.save(); // tell mongoose to store the user object to user collection in the database
    res.redirect('/');
    
    // res.redirect('/message/' + message);
    
});
*/

module.exports = router;
