'use strict';

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  category: { type: String, default: 'general', required: true },
  text: { type: String, required: true },
});

module.exports = mongoose.model('notes', notes);

// mongod --dbpath=/Users/path/to/data/db

// https://cloud.mongodb.com/freemonitoring/cluster/6ZRHHV4QANK2OGNTNFKWXCNEFVTLCSJA",
