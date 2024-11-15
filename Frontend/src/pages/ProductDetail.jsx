import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCar, updateCar, deleteCar } from '../services/api';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await getCar(id);
        setCar(data);
        setTitle(data.title);
        setDescription(data.description);
        setTags(data.tags.join(', '));
      } catch (error) {
        console.error('Failed to fetch car details', error);
      }
    };

    fetchCar();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteCar(id);
      navigate('/my-cars');
    } catch (error) {
      console.error('Failed to delete car', error);
    }
  };

  const handleEditToggle = () => {
    setIsEditMode(!isEditMode);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('tags', tags);

    if (newImages.length > 0) {
      newImages.forEach((image) => formData.append('images', image));
    }

    try {
      const { data } = await updateCar(id, formData);
      setCar(data); // Update the local `car` state with the updated data
      setIsEditMode(false); // Exit edit mode
    } catch (error) {
      console.error('Failed to update car', error);
    }
  };

  const handleImageChange = (e) => {
    setNewImages([...e.target.files]);
  };

  if (!car) return <p>No car available...</p>;

  return (
    <div className="product-detail">
      {!isEditMode ? (
        <>
          <h2 className="car-title">{car.title}</h2>
          <p className="car-description">{car.description}</p>
          <div className="image-gallery">
            {car.images && car.images.length > 0 ? (
              car.images.map((image, index) => (
                <img
                  key={index}
                  src={image} // Direct Cloudinary URL
                  alt={car.title}
                  className="car-image"
                />
              ))
            ) : (
              <p>No images available for this car.</p>
            )}
          </div>
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
          <button onClick={handleEditToggle} className="edit-button">
            Edit
          </button>
        </>
      ) : (
        <div className="edit-product">
          <h2>Edit Car</h2>
          <form onSubmit={handleUpdate}>
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-input"
              />
            </label>
            <label>
              Description:
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-textarea"
              />
            </label>
            <label>
              Tags:
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="form-input"
              />
            </label>
            <label>
              New Images:
              <input
                type="file"
                multiple
                onChange={handleImageChange}
                className="file-input"
              />
            </label>
            <div className="button-group">
              <button type="submit" className="save-button">
                Save
              </button>
              <button type="button" onClick={handleEditToggle} className="cancel-button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
