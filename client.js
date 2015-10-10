
var socket = io.connect('http://localhost:4004');
function connect() {
    var name = $("#name").val();
    socket.emit('newplayer', { name: name });
}

socket.on('playerconnected', function (data) {
    if (data == true) {
        
    }
});