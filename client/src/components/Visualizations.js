// /client/src/components/Visualizations.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Visualizations = ({ data }) => {
    const chartData = {
        labels: data.map(city => city._id),
        datasets: [
            {
                label: 'Max Temp',
                data: data.map(city => city.maxTemp),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            }
        ]
    };

    return (
        <div>
            <h2>Weather Visualizations</h2>
            <Line data={chartData} />
        </div>
    );
};

export default Visualizations;
