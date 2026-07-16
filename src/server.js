const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Phục vụ các file tĩnh cho Frontend E2E / Visual testing
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint giả lập cho API Testing / Performance Testing
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  res.status(201).json({ id: 3, name });
});

app.listen(port, () => {
  console.log(`Mock server is running at http://localhost:${port}`);
});
