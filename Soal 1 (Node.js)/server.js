const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON data from requests
app.use(express.json());

// In-memory storage
let formDataStorage = [];

// Root route (default GET handler)
app.get('/', (req, res) => {
  res.send('Welcome to the API server. Use /submit-form to POST data and /get-data to GET stored data.');
});

// API to receive form data (POST request)
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Store the data in the array
  formDataStorage.push(formData);

  res.status(200).send({
    message: 'Data successfully stored!',
    data: formData,
  });
});

// API to retrieve stored data (GET request)
app.get('/get-data', (req, res) => {
  res.status(200).send({
    message: 'Retrieved stored data successfully!',
    data: formDataStorage,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
