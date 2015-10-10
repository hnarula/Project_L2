
var socket = io.connect('https://localhost:3000');
function connect() {
    var name = $("#name").val();
    socket.emit('newplayer', { name: name });
}

socket.on('playerconnected', function (data) {
    if (data == true) {
        
    }
});