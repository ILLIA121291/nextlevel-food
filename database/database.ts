import mongoose from 'mongoose';

let isConnected: any = false; // Global variable for tracking connection to data base

const connectToDatabase = async () => {
  
  // This action prevents repeated connections to the database if the connection is already established;
  if (isConnected) {
    console.log('Uses an existing connection to MongoDB');
    return;
  }

  try {
    // First connection to the database;
    console.log('Connecting to database...');

    const db = await mongoose.connect(process.env.MONGODB_URI!);
    isConnected = db.connections[0].readyState;

    console.log('Connection to MongoDB successful');

  } catch (error) {
    
    // Actions if connection to the database is not successful;
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to the database');

  }
};

export default connectToDatabase;
