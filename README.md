# 🚗 Car Management App

Welcome to the **Car Management App** – your ultimate tool for effortlessly managing car collections! This intuitive web application offers a streamlined experience for car enthusiasts, featuring robust capabilities such as adding, editing, deleting, searching, and viewing detailed car profiles. With support for multiple image uploads, it ensures you have a comprehensive and visually appealing way to organize and showcase your vehicles.

## 🌟 Features

1. **Comprehensive Car Management:**  
   - Add cars with titles, descriptions, tags, and images.  
   - Edit or delete car details anytime.

2. **Search Functionality:**  
   - Instantly find cars by their title.

3. **Image Uploads:**  
   - Upload multiple images for each car to showcase every detail.

4. **User Authentication:**  
   - Secure access with login and signup functionality.

5. **Real-Time Updates:**  
   - All changes reflect instantly, ensuring an up-to-date collection.

---

## 🚀 Live Links

- **App Link:** [Car Management App](https://idyllic-bublanina-2f1c90.netlify.app)  
- **Repository:** [GitHub](https://github.com/AK261102/Car-App-Manager)  


---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** (v14 or higher)  
- **npm** (v6 or higher)  
- **MongoDB** (for database storage)  

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/AK261102/Car-App-Manager
   cd Car-App-Manager
   ```

2. **Backend Setup:**  
   Navigate to the backend folder, install dependencies, and start the server:  
   ```bash
   cd Backend  
   npm install  
   npm start
   ```

3. **Frontend Setup:**  
   Navigate to the frontend folder, install dependencies, and start the development server:  
   ```bash
   cd ../Frontend  
   npm install  
   npm start
   ```

4. **Environment Variables:**  
   Create a `.env` file in the `Backend` directory and configure the following:  
   ```
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongodb_connection_uri
   PORT=your_port_number
   ```

---

## 📂 Folder Structure

### Backend

- **`routes/`**: API routes for car and user management.  
- **`models/`**: Data models for cars and users.  
- **`middleware/`**: Authentication and error-handling middleware.  
- **`controllers/`**: Business logic for managing cars and user data.  

### Frontend

- **`components/`**: Reusable UI components (e.g., `CarCard`, `Navbar`).  
- **`pages/`**: Application pages (e.g., `CarList`, `CarDetails`).  
- **`services/`**: API interaction logic using Axios.  
- **`styles/`**: CSS modules for UI styling.  

---

## 🎯 Usage

1. **Add a Car:**  
   Fill in the car details (title, description, tags, and images).  

2. **View Details:**  
   Click on a car to see its detailed view.  

3. **Edit a Car:**  
   Update car details using the edit feature.  

4. **Delete a Car:**  
   Remove a car from the collection.  

5. **Search Cars:**  
   Use the search bar to find cars by title.  

6. **User Authentication:**  
   Sign up for a new account or log in to access personalized features.  

---

## 💻 Technologies Used

### **Frontend**

- **React.js:** Component-based UI development  
- **Axios:** API requests  
- **CSS:** Custom component styling  

### **Backend**

- **Node.js & Express.js:** REST API development  
- **MongoDB:** NoSQL database for car and user data  
- **JWT:** Secure user authentication  
- **Cloudinary SDK & Multer:** File upload and image storage  

---

## 🌟 Future Enhancements

- **Sorting & Filtering:**  
   Enable sorting and filtering of cars by attributes like price or year.  

- **User Profiles:**  
   Add profile customization and user data management.  

- **Notifications:**  
   Implement reminders for car-related events or milestones.  

---

## 🐞 Known Issues

- **Error Handling:**  
   Needs improved feedback for user actions.  

- **Search Optimization:**  
   Optimize search for faster load times.  

---

Enjoy managing your car collection with ease! 🎉
