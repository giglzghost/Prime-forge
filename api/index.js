const forge = require('node-forge');
forge.options.usePureJavaScript = true;

export default function(req, res) {
  const path = req.url.slice(1);  // /prime -> prime
  if (path === 'api') {
    res.status(200).send('Prime Forge v1 - node-forge TLS/Prime API');
  } else if (path === 'prime') {
    const bits = parseInt(req.query.bits) || 512;
    const keyPair = forge.pki.rsa.generateKeyPair({bits: bits});
    const n_hex = keyPair.publicKey.n.toString(16);
    res.json({status: 'prime ready', bits, n_hex: n_hex.slice(0,64) + '...' });
  } else if (path === 'forge') {
    const keyPair = forge.pki.rsa.generateKeyPair({bits: 2048});
    res.json({
      status: 'keys forged',
      public_pem: forge.pki.publicKeyToPem(keyPair.publicKey).slice(0,100) + '...',
      private_pem: forge.pki.privateKeyToPem(keyPair.privateKey).slice(0,100) + '...'
    });
  } else {
    res.status(404).send('404 Not found');
  }
}
