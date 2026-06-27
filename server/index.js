const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the AutoMinder backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});