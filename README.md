Features
Displays daily weather summaries for various cities.
Fetches real-time weather data from the backend API.
Random background colors for each city's weather card.
Provides weather alerts.
Responsive design using Tailwind CSS.

Installation
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your machine.
Git installed to clone the repository.
Axios for API calls.
Backend server running on http://localhost:5000 (or modify the API URL if needed).
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/manshasingha/weather_monitoring.git
Navigate to the project directory:

bash
Copy code
cd weather_monitoring
Install the necessary dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
Backend Server:

Ensure the backend server is running, and it is providing the weather data through the /api/weather/summary endpoint. You may have to set this up separately or modify the API call in the app.

Technologies Used
Frontend:

React.js: Frontend framework for building the UI.
Tailwind CSS: Utility-first CSS framework for styling.
Axios: HTTP client for making API calls.
Backend:

Node.js: Server-side JavaScript runtime.
Express.js: Web framework for Node.js to handle API requests.
MongoDB: NoSQL database for storing weather data.
API Endpoints
The application communicates with the backend to fetch weather data. Here are the API endpoints used:

GET /api/weather/summary: Fetches the weather summary for all cities.
You can include more endpoints if you have additional ones.

Usage
Weather Summary
The app fetches the weather data and displays:

City Name
Average Temperature (°C)
Maximum Temperature (°C)
Minimum Temperature (°C)
Dominant Weather Condition
Weather Alerts
The alerts feature provides weather alerts for specific cities based on certain conditions. You can modify the logic in the Alerts component.

Contributing
If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new feature branch (git checkout -b feature-branch-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch-name).
Open a pull request.
