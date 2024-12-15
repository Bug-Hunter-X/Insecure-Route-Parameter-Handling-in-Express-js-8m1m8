const express = require('express');
const app = express();
const db = require('./db'); // Assume a database connection module

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  //Sanitize user input to prevent injection attacks
  const sanitizedUserId = db.sanitizeInput(userId);
  try {
    const userData = await db.getUserById(sanitizedUserId);
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error');
  }
});