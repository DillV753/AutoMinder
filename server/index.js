const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the AutoMinder backend!" });
});

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;

  const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    res.json({ message: 'User created successfully!', userId: result.insertId });
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful!', user: results[0] });
  });
});

app.post('/api/vehicles', (req, res) => {
  const { make, model, year, mileage } = req.body;
  const userId = req.body.userId;

  const sql = 'INSERT INTO vehicles (user_id, make, model, year, mileage) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [userId, make, model, year, mileage], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    res.json({ message: 'Vehicle added successfully!', vehicleId: result.insertId });
  });
});

app.get('/api/vehicles/:userId', (req, res) => {
  const { userId } = req.params;

  const sql = 'SELECT * FROM vehicles WHERE user_id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});