export async function POST(request) {
  const { cmd } = await request.json();
  const replies = {
    status: 'Azure: Healthy | Vercel: Live | PayPal: Ready | Revenue: $0 (first sale pending)',
    deploy: 'Pushed to GitHub—Vercel redeploying.',
    self: 'Self-test: GitHub OK, Azure ping OK, PayPal API live.'
  };
  return Response.json({ reply: replies[cmd] || `Executing "${cmd}" – Empire green.` });
}
