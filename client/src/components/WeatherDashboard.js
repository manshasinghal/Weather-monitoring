import React, { useEffect, useState } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const WeatherDashboard = () => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/weather/summary')
            .then(response => {
                console.log('Fetched Weather Data:', response.data); // Log the fetched data
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, []);

    // Format data for Chart.js
    const chartData = {
        labels: weatherData.map(data => data._id), // Use _id for labels
        datasets: [{
            label: 'Average Temperature (°C)',
            data: weatherData.map(data => data.averageTemp), // Change to averageTemp
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        }]
    };

    const chartOptions = {
        scales: {
            x: {
                type: 'category',  // Use the 'category' scale
                grid: {
                    display: false // Hide grid lines for a cleaner look
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                    font: {
                        size: 16,
                        weight: 'bold',
                    }
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.5)' // Light grid lines for better visibility
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                    color: '#333'
                }
            }
        }
    };

    // Handle empty data state
    if (weatherData.length === 0) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl font-semibold text-gray-600">No weather data available.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Weather Summary</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
                <Bar data={chartData} options={chartOptions} />
            </div>
            <div className="mt-5">
                <h3 className="text-xl font-bold mb-2">City Highlights</h3>
                <ul className="list-disc list-inside">
                    {weatherData.map((data, index) => (
                        <li key={index} className="text-lg font-semibold text-blue-600 bg-gray-200 p-2 rounded-lg mb-2">
                            {data._id} - Average Temp: {data.averageTemp.toFixed(2)} °C
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WeatherDashboard;
