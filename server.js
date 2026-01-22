const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.'));
app.use(express.json());
app.use('/api', (req, res, next) => {
  // Proxy to api/ handlers if Vercel-style
  const apiIndex = require('./api/index');
  apiIndex(req, res, next);
}, express.static(path.join(__dirname, 'api')));

app.get('/', (req, res) => res.send('PrimeForge Live!'));
app.get('/status', (req, res) => res.json({ status: 'Active', platform: 'Azure' }));

app.listen(port, () => {
  console.log(`PrimeForge on port ${port}`);
});
