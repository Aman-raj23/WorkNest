import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/worknest');
    console.log(`[MongoDB] Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB] Connection error: ${error.message}`);
    // Non-fatal fallback for development without local mongod
    console.warn('[MongoDB] Running in offline/disconnected database mode. Mock data fallback enabled.');
  }
};
