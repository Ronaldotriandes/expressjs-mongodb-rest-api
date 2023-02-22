const mongoose = require('mongoose');
const url = process.env.MONGOURL

module.exports = () => {
  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    keepAlive: true,
  });
  
  mongoose.connection.on('error', () => {
    console.log('Could not connect to MongoDB.');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Lost MongoDB connection.');
  });

  mongoose.connection.on('connected', () => {
    console.log('Connected to mongodb.');
  });

  mongoose.connection.on('reconnected', () => {
    console.log('Reconnected to MongoDB.');
  });
};
