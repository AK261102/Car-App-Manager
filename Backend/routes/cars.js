const express = require('express');
const { upload } = require('../config/cloudinary'); // Use the configured Cloudinary upload
const Car = require('../models/car');
const auth = require('../middleware/auth');
const cloudinary = require('cloudinary').v2; // Import Cloudinary v2 directly if needed for deletions

const router = express.Router();

// Create a new car with multiple images
router.post('/', auth, upload.array('images', 10), async (req, res) => {
  const { title, description, tags } = req.body;
  const images = req.files.map(file => file.path); // Get Cloudinary URLs

  try {
    const car = new Car({
      userId: req.user._id,
      title,
      description,
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [],
      images,
    });
    await car.save();
    res.send(car);
  } catch (err) {
    console.error('Error saving car:', err);
    res.status(500).send(`Server error: ${err.message}`);
  }
});

// Get all cars of logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const cars = await Car.find({ userId: req.user._id });
    res.send(cars);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get a single car by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const car = await Car.findOne({ _id: req.params.id, userId: req.user._id });
    if (!car) return res.status(404).send('Car not found');
    res.send(car);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Search for cars by title, filtered by the authenticated user
router.get('/search', auth, async (req, res) => {
  const { keyword } = req.query;

  if (!keyword || keyword.trim() === '') {
    return res.status(400).send('Search keyword is required');
  }

  try {
    const cars = await Car.find({
      userId: req.user._id,
      title: { $regex: keyword, $options: 'i' },
    });
    res.send(cars);
  } catch (err) {
    console.error('Error in search route:', err.stack);
    res.status(500).send(`Server error: ${err.message}`);
  }
});

// Update car route with Cloudinary image handling
router.put('/:id', auth, upload.array('images', 10), async (req, res) => {
  const { title, description, tags } = req.body;

  try {
    const car = await Car.findOne({ _id: req.params.id, userId: req.user._id });
    if (!car) return res.status(404).send('Car not found');

    let images;

    // Delete old images if new images are uploaded
    if (req.files && req.files.length > 0) {
      images = req.files.map(file => file.path); // New images from Cloudinary

      // Delete old images from Cloudinary
      for (const oldImage of car.images) {
        const publicId = oldImage.split('/').pop().split('.')[0]; // Extract public ID from URL
        await cloudinary.uploader.destroy(publicId);
      }
    } else {
      images = car.images; // Keep old images if no new ones are provided
    }

    // Update car data
    car.title = title || car.title;
    car.description = description || car.description;
    car.tags = tags ? tags.split(',').map(tag => tag.trim()) : car.tags;
    car.images = images;

    await car.save();
    res.send(car);
  } catch (err) {
    console.error('Error updating car:', err);
    res.status(500).send(`Server error: ${err.message}`);
  }
});

// Delete car along with Cloudinary images
router.delete('/:id', auth, async (req, res) => {
  try {
    const car = await Car.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!car) return res.status(404).send('Car not found');

    // Delete images from Cloudinary
    for (const image of car.images) {
      const publicId = image.split('/').pop().split('.')[0]; // Extract public ID from URL
      await cloudinary.uploader.destroy(publicId);
    }

    res.send('Car deleted');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
