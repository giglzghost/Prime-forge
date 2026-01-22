module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  const params = new URLSearchParams(req.url.split('?')[1] || '');
  const mode = params.get('mode') || 'prime';
  
  const result = {
    status: 'Prime Forge API v1 LIVE',
    mode,
    path: req.url,
    timestamp: new Date().toISOString()
  };
  
  res.status(200).end(JSON.stringify(result));
};
