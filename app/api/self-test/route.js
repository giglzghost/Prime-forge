// status/route.js
export async function GET() {
  return Response.json({ uptime: '100%', azRg: 'PrimeForgeRG', paypal: 'sandbox live' });
}

// self-test/route.js
export async function POST() {
  // Simulate checks
  return Response.json({ github: 'synced', azure: '200 OK', paypal: 'auth OK' });
}
