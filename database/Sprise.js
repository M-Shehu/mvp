const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const spriseSchema = new mongoose.Schema({
  userId: String,
  message1: String,
  message2: String,
  message3: String,
  lastMessage: String,
  surprises: [{
    surprise: String,
    time: Date
  }],
  phoneNumber: Number
}, 
{
  timestamps: true
}
);

const Sprise = mongoose.model('Sprises', spriseSchema);

module.exports = Sprise;
