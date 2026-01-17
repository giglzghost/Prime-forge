const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Prime Forge v1'));
app.get('/prime', (req, res) => res.send('Prime ready'));
app.get('/forge', (req, res) => res.send('Forge ready'));

module.exports = app;
