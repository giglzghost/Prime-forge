const router = require('../utils/allrouter.js');

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  try {
    const result = await router.handlePrimeForgeRequest(req);
    res.status(200).end(JSON.stringify(result));
  } catch (e) {
    res.status(500).end(JSON.stringify({error: 'Router error'}));
  }
};
