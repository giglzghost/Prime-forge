export default function (req, res) {
  res.status(200).setHeader('Content-Type', 'text/plain').send('Prime Forge API v1 ready');
}
