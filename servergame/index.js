const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

// Middleware
app.use(cors()); 
app.use(bodyParser.json());

// In-memory data store (replace with a real database like MongoDB or PostgreSQL)
let votes = { A: 0, B: 0 };

app.post('/api/vote', (req, res) => {
  const { option } = req.body;

  if (option === 'A' || option === 'B') {
    votes[option]++;
    res.json({ success: true, votes }); // Send back updated votes
  } else {
    res.status(400).json({ error: 'Invalid option' });
  }
});

app.get('/api/votes', (req, res) => {
  res.json(votes); // Send current vote counts
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});