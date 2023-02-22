const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'field name required!']
  },
  shortName: {
    type: String,
    required: [true, 'field Short name required!']
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'field Gender required!']
  },
  dafteOfBirth: {
    type: Date,
    required: [true, 'field date of birth required!']
  },
  createdAt:{
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  }
});


module.exports = mongoose.model('User', schema);
