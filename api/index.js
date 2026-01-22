const forge = require('node-forge');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/api' || req.url === '/api/') {
    res.status(200).json({ mode: 'root', message: 'Prime Forge API ready', endpoints: ['/prime', '/forge'] });
  } else {
    res.status(404).json({ error: 'Not found' });
  }
};
