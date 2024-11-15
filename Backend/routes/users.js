const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

// User Signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if a user with the same email already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).send('Email is already in use');

    // Create a new user
    user = new User({ email, password });
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send(`Server error : ${err}`);
  }
});

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send('Invalid credentials');

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    // Generate JWT token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '5h' });
    res.send({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
