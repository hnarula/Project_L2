/// <reference path="game.js" />
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

var conn = 0;
var playerlist = [];
require(__dirname+'/game.js');

io.on('connection', function (socket) {
    socket.on('my other event', function (data) {
        var newPlayerName;
        if (conn == 0) newPlayerName = "Dollar";
        if (conn == 1) newPlayerName = "Cassie";
        if (conn == 2) newPlayerName = "Seb";
        if (conn == 3) newPlayerName = "Vero";
        socket.emit("newconnection", { name: newPlayerName });
        playerlist[newPlayerName] = [conn];
        socket.emit("newplayer", Object.keys(playerlist));
        socket.broadcast.emit("newplayer", Object.keys(playerlist));
        conn++;
    });

    if (conn == 4) {
        socket.broadcast.emit("test", { test: "test" });
    }


});