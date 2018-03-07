var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
router.post('/', function(req, res, next) {
    var user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10), // NOT encrypted!!!
        // second arg is salting/strength
        // one-way encryption
        firstName: req.body.firstName, // assuming I get the data
        lastName: req.body.lastName
    });
    user.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title: 'An error occurred you dumb ass!!!',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created!!!',
            obj: result
        });
    });
});

router.post('/signin', function(req, res, next) {
    // need to compare
    User.findOne({email: req.body.email}, function(err, user) {
        if(err) {
            return res.status(500).json({
                title: 'An error occurred!!!',
                error: err
            });
        }
        if(!user) {
            return res.status(401).json({
                // 401: unauthorized
                title: 'Login failed!!!',
                error: {message: 'Invalid login credentials!!!'}
            });
        }
        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed!!!',
                error: {message: 'Invalid login credentials!!!'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in!!!',
            title: 'Success!',
            token: token,
            userId: user._id
        })
    }); // find all fitting entries but only returns the first one
    // since email is unique, this method is fine.

})

module.exports = router;