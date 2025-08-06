const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, 'link.txt');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading link.txt');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});