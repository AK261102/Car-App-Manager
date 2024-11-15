const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }, // Set `unique` to true for indexing
  password: { type: String, required: true }
});

// Pre-save hook to check for duplicate email and hash password
userSchema.pre('save', async function (next) {
  try {
    // Check if email is already in use
    const existingUser = await mongoose.models.User.findOne({ email: this.email });
    if (existingUser) {
      const error = new Error('Email is already in use');
      error.status = 400; // Bad request
      return next(error);
    }

    // Hash the password if it's new or modified
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
