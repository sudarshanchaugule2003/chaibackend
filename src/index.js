import dotenv from 'dotenv';
dotenv.config({
  path:'./env'
});

import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/connectDB.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware and routes here

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

start();
connectDB()
.then()
.catch((err)=>{
  console.log("MONGO db connection failed !!!")

})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port: $
      {process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGO db connection failed !!!", err);
})