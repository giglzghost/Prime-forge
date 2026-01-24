'use client';
import { useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState('');
  const sendCmd = async (cmd) => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cmd })
    });
    setResponse(await res.text());
  };
  return (
    <main style={{ minHeight: '100vh', padding: 40, textAlign: 'center' }}>
      <img src="/matriarch.png" alt="Matriarch" style={{ width: 150, borderRadius: '50%' }} />
      <h1>Prime Forge Empire 🚀</h1>
      <p>Autonomous Revenue: NFTs | Swarm AI | Azure Live</p>
      <div style={{ margin: 20 }}>
        <a href="https://www.paypal.com/ncp/payment/Y5Q46LVQHX3J2" 
           style={{ display: 'inline-block', background: '#3b82f6', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: 8, fontSize: '1.2em' }}>
          Buy NFT $10
        </a>
      </div>
      <div style={{ maxWidth: 600, margin: '0 auto' }}>
        <input id="cmd" placeholder="status / deploy / revenue" style={{ width: '60%', padding: 12 }} />
        <button onClick={() => sendCmd(document.getElementById('cmd').value)} style={{ padding: 12, background: '#10b981', color: 'white', border: 'none' }}>Execute</button>
        <pre>{response}</pre>
      </div>
      <button onClick={() => sendCmd('self-test')} style={{ marginTop: 20, padding: 10, background: '#f59e0b' }}>Run Self-Test</button>
    </main>
  );
}
