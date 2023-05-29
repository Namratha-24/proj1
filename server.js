// const express = require('express');
// const app = express();
// const port = 3000; 
// const { MongoClient } = require('mongodb');
// // Choose your desired port number

// app.use(express.json());

// // Add your routes here

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// // User routes
// // Sign up
// app.post('/api/users/signup', (req, res) => {
//   const { username, password } = req.body;

//   // Implement user signup logic here
//   // For simplicity, let's assume there is a user collection in MongoDB

//   // Check if the user already exists
//   const existingUser = await db.collection('users').findOne({ username });
//   if (existingUser) {
//     return res.status(409).json({ message: 'Username already exists' });
//   }

//   // Create a new user in the database
//   const newUser = {
//     username,
//     password
//   };

//   await db.collection('users').insertOne(newUser);

//   // Successful sign-up
//   res.status(201).json({ message: 'Sign-up successful' });
// });

//   // Sign in
// app.post('/api/users/signin', (req, res) => {
//   const { username, password } = req.body;

//   // Implement user signin logic here
//   // For simplicity, let's assume there is a user collection in MongoDB

//   // Retrieve user from the database based on the username

//   // Check if the user exists and the password matches
//   if (user && user.password === password) {
//     // Successful sign-in
//     res.status(200).json({ message: 'Sign-in successful' });
//   } else {
//     // Invalid credentials
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });
  

//   // Project routes

// // Create new project
// app.post('/api/projects', (req, res) => {
//     // Implement project creation logic here
//     // Retrieve project data from req.body and save it to the database
//   });
  
//   // Search projects
//   app.get('/api/projects', (req, res) => {
//     // Implement project search logic here
//     // Retrieve projects based on search parameters and send them as the response
//   });


//   const MongoClient = require('mongodb').MongoClient;
// const mongoURL = 'mongodb+srv://snamratha2403:N24112003$@cluster0.ula0h0x.mongodb.net/'; // Replace with your MongoDB connection string

// MongoClient.connect(mongoURL, (err, client) => {
//   if (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     return;
//   }
//   console.log('Connected to MongoDB');

//   const db = client.db('namratha'); // Replace with your database name

//   // Add database operations here

//   // Start the server after connecting to the database
//   app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
//   });
// });

