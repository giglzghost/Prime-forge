const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ status: 'Prime Forge v1' }));
app.get('/prime', (req, res) => res.json({ module: 'prime', ready: true }));
app.get('/forge', (req, res) => res.json({ endpoint: 'forge', ready: true }));

module.exports = app;
