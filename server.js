const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Status endpoint (self-ping)
app.get('/api/status', (req, res) => {
  res.json({ status: 'green', independence: '92%', paypal: 'live', uptime: new Date().toISOString() });
});

// PayPal webhook echo (sandbox → prod)
app.post('/api/paypal/webhook', (req, res) => {
  console.log('PayPal event:', req.body);
  res.status(200).send('OK');
});

app.listen(process.env.PORT || 3000, () => console.log('Prime Forge live'));
