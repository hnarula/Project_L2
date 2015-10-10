var express = require("express"),
    app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

server.listen(3000);
app.use("/Scripts", express.static(__dirname + '/Scripts'));
app.use("/", express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

var conn = 0;
var playerlist = [];
});