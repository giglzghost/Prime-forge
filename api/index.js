export default function(req, res) {
  const p = req.url.slice(4) || '/';  // strip /api
  if (p === '/' || p === '') return res.status(200).send('Prime Forge v1');
  if (p === '/prime') return res.status(200).send('Prime module ready');
  if (p === '/forge') return res.status(200).send('Forge endpoint ready');
  res.status(404).send('Not found');
}
