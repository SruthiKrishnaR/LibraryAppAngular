const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PortfolioDB');

const Schema = mongoose.Schema;

var MyDataSchema = new Schema({
    name : String,
    profession : String,
    feedback : String
});

var Mydata = mongoose.model('data',MyDataSchema);

module.exports = Mydata;
