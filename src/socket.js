import io from 'socket.io';
import server from './server';

class Socket {
  listen(port) {
    this.server = server.listen(port);
    this.io = io(this.server);
    this.setup();
  }

  setup() {
    this.io.on('connection', (socket) => {
      console.log('user connected');
      socket.on('disconnect', () => {
        console.log('user disconnected');
      });
    });
  }
}

export default Socket;
