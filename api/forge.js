const forge = require('node-forge');

module.exports = async (req, res) => {
  const bits = parseInt(new URLSearchParams(req.url.split('?')[1]).get('bits')) || 2048;
  const keyPair = forge.pki.rsa.generateKeyPair(bits);
  res.status(200).json({
    mode: 'forge',
    bits,
    public_pem: forge.pki.publicKeyToPem(keyPair.publicKey).slice(0, 100) + '...',
    private_pem: forge.pki.privateKeyToPem(keyPair.privateKey).slice(0, 100) + '...'
  });
};
