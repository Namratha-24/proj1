const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error in user signup', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});


router.get('/profile', async (req, res) => {
    try {
      const token = req.headers.authorization;
  
      // Verify the token
      const decoded = jwt.verify(token, 'your-secret-key');
      const userId = decoded.userId;
  
      // Fetch user profile
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      return res.status(200).json({ user });
    } catch (error) {
      console.error('Error in fetching user profile', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  
module.exports = router;


