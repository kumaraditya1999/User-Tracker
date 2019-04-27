const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
    type: String,
    timeStamp: Date,
    item: String,
});

var UserSchema = new Schema({
    id: String,
    activities: [ActivitySchema],
});

module.exports = mongoose.model('User', UserSchema);