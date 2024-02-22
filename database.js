const mongoose = require('mongoose');
require('dotenv').config()  

const startDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://kiruthik:kiruthikktm@cluster0.sfoxrec.mongodb.net/Cluster()?retryWrites=true&w=majority');
    console.log('connected to MongoDB');
  } catch (err) {
    console.error('error connecting to MongoDB:', err.message);
  }
};

const stopDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log(' disconnected from MongoDB');
  } catch (err) {
    console.error('error disconnecting from MongoDB:', err.message);
  }
};

const isConnected = () => {
  return mongoose.connection.readyState === 1;
}

module.exports = { startDatabase, stopDatabase, isConnected };
