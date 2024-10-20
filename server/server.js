// /server/server.js
const express = require('express');
const cors = require('cors');
const weatherRoutes = require('./routes/weatherRoutes');
const mongoose = require("mongoose");
const {schema} = require('./models/Weather');

const app = express();
app.use(cors());
app.use(express.json());


const User = schema;
// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/Weatherdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/weather', weatherRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
