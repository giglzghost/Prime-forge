import { handlePrimeForgeRequest } from '../utils/allrouter.js';

export default async function handler(req, res) {
  try {
    const result = await handlePrimeForgeRequest(req);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed' });
  }
}
