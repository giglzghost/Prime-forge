export default function(req, res) {
  const path = req.url.substring(5) || '/';  // /api/ -> /
  if (path === '/') return res.status(200).send('Prime Forge v1');
  if (path === 'prime') return res.status(200).send('Prime module ready');
  if (path === 'forge') return res.status(200).send('Forge endpoint ready');
  res.status(404).send('404 Not found');
}
