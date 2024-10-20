// /server/routes/weatherRoutes.js
const express = require('express');
const axios = require('axios');
const Weather = require('../models/Weather');
const router = express.Router();
const { weatherAPIKey } = require('../config');

const cities = ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'];

router.get('/fetch', async (req, res) => {
    try {
        cities.forEach(async (city) => {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}`
            );
            const data = response.data;
            const tempCelsius = data.main.temp - 273.15; // Convert Kelvin to Celsius
            
            const weather = new Weather({
                city: data.name,
                temp: tempCelsius,
                feels_like: data.main.feels_like - 273.15,
                main: data.weather[0].main,
                dt: data.dt
            });
            await weather.save();
        });
        res.json({ message: 'Weather data fetched and saved!' });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

router.get('/summary', async (req, res) => {
    try {
        // Rollup: aggregate daily weather summaries here
        const summaries = await Weather.aggregate([
            {
                $group: {
                    _id: "$city",
                    averageTemp: { $avg: "$temp" },
                    maxTemp: { $max: "$temp" },
                    minTemp: { $min: "$temp" },
                    dominantWeather: { $first: "$main" }, // Simplified dominant weather
                }
            }
        ]);
        
        console.log('Summaries:', summaries); // Log the summaries
        res.json(summaries);
    } catch (error) {
        console.error('Error fetching summaries:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});


module.exports = router;
