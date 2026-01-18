export default function(req, res) {
  const path = req.url.slice(5);  // /api/prime -> prime
  console.log('URL:', req.url, 'Path:', path);
  if (path === '' || path === '/') return res.status(200).send('Prime Forge v1');
  if (path === 'prime') return res.status(200).send('Prime module ready');
  if (path === 'forge') return res.status(200).send('Forge endpoint ready');
  res.status(404).send('404: ' + path);
}
