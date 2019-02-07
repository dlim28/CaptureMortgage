const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  username: String,
  password: String
});

module.exports = mongoose.model('users', userSchema);

