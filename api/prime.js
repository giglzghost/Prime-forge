const forge = require('node-forge');

module.exports = async (req, res) => {
  const bits = parseInt(new URLSearchParams(req.url.split('?')[1]).get('bits')) || 1024;
  forge.prime.generateProbablePrime(bits, (err, num) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({
      mode: 'prime',
      bits,
      prime: num.toString(16).slice(0, 50) + '...'
    });
  });
};
