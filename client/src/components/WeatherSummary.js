import React from 'react';

// Function to generate random colors
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const WeatherSummary = ({ data }) => {
    return (
        <div className="container mx-auto p-5 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Daily Weather Summary</h2>
            <div className="flex flex-wrap justify-center gap-4"> {/* Flexbox layout for centered items */}
                {data.map((cityData, index) => (
                    <div
                        key={index}
                        className="p-4 rounded-lg shadow-md transition transform hover:scale-105 text-center" // Added text-center
                        style={{ backgroundColor: getRandomColor() }} // Apply random background color
                    >
                        <h3 className="text-xl font-semibold text-white">{cityData._id}</h3>
                        <p className="text-gray-100">
                            <strong>Average Temp:</strong> {cityData.averageTemp.toFixed(2)} °C
                        </p>
                        <p className="text-gray-100">
                            <strong>Max Temp:</strong> {cityData.maxTemp.toFixed(2)} °C
                        </p>
                        <p className="text-gray-100">
                            <strong>Min Temp:</strong> {cityData.minTemp.toFixed(2)} °C
                        </p>
                        <p className="text-gray-100">
                            <strong>Dominant Weather:</strong> {cityData.dominantWeather}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherSummary;
