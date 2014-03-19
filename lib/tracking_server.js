var socketio = require('socket.io');
var io;

exports.listen = function(server) {
  io = socketio.listen(server);
  io.set('log level', 1);

  io.sockets.on('connection', function(socket) {
    console.log('connected id ' + socket.id);

    socket.join('all');
    socket.on('touch', function(obj) {
      socket.broadcast.to('all').emit('draw', obj);
    });

  });
};
