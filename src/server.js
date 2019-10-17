const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    if (pathName === '/') pathName = '/index.html'; 
    fs.readFile(__dirname + '/../public' + pathName, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write('Page not found');
            res.end()
        } else {
            res.writeHead(200);
            res.write(data);
            res.end();
        }
    })
})

module.exports = server;

