// Import the Express.js module
const express = require('express');

// Create an instance of Express
const app = express();

const pokemon = require('./models/pokemon');

// Define a GET route that sends a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.render('Index');
  });

// Start the server and listen on the specified port
app.listen(3001, () => {
    console.log('listening');
});
