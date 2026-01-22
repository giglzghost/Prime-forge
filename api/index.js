module.exports = async (req, res) => {
  console.log('Prime Forge API hit');
  
  res.setHeader('Content-Type', 'application/json');
  
  const result = {
    status: 'Prime Forge API v1 LIVE',
    mode: new URLSearchParams(req.url.split('?')[1] || '').get('mode') || 'prime',
    path: req.url,
    timestamp: new Date().toISOString()
  };
  
  res.status(200).end(JSON.stringify(result));
};
