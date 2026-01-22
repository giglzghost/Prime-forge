export default async function handler(req, res) {
  try {
    res.status(200).json({ 
      status: 'Prime Forge API live', 
      mode: 'root',
      path: req.url,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Prime Forge error:', error);
    res.status(500).json({ error: 'Handler failed' });
  }
}
