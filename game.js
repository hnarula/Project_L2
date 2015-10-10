
var Card = function (id) {
    this.id = id;
    this.img = "img/card" + id + ".png";
}

var Deck = function () {
    this.numcards = 16;
    this.cardstack = [];
    this.cardlist = [];
    this.cardlist[0] = new Card(1);
    this.cardlist[1] = new Card(1);
    this.cardlist[2] = new Card(1);
    this.cardlist[3] = new Card(1);
    this.cardlist[4] = new Card(1);
    this.cardlist[5] = new Card(2);
    this.cardlist[6] = new Card(2);
    this.cardlist[7] = new Card(3);
    this.cardlist[8] = new Card(3);
    this.cardlist[9] = new Card(4);
    this.cardlist[10] = new Card(4);
    this.cardlist[11] = new Card(5);
    this.cardlist[12] = new Card(5);
    this.cardlist[13] = new Card(6);
    this.cardlist[14] = new Card(7);
    this.cardlist[15] = new Card(8);
}


Deck.prototype.shuffle = function () {
    for (var i = this.cardlist.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.cardlist[i];
        this.cardlist[i] = this.cardlist[j];
        this.cardlist[j] = temp;
    }
    for (var i = 0; i < this.cardlist.length; i++) {
        this.cardstack.push(this.cardlist[i]);
    }
}


var Player = function (name) {
    this.name = name;
    this.card1 = null;
    this.card2 = null;
    this.active = true;
}

Player.prototype.setUp = function(card) {

}

Player.prototype.draw = function() {
    playerlist[i].card2 = deck.cardstack.pop();
}




//document.getElementById("playercard1").style.backgroundImage = "url('"+ i.img + "')";