const express = require('express');
const app = express();
app.use(express.json());

app.all('*', (req, res) => {
  const path = req.path.slice(1) || 'root';
  if (path === 'prime') return res.send('Prime ready');
  if (path === 'forge') return res.send('Forge ready');
  res.send('Prime Forge API v1');
});

module.exports = app;
