const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    city: String,
    temp: Number,
    feels_like: Number,
    main: String,
    dt: Number // Unix timestamp
});

module.exports = mongoose.model('Weather', weatherSchema);