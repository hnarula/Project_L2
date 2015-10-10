
var Player = function (name) {
    this.name = name;
    this.card1 = null;
    this.card2 = null;
    this.active = true;
}

Player.prototype.updateCard1 = function(card1) {
    this.card1 = card1;
}

Player.prototype.updateCard2 = function(card2) {
    this.card2 = card2;
}

Player.prototype.updateActive = function(active) {
    this.active = active;
}


//document.getElementById("playercard1").style.backgroundImage = "url('"+ i.img + "')";