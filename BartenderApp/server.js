const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
   if (req.url === '/' && req.method === 'GET') {

      fs.readFile(path.join(__dirname, '/views/index.html'), 'utf8', (err, content) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
         } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
         }
      });
   } else if (req.url === '/menu' && req.method === 'GET') {

      fs.readFile(path.join(__dirname, '/views/cocktail_menu.html'), 'utf8', (err, content) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
         } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
         }
      });
   } else if (req.url === '/queue' && req.method === 'GET') {

      fs.readFile(path.join(__dirname, '/views/order_queue.html'), 'utf8', (err, content) => {
         if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
         } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
         }
      });
   } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
   }
});

const PORT = 1337;
server.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
