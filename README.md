# Finance Tracker web application

 This web application built to help users manage personal finances by recording income and expense transactions. The app allows users to add, edit, and delete individual transactions, providing a straightforward way to maintain financial records. It includes user authentication (login/signup) to ensure data privacy, and features a clean, simple user interface that works seamlessly on desktop devices(at this stage). 
 
## Features
Add/Edit/Delete Transactions: Users can manage their financial records by creating, updating, or removing income and expense entries.
User Authentication: Secure signup and login functionality protects personal financial data.
Responsive Design: Mobile-friendly layout and flexible UI ensure usability across a variety of devices and screen sizes.
Clean UI: A minimal and intuitive interface keeps the user experience simple and clutter-free.

## Technologies Used
MongoDB: A NoSQL database used for storing user accounts and transaction data.
Express.js: A Node.js web framework for building the backend API.
React.js: A JavaScript library for building the frontend user interface.
Node.js: JavaScript runtime environment that executes the backend server.
Mongoose: An ODM (Object Data Modeling) library for MongoDB to model application data.
JSON Web Tokens (JWT): Token-based authentication for secure user login sessions.

## Installation and Setup Instructions
Clone the repository:
bash
Copy
Edit
git clone https://github.com/YourUsername/finance-tracker.git
cd finance-tracker
Install dependencies:
Backend (server) dependencies:
bash
Copy
Edit
cd server
npm install
Frontend (client) dependencies:
bash
Copy
Edit
cd ../client
npm install
Configure environment variables:
In the server directory, create a .env file and add your configuration, for example:
env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
(If needed, create a .env in the client directory for any React environment variables, such as the API base URL.)
Run the application:
Start the backend server (in the server directory):
bash
Copy
Edit
npm start
Start the React frontend (in the client directory):
bash
Copy
Edit
npm start
Folder Structure
client/ – React front-end application source code.
server/ – Node.js/Express back-end API source code.
.env – Environment variables file (contains sensitive settings, not committed to Git).
package.json – Manifest file containing project metadata and scripts.
README.md – Project documentation (this file).
