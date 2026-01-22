const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '.')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API proxy/mount - serves api/ handlers
app.use('/api', (req, res, next) => {
  try {
    const apiHandler = require(path.join(__dirname, 'api', 'index'));
    apiHandler(req, res, next);
  } catch (err) {
    res.status(500).json({ error: 'API init failed', details: err.message });
  }
});

// Routes
app.get('/', (req, res) => res.send('PrimeForge Live on Azure!'));
app.get('/status', (req, res) => res.json({ 
  status: 'Active', 
  platform: 'Azure App Service', 
  uptime: process.uptime(),
  timestamp: new Date().toISOString()
}));
app.get('/health', (req, res) => res.json({ healthy: true }));

// 404 fallback
app.use((req, res) => res.status(404).json({ error: 'PrimeForge: Endpoint not found' }));

app.listen(port, '0.0.0.0', () => {
  console.log(`PrimeForge listening on port ${port} (0.0.0.0)`);
});
