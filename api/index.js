export default function(req, res) {
  const fullPath = req.url.slice(1);  // "/api/prime" -> "api/prime"
  const path = fullPath === 'api' ? '/' : fullPath.slice(4);  // "api/prime" -> "prime"
  if (path === '/') return res.status(200).send('Prime Forge v1');
  if (path === 'prime') return res.status(200).send('Prime module ready');
  if (path === 'forge') return res.status(200).send('Forge endpoint ready');
  res.status(404).send('404');
}
