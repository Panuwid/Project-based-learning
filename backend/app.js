const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pbl_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api/example', exampleRoutes);

// Start the server
app.listen(5000, () => {
  console.log('Backend server is running on port 5000');
});
