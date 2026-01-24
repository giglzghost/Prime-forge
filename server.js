const { createServer } = require('http');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';
const port = process.env.PORT || 8080;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  createServer(handle).listen(port, () => console.log(`> Ready on http://${hostname}:${port}`));
});
