import mongoose from 'mongoose';

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,  // Optional: can be omitted if using MongoDB 4.0+
      useUnifiedTopology: true,  // Optional: can be omitted if using MongoDB 4.0+
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectDB;
