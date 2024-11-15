# Car Management App

Welcome to the Car Management App 🚗! This app allows users to manage a collection of cars with ease. Users can add, edit, delete, and search cars by title, upload multiple images for each car, and view detailed information about each car in their collection.

## Features

1. **Add, Edit, and Delete Cars:** Users can add new cars with title, description, tags, and multiple images. Each car can be edited or deleted as needed.
2. **Search Functionality:** Easily search cars by title to quickly find a specific car in the collection.
3. **Image Uploads:** Allows multiple image uploads for each car, providing a comprehensive view.
4. **User Authentication:** Secure access for each user with login and signup capabilities.
5. **Real-Time Updates:** Displays real-time updates to the car details upon editing.

## Live Link
[[Link to the deployed app](https://idyllic-bublanina-2f1c90.netlify.app)]

Frontend link : https://idyllic-bublanina-2f1c90.netlify.app

Backend link : https://backend-car-manager.onrender.com

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher recommended)
- **npm** (version 6 or higher)
- **MongoDB**: Required as the database for storing car information

### Installation

Follow these steps to run the project locally:

1. Clone the repository:

   git clone https://github.com/yourusername/CarApp 

   cd CarApp

3. Install backend dependencies and start the server:

   cd Backend

   npm install

   npm start

5. Install frontend dependencies and start the server:

   cd ../Frontend

   npm install

   npm start

7. Environment Variables:

   Create a .env file in the Backend directory.

   Add necessary environment variables for JWT secret, MongoDB URI, PORT, etc.
   



## Folder Structure

### Backend
- `routes/`: Contains API routes for car and user management.
- `models/`: Defines data models for car and user.
- `middleware/`: Houses authentication middleware.
- `controllers/`: Logic for handling various car actions like adding, editing, and searching.

### Frontend
- `components/`: Contains reusable UI components like `CarCard`, `Navbar`, etc.
- `pages/`: Main pages like ProductList, ProductCreation, and ProductDetail.
- `services/`: Contains `api.js` for managing API requests.
- `styles.css`: CSS files for every component.

## Usage

1. **Add a Car:** Fill in car details in the Add Car form, including title, description, tags, and images.
2. **View Details:** Click on a car to see its full details.
3. **Edit a Car:** Click the edit button on a car’s detail page to update its information.
4. **Delete a Car:** Remove a car from the collection.
5. **Search Cars:** Use the search bar to find cars by title.
6. **User Authentication:** Login to access personalized car management. New users can sign up.

## Technologies Used

- **Frontend:** 
  - React for building user interfaces
  - Axios for API requests
  - CSS for styling components

- **Backend:**
  - Node.js and Express for creating the server and API endpoints
  - MongoDB for storing car and user data
  - JWT for secure user authentication
  - Cloudinary SDK and Multer for file upload

## Future Enhancements

1. **Add Sorting and Filtering Options:** Enable users to sort cars by different attributes.
2. **Notifications:** Provide reminders or notifications for car-related events.
3. **User Profiles:** Allow users to manage and update their profiles.

## Known Issues

- **Limited Error Handling:** Current error handling could be improved.
- **Image Optimization:** Future improvements can be made to optimize image uploads.
