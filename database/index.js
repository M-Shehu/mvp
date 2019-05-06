const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/sprises';

mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

module.exports = db;