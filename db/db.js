const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI).then((data)=>
        console.log(`MongoDB connected with: ${data.connection.host}`))
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1); 
    }
  };
  
  module.exports = connectDB;