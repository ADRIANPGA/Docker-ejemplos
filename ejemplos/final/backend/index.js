const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB connection URI
const mongoURI = 'mongodb://mongodb:27017/sample_db';

// MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('Connected to MongoDB');

// Define a schema and model for the data
const dataSchema = new mongoose.Schema({
  id: Number,
  name: String,
  value: Number,
}, { collection: 'random_collection' });

const Data = mongoose.model('Data', dataSchema);

// Endpoint to fetch data from MongoDB
app.get('/api/data', async (req, res) => {
  console.log('Fetching data from MongoDB');
  try {
    const data = await Data.find({});
    console.log('Data fetched successfully');
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
