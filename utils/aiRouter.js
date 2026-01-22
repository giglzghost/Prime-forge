const forgeRouter = require('../utils/allrouter.js')?.handlePrimeForgeRequest || ((req) => ({status: 'Fallback live', mode: 'prime'}));

module.exports = async (req, res) => {
  // ... existing headers ...
  try {
    const result = await forgeRouter(req);
    res.status(200).end(JSON.stringify(result));
  } catch (error) {
    // ... error handling ...
  }
};
