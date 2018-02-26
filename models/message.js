var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Schema is a blueprint
var schema = new Schema({
    // _id: Schema.Types.ObjectId,
    content: {type: String, required: true},
    // required: cannot be empty;

    // each object automatically has an ID, eventhough we don't set up one
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// to instantiate
// new Message()
module.exports = mongoose.model('Message', schema);
// var Message = mongoose.model('Message', schema);