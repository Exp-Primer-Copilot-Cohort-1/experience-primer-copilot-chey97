// Create web server

const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const comments = [];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const parsedQuery = querystring.parse(parsedUrl.query);
    const pathName = parsedUrl.pathname;

    if (pathName === '/index.html') {
        fs.readFile('./index.html', 'utf8', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (pathName === '/comment') {
        const comment = parsedQuery.comment;
        comments.push(comment);
        res.writeHead(302, { Location: '/index.html' });
        res.end();
    } else if (pathName === '/comments') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(comments.join('\n'));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000);
console.log('The server is running on port 3000');