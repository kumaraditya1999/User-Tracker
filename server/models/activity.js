const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
    type: String,
    timeStamp: Date,
    item: String,
});

module.exports = mongoose.model('Activity', ActivitySchema);