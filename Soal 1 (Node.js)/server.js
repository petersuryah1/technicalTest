const express = require('express');
const api = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345',
  database: 'techtest',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  
  const createTable = `
    CREATE TABLE IF NOT EXISTS submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  
  connection.query(createTable);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;
  
  const query = 'INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)';
  connection.query(query, [name, email, message], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error saving to database' });
      return;
    }
    res.json({ success: true, message: 'Form submitted successfully' });
  });
});

// Add this new endpoint for getting submissions
app.get('/api/submissions', (req, res) => {
  const query = 'SELECT * FROM submissions ORDER BY created_at DESC';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching from database' });
      return;
    }
    res.json(results);
  });
});

// Remove or comment out the api.listen line since you're using app.listen
// api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});