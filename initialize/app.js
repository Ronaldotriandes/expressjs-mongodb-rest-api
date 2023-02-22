const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const fileUpload = require('express-fileupload');
const cors = require('cors')
require('express-async-errors');

// inisasi routes
const userRoute = require('../collections/user/api')
var app = express();
require('dotenv').config();

// inisiasi db
require('./mongodb')()

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use(cors())

app.use('/api/users', userRoute);

app.get('*', function(req, res){
    return res.status(404).json({
      code : 404,
      status: false,
      message,
  })
})

app.use(function (err, req, res, next) {
  let errors = []

  if(err){
    switch (err.name) {
      case 'ValidationError':
        Object.keys(err.errors).forEach((key) => {
          errors.push(err.errors[key].message)
        });
          return res.status(400).json({
            code : 400,
            status: false,
            message: err.name,
            errors
        })
        break;
      case 'NotFound':
        return  res.status(404).json({
          code : 404,
          status: false,
          message: err.message,
      })
      default:
        break;
    }
  }
  return  res.status(400).json({
    code : 400,
    status: false,
    message: err.message,
    errors: err
})
})

module.exports = app;
