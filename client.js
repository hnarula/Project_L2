
var socket = io.connect('https://pl2cd.azurewebsites.net:443/'); // for azure
//var socket = io.connect('http://localhost:3000/'); // for local server
function connect() {
    var name = $("#name").val();
    socket.emit('newplayer', { name: name });
}

socket.on('playerconnected', function (data) {
    alert("player connected: " + data.name);
});