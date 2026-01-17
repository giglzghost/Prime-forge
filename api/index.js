const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Prime Forge v1'));
app.get('/prime', (req, res) => res.send('Prime module stub'));
app.get('/forge', (req, res) => res.send('Forge endpoint ready'));
app.post('/forge', (req, res) => res.json({ forged: true }));

module.exports = app;
