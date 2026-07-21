// Custom Next.js production server — used by Hostinger's Node.js app
// (Phusion Passenger) and any Node host that runs a startup file.
// Passenger sets process.env.PORT and manages the process.
//
// Deploy flow on the host:  npm install  →  npm run build  →  (Passenger runs this file)
// On a VPS with PM2:        pm2 start server.js --name myguys

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res, parse(req.url, true));
  }).listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> My Guys Pest Control ready on port ${port}`);
  });
});
