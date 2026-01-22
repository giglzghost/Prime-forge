// api/prime.js
import { handlePrimeForgeRequest } from '../utils/aiRouter.js';

export default async function handler(req, res) {
  try {
    const { method, query, body } = req;

    if (method !== 'GET' && method !== 'POST') {
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ error: 'method_not_allowed' });
    }

    const result = await handlePrimeForgeRequest({
      mode: 'prime',
      body: method === 'POST' ? body : null,
      query
    });

    return res.status(200).json(result);
  } catch (err) {
    console.error('Prime error:', err);
    return res.status(500).json({ error: 'internal_error', details: String(err) });
  }
}
