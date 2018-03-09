var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Message = require('../models/message');
var User = require('../models/user');
// to fetch messages from database
router.get('/', function(req, res, next) {
    Message.find()
        .populate('user', 'firstName') // to expand the data I retrieve
    // by default it would only give me the message object
    // but now we have the reference to the user model in ../models/messages.js
        // now each message has user ID and firstName attached
        .exec(function(err, messages) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occurred!',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success!',
                obj: messages
            });
        });
});

// on each request, this method is reached
router.use('/', function(req, res, next) {
    // get() will not reach this method sinces it's before this method
    // check an incoming token
    // query parameter: after the ? in an url

    jwt.verify(req.query.token, 'secret', function(err, decoded) {         
        if(err) {
            return res.status(401).json({
                title: 'Not Authenticated!!!',
                error: err
            });
        }
        // travel on
        next();
    });
});

// to store messages on the server,
// use POST
router.post('/', function(req, res, next) {
    var decoded = jwt.decode(req.query.token); // does NOT validate token!!!
    User.findById(decoded.user._id, function (err, user) {
        // remember to import User model
        if (err) {
            return res.status(500).json({
                title: 'An error occurred!!!',
                error: err
            })
        }
        var message = new Message({
            content: req.body.content,
            user: user//._id // here the user object is already attached to the message
        });
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred. ',
                    error: err
                });
            }
            user.messages.push(result);
            user.save(); // save this upadted user
            // where we push the new message on the stack of messages
            return res.status(201).json({
                message: 'New message saved! ',
                obj: result
            });
        })
    })
});

router.patch('/:id',function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function(err, message) {
        if(err) {
            return res.status(500).json({
                title: 'An error occurred!',
                error: err
            });
        };
        if(!message) {
            return res.status(500).json({
                title: 'No message found!',
                error: {message: 'Message not found!'}
            });
        };
        if(message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not authenticated!!!',
                error: {message: 'User does not matach!!!'}
            })
        }
        message.content = req.body.content;
        message.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred!',
                    error: err
                });
            };
            
            return res.status(200).json({
                message: 'Message updated!',
                obj: result
            });
            
        })
    });
    
}); // change existing data

router.delete('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred!',
                error: err
            });
        };
        if (!message) {
            return res.status(500).json({
                title: 'No message found!',
                error: { message: 'Message not found!' }
            });
        };
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not authenticated!!!',
                error: { message: 'User does not matach!!!' }
            })
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred!',
                    error: err
                });
            };

            res.status(200).json({
                message: 'Message Deleted!',
                obj: result
            });

        })
    });
});

module.exports = router;