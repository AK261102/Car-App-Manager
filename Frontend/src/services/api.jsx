import axios from 'axios';

const API = axios.create({ baseURL: 'https://carapp-backend-czb0.onrender.com/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

// Authentication
export const login = (formData) => API.post('/users/login', formData);
export const signup = (formData) => API.post('/users/signup', formData);

// Car Management
export const getCars = () => API.get('/cars');  // Get all cars for the logged-in user

export const addCar = (carData) => 
  API.post('/cars', carData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });  // Add a new car with multiple images in form

export const getCar = (id) => API.get(`/cars/${id}`); // Get a specific car by ID

export const updateCar = (id, updatedData) => 
  API.put(`/cars/${id}`, updatedData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });// Update a car by ID

export const deleteCar = (id) => API.delete(`/cars/${id}`); // Delete a car by ID

export const searchCars = (keyword) => 
  API.get(`/cars/search`, { 
    params: {keyword},
  }); // Search cars by keyword
