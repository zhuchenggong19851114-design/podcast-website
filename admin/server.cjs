const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const PASSWORD = 'xiachuang2026';
const DATA_DIR = '/mnt/d/OpenClaw/downloads/代可行';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
};

function sendFile(res, filePath, status = 200) {
  const ext = path.extname(filePath);
  const ct = MIME[ext] || 'text/plain';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
      return;
    }
    res.writeHead(status, { 'Content-Type': ct });
    res.end(data);
  });
}

function handlePost(req, res) {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    try {
      const { action, password, data: bodyData } = JSON.parse(body);
      if (password !== PASSWORD) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: '密码错误' }));
        return;
      }
      switch (action) {
        case 'load':
          const script = fs.readFileSync(path.join(DATA_DIR, 'script.js'), 'utf8');
          const episodes = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'episodes.json'), 'utf8'));
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ script, episodes }));
          break;
        case 'save':
          if (bodyData) {
            if (bodyData.script) fs.writeFileSync(path.join(DATA_DIR, 'script.js'), bodyData.script, 'utf8');
            if (bodyData.episodes) fs.writeFileSync(path.join(DATA_DIR, 'episodes.json'), JSON.stringify(bodyData.episodes, null, 2), 'utf8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: true }));
          } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'no data' }));
          }
          break;
        default:
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'unknown action' }));
      }
    } catch (e) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: e.message }));
    }
  });
}

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  const url = req.url.split('?')[0];
  if (req.method === 'GET' && url === '/') {
    sendFile(res, path.join(__dirname, 'index.html'));
  } else if (req.method === 'GET' && url === '/admin.js') {
    sendFile(res, path.join(__dirname, 'admin.js'));
  } else if (req.method === 'GET' && url === '/admin.css') {
    sendFile(res, path.join(__dirname, 'admin.css'));
  } else if (req.method === 'POST') {
    handlePost(req, res);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🎙️ 播客管理后台已启动: http://localhost:${PORT}`);
  console.log(`密码: ${PASSWORD}`);
});
