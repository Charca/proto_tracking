var socket = io.connect();

$(document).ready(function() {
  $canvas = $('.canvas');
  $canvas.on('click', function(evt) {
    socket.emit('touch', {
      x: evt.offsetX,
      y: evt.offsetY
    });
  });

  socket.on('draw', function(obj) {
    drawCircle(obj.x, obj.y, '.canvas');
  });
});



// Helper functions
function drawCircle(x, y, container) {
  container = (!container) ? 'body' : container;
  var circle = $('<div class="touch-indicator"></div>');
  circle.css({
    'position': 'absolute',
    'top': y,
    'left': x
  });

  $(container).append(circle);
}
