module.exports = {
  apps: [{
    name: 'primeforge',
    script: 'server.js',
    instances: 1,
    env: { NODE_ENV: 'production', PORT: process.env.PORT || 3000 },
    max_memory_restart: '512M'
  }]
};
