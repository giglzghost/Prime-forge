// api/index.js
import { handlePrimeForgeRequest } from '../utils/aiRouter.js';

export default async function handler(req, res) {
  try {
    const { method, query, body } = req;

    if (method !== 'GET' && method !== 'POST') {
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ error: 'method_not_allowed' });
    }

    // Decide mode: query, body or default to 'prime'
    let mode = 'prime';

    if (query?.mode === 'forge' || body?.mode === 'forge') {
      mode = 'forge';
    } else if (query?.mode === 'prime' || body?.mode === 'prime') {
      mode = 'prime';
    }

    const result = await handlePrimeForgeRequest({
      mode,
      body: method === 'POST' ? body : null,
      query
    });

    return res.status(200).json({
      endpoint: '/api',
      mode,
      ...result
    });
  } catch (err) {
    console.error('Index router error:', err);
    return res.status(500).json({
      error: 'internal_error',
      details: String(err)
    });
  }
}
