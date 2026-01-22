const forge = require('node-forge');

function handlePrime(bits, callback) {
  forge.prime.generateProbablePrime(bits, callback);
}

function handleForge(bits) {
  return forge.pki.rsa.generateKeyPair(bits);
}

module.exports = { handlePrime, handleForge };
