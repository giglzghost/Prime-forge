module.exports = (req, res, next) => {
  res.json({ 
    primeforge: 'API ready', 
    endpoints: ['/api/prime?bits=1024', '/api/forge?bits=2048'], 
    mode: req.query.mode || 'prime'
  });
};
