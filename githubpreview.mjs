import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROOT = path.join(__dirname, 'docs');
const BASE = '/Starlit-Strasbourg';
const PORT = 4173;

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.glb': 'model/gltf-binary',
    '.hdr': 'application/octet-stream',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
};

const server = http.createServer((req, res) => {
    let url = decodeURIComponent(req.url);

    // Only serve things under the GitHub Pages repository path.
    if (!url.startsWith(BASE)) {
        res.writeHead(404);
        res.end('Not found');
        return;
    }

    url = url.slice(BASE.length);

    if (url === '' || url === '/') {
        url = '/index.html';
    }

    const filePath = path.join(ROOT, url);

    // Prevent escaping the docs directory.
    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(`404: ${filePath}`);
            res.writeHead(404);
            res.end('Not found');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();

        res.writeHead(200, {
            'Content-Type': MIME_TYPES[ext] ?? 'application/octet-stream',
        });

        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`GitHub Pages preview:`);
    console.log(`http://localhost:${PORT}${BASE}/`);
});