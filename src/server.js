const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const config = {
    root: '/../public',
}

const contentTypes =  {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
}

const server = http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    if (pathName === '/') pathName = '/index.html';
    const fileExtension = path.extname(pathName);
    fs.readFile(__dirname + config.root + pathName, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write('Page not found');
            res.end()
        } else {
            res.writeHead(200, {'Content-Type': contentTypes[fileExtension]});
            res.write(data);
            res.end();
        }
    })
})

module.exports = server;

