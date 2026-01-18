const forge = require('node-forge');
forge.options.usePureJavaScript = true;

export default function(req, res) {
  console.log('req.url:', req.url);  // Debug log
  const path = req.url.startsWith('/api/') ? req.url.slice(5) : req.url.slice(1);
  console.log('parsed path:', path);  // Debug log
  if (path === '/' || path === '') {
    res.status(200).send('Prime Forge v1 - node-forge TLS/Prime API');
  } else if (path === 'prime') {
    const bits = parseInt(req.query.bits) || 512;
    const md = new forge.md.sha256.create();
    const rs = forge.random.getBytesSync(bits / 8);
    forge.prime.generate(bits, {state: rs, md: md}, (err, num) => {
      if (err) {
        console.error('Prime gen error:', err);
        return res.status(500).json({error: err.message});
      }
      res.status(200).json({
        prime: num.toString(),
        bits: bits
      });
    });
  } else if (path === 'forge') {
    const bits = parseInt(req.query.bits) || 2048;
    const keyPair = forge.pki.rsa.generateKeyPair(bits);
    res.status(200).json({
      public_pem: forge.pki.publicKeyToPem(keyPair.publicKey).slice(0,100) + '...',
      private_pem: forge.pki.privateKeyToPem(keyPair.privateKey).slice(0,100) + '...'
    });
  } else {
    res.status(404).send('404 Not found');
  }
}
