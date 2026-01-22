const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Static files (for avatars, css, etc.)
app.use('/static', express.static(path.join(__dirname, 'static')));

// Basic health/status
app.get('/', (req, res) => {
  res.send('PrimeForge Live on Azure!<br><a href="/dashboard">Go to Dashboard</a> | <a href="/buy">NFT Buy Page</a>');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'OK',
    platform: 'Azure',
    uptime_seconds: process.uptime(),
    time: new Date().toISOString()
  });
});

// Dashboard HTML (simple inline for now)
app.get('/dashboard', (req, res) => {
  const html = `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>PrimeForge Empire Dashboard</title>
    <style>
      body {
        margin: 0;
        padding: 20px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: radial-gradient(circle at top, #111827, #020617);
        color: #e5e7eb;
      }
      h1 {
        font-size: 24px;
        margin-bottom: 8px;
      }
      .subtitle {
        font-size: 14px;
        color: #9ca3af;
        margin-bottom: 20px;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 16px;
      }
      .card {
        background: rgba(15, 23, 42, 0.9);
        border-radius: 12px;
        padding: 12px 14px;
        border: 1px solid rgba(56, 189, 248, 0.3);
        box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
      }
      .card-header {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 999px;
        background: radial-gradient(circle at 30% 0%, #38bdf8, #0f172a);
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #e5e7eb;
      }
      .name {
        font-weight: 600;
        font-size: 14px;
      }
      .role {
        font-size: 12px;
        color: #9ca3af;
      }
      .status {
        margin-top: 4px;
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: #22c55e;
        box-shadow: 0 0 10px rgba(34, 197, 94, 0.8);
      }
      .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .pill {
        font-size: 11px;
        padding: 3px 8px;
        border-radius: 999px;
        border: 1px solid rgba(148, 163, 184, 0.7);
        color: #cbd5f5;
      }
      a {
        color: #38bdf8;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="header-row">
      <div>
        <h1>PrimeForge Empire</h1>
        <div class="subtitle">
          All systems nominal. Azure + GitHub + Vercel linked. PayPal: awaiting first live sale.
        </div>
      </div>
      <div class="pill">
        Uptime: ~${Math.floor(process.uptime())}s • ${new Date().toLocaleTimeString()}
      </div>
    </div>

    <div style="margin-bottom: 16px;">
      <a href="/">Root</a> • <a href="/buy">NFT Buy Page</a> • <a href="/status">Status JSON</a>
    </div>

    <div class="grid">
      <div class="card">
        <div class="card-header">
          <div class="avatar">PF</div>
          <div>
            <div class="name">PrimeForge Core</div>
            <div class="role">Sovereign Architect</div>
          </div>
        </div>
        <div class="status">
          <span class="dot"></span>
          <span>Online • Routing AI swarm</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="avatar">EL</div>
          <div>
            <div class="name">Elara</div>
            <div class="role">Executive Secretary</div>
          </div>
        </div>
        <div class="status">
          <span class="dot"></span>
          <span>Online • Inbox & scheduling</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="avatar">NF</div>
          <div>
            <div class="name">NFT Engine</div>
            <div class="role">Product & Drops</div>
          </div>
        </div>
        <div class="status">
          <span class="dot"></span>
          <span>Ready • Waiting for next campaign</span>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="avatar">PP</div>
          <div>
            <div class="name">PayPal Relay</div>
            <div class="role">Payments & Ledger</div>
          </div>
        </div>
        <div class="status">
          <span class="dot"></span>
          <span>Armed • First sale pending</span>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

// Simple PayPal buy page
app.get('/buy', (req, res) => {
  const paypalUrl = 'https://www.paypal.com/ncp/payment/Y5Q46LVQHX3J2'; // <-- replace if you have a new one

  const html = `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <title>PrimeForge NFT Buy</title>
    <style>
      body {
        margin: 0;
        padding: 20px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #020617;
        color: #e5e7eb;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      }
      .wrap {
        background: radial-gradient(circle at top, #0f172a, #020617);
        border-radius: 16px;
        padding: 24px 20px;
        border: 1px solid rgba(56, 189, 248, 0.4);
        box-shadow: 0 0 30px rgba(56, 189, 248, 0.25);
        max-width: 360px;
        width: 100%;
        text-align: center;
      }
      h1 {
        font-size: 22px;
        margin-bottom: 8px;
      }
      .subtitle {
        font-size: 13px;
        color: #9ca3af;
        margin-bottom: 16px;
      }
      .price {
        font-size: 18px;
        margin-bottom: 16px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 18px;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        background: linear-gradient(to right, #22c55e, #16a34a);
        color: #022c22;
        text-decoration: none;
      }
      .btn:hover {
        filter: brightness(1.05);
      }
      a {
        color: #38bdf8;
      }
      .links {
        margin-top: 12px;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <h1>PrimeForge NFT</h1>
      <div class="subtitle">
        Single-slot support token to fuel the autonomous AI swarm.
      </div>
      <div class="price">
        Price: <strong>$10</strong> via PayPal
      </div>
      <a class="btn" href="${paypalUrl}" target="_blank" rel="noopener noreferrer">
        Proceed to PayPal
      </a>
      <div class="links">
        <div><a href="/dashboard">Back to Dashboard</a></div>
        <div><a href="/">Back to Root</a></div>
      </div>
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

// (Optional) mount /api if you already have api/index.js Vercel-style
try {
  const apiHandler = require('./api/index');
  app.use('/api', (req, res) => apiHandler(req, res));
} catch (e) {
  console.warn('api/index.js not found or failed to load; /api will 404 until present.');
}

app.listen(port, '0.0.0.0', () => {
  console.log(`PrimeForge listening on port ${port} (0.0.0.0)`);
});
