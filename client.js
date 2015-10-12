
displayOverlay("Loading...");
//var socket = io.connect('https://pl2cd.azurewebsites.net:443/'); // for azure
var socket = io.connect('http://localhost:3000/'); // for local server
function connect() {
    var name = $("#name").val();
    socket.emit('newplayer', { name: name });
}

socket.on('playerconnected', function (data) {
    var rowData = '<tr><td>' + data.logdata + '</td></tr>';
    $('#logdata').append(rowData);
    if (data.connection == true) {
       removeOverlay();
    } else {
        alert('Connection Problem');
    }
});

function displayOverlay(text) {
    $("<table id='overlay'><tbody><tr><td>" + text + "</td></tr></tbody></table>").css({
        "position": "fixed",
        "top": "0px",
        "left": "0px",
        "width": "100%",
        "height": "100%",
        "background-color": "rgba(0,0,0,.5)",
        "z-index": "10000",
        "vertical-align": "middle",
        "text-align": "center",
        "color": "#fff",
        "font-size": "40px",
        "font-weight": "bold",
    }).appendTo("body");
}

function removeOverlay() {
    $("#overlay").remove();
}

$(function () {

var text = "            Please Enter Your Name <br/> <input name=\"name\" id=\"name\"></input> <input type=\"submit\" onclick=\"connect();\">";
    displayOverlay(text);
});