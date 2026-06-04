const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const recommendationRoutes = require('./src/routes/recommendationRoutes');

// Mount Routes
app.use('/api/recommendations', recommendationRoutes);

app.get('/', (req, res) => {
  res.send('PawIntel AI Portal Backend Running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/pawintel')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error (ignored for demo):', err));
