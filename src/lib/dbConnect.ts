const mongoose = require('mongoose');

export async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'E-comm'
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

// Call the function to establish the connection
connectToDatabase();
