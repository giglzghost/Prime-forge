export default function(req, res) {
  console.log('req.url =', req.url);
  let path = req.url;
  if (path.startsWith('/api/')) path = path.slice(5);  // /api/prime -> prime
  else if (path === '/api') path = '/';
  console.log('path =', path);
  if (path === '/' || path === '') res.status(200).send('Prime Forge v1');
  else if (path === 'prime') res.status(200).send('Prime module ready');
  else if (path === 'forge') res.status(200).send('Forge endpoint ready');
  else res.status(404).send('404: ' + path);
}
