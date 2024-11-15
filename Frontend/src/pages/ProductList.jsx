import React, { useEffect, useState } from 'react';
import { getCars, searchCars } from '../services/api';
import CarCard from '../components/CarCard';

function ProductList() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const { data } = await getCars();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars', error);
      }
    };
    fetchCars();
  }, []);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      console.error('Search term is empty');
      return;
    }
    
    try {
      const { data } = await searchCars(searchTerm);
      setCars(data);
    } catch (error) {
      console.error('Failed to search cars', error);
    }
  };

  return (
    <div className="container product-list">
      <h2>My Cars</h2>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      <div className="car-card-container">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
