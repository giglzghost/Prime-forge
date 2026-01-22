const { createRequire } = require('module');
const require = createRequire(import.meta.url);
const { handlePrimeForgeRequest } = require('../utils/allrouter.js');

module.exports = async (req, res) => {
  console.log('Prime Forge /api invoked:', req.url);
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
    const result = await handlePrimeForgeRequest(req);
    res.status(200).end(JSON.stringify(result));
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).end(JSON.stringify({ error: error.message }));
  }
};
