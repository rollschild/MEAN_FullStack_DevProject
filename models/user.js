var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');
// var id = mongoose.Types.ObjectId;
var schema = new Schema({
    // _id: Schema.Types.ObjectId,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages:[{type: Schema.Types.ObjectId, ref: 'Message'}]
    // multiple messages
});

schema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('User', schema);
// var User = mongoose.model('User', schema);