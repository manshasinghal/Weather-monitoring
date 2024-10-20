// /client/src/components/Alerts.js
import React from 'react';

const Alerts = ({ data }) => {
    const threshold = 35;

    return (
        <div>
            <h2>Alerts</h2>
            {data.map((cityData, index) => (
                <div key={index}>
                    {cityData.maxTemp > threshold && (
                        <p>
                            <strong>Alert:</strong> {cityData._id} exceeded {threshold}°C with max temp {cityData.maxTemp.toFixed(2)}°C
                        </p>
                    )}
                   
                </div>
               
            ))}
              <h1>everything fine!!!</h1>
        </div>
    );
};

export default Alerts;
