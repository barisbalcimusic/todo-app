# First Full-Stack Mini-Project with MERN Stack (June 2024)

This project is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to manage their to-do lists by performing basic CRUD (Create, Read, Update, Delete) operations on notes.

## Features

- **Get Notes**: Users can retrieve their list of notes.
- **Add Notes**: Users can add new notes to their to-do list.
- **Update Notes**: Users can update existing notes.
- **Delete Notes**: Users can delete notes from their to-do list.

## Technologies Used

- **React.js**
- **Tailwind CSS**
- **Node.js (Express.js)**
- **MongoDB**
- **Mongoose**

## Project Structure

The project is structured into two main parts:

1. **Backend**
2. **Frontend**

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone git@github.com:barisbalcimusic/ToDoApp.git
   ```
2. **Setup Backend**:

   - Navigate to the backend directory:
     ```bash
     cd ToDoApp/backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add the following environment variables:
     ```dotenv
     PORT=3000
     MONGODB_URI=<your_mongodb_connection_string>
     ```
     Replace `<your_mongodb_connection_string>` with your MongoDB connection string.
   - Start the backend server:
     ```bash
     node server.js
     ```

3. **Setup Frontend**:

   - Open a new terminal window/tab.
   - Navigate to the frontend directory:
     ```bash
     cd ToDoApp/frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm run dev
     ```

4. **Access the Application**:
   - Once both servers are running, open your web browser and visit [http://localhost:3000](http://localhost:3000).
