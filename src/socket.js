const server = require('./server.js');

class Socket {
    constructor() {
        
    }

    listen = port => {
        this.server = server.listen(port);
        this.io = require('socket.io')(this.server);
        this.setup();
    }

    setup = () => {
        this.io.on('connection', socket => {
            console.log('a user connected');
            socket.on('disconnect', () => {
               console.log('user disconnected'); 
            });
        });
    }
}

module.exports = Socket;

