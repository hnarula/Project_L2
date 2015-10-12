var express = require('express');
var http = require('http');
var app = express();


app.set('port', process.env.PORT || 3000);
var httpServer = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


app.use("/Scripts", express.static(__dirname + '/Scripts'));
app.use("/", express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

var io = require('socket.io').listen(httpServer);
io.on('connection', function (socket) {
    socket.on('newplayer', function (data) {
        // do some player validation
        var logdata = "Player " + data.name +  " has connected.";
        socket.emit('playerconnected', { logdata: logdata, connection: true }); // sends to the new player
        socket.broadcast.emit('playerconnected', { logdata: logdata, connection: true }); // sends to every client connected
    });
});