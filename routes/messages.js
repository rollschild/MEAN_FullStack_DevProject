var express = require('express');
var router = express.Router();

var Message = require('../models/message');

// to fetch messages from database
router.get('/', function(req, res, next) {
    Message.find()
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


// to store messages on the server,
// use POST
router.post('/', function(req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if(err) {
            return res.status(500).json({
                title: 'An error occurred. ',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved. ',
            obj: result
        });
    });
});

module.exports = router;