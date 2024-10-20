import React, { useState, useEffect } from 'react';
import WeatherSummary from './components/WeatherSummary';
import Alerts from './components/Alerts';
import WeatherDashboard from './components/WeatherDashboard'; // Import WeatherDashboard component
import axios from 'axios';


const App = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/weather/summary');
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data', error);
            }
        };
        fetchWeatherData();
    }, []);

    return (
        <div
            style={{
            
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}
        >
            <h1 className="justify-center align-center ml-16 text-white">Weather Monitoring System</h1>
            <WeatherSummary data={weatherData} />
            <Alerts data={weatherData} />
            <WeatherDashboard data={weatherData} />
        </div>
    );
};

export default App;
