const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const instaSpriseSchema = new mongoose.Schema({
  instaSprise: String,
  tag: String,
  date: String,
}, 
{
  timestamps: true
}
);

const InstaSprise = mongoose.model('InstaSprises', instaSpriseSchema);

module.exports = InstaSprise;
