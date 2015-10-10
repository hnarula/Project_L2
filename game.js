var nextId = 0;

var Game = function () {}

Game.prototype.gameSetup = function () {
	Deck.reset();
	PlayerList.hardReset();
}

Game.prototype.roundSetup = function (winner) {
	Deck.reset();
	PlayerList.roundReset(winner);
	var n = PlayerList.playerlist.length;
	for(var i = 0; i <= n - 1; i++) {
		PlayerList.playerlist[(PlayerList.currentplayer + i) % n].card1 = i+1;
	}
	Deck.currentcard += n; 
}

Game.prototype.playCard = function (cardId) {
	switch (cardId) {
		case 1:
			//Guess another player's card
			//Sent choose player 
		break;
		case 2:
			//See another player's card
			//Sent choose player 
		break;
		case 3:
			//Compare hands with another player; player with the lower numebr is eliminated.
			//Sent choose player 
		break;
		case 4:
			//Cannot be targeted.
			//Set player to be untargetable.
			//No follow up necessary.
		break;
		case 5:
			//Select himself or another player to discard their hand
			//Sent choose player (including self)
		break;
		case 6:
			//Switch Hands with another player.
			//Sent choose player
		break;
		case 7:
			//Cannot play Prince or King with this in hand.
			//Error if prince or kind in hand
		break;
		case 8:
			//Noob, can't play princess.
			//Princess should be unplayable
		break;
		default:
			alert("this card should not exist!!");
	}
}

Game.prototype.isEndOfRound = function () {
	if(PlayerList.winnerExist) {
		return true;
	} else {
		if(isEndOfDeck) {
			var winner = PlayerList.getWinner();
			if(winner.length == 1) {
				//WINNER IS.
			} else {
				//TIE
			}
		}
	}
}

function Card (id) {
    this.id = id;
    this.img = "img/card" + id + ".png";
}

//Always keep card at index 0 as the burn card;
//Set Currentcard marker to index 1 to know which card to give next.
var Deck = function () {
    this.cardlist = [];
	this.currentcard = 1;
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
}

Deck.prototype.reset = function () {
	this.currentcard = 1;
	this.shuffle();
}

Deck.prototype.isEndOfDeck = function () {
	return this.currentcard == this.cardlist.length;
}

Deck.prototype.getNextCard = function () {
	return this.currentcard++;
}


function Player (name) {
	this.id = nextId++;
    this.name = name;
    this.card1 = null;
    this.card2 = null;
    this.active = false;
	this.eliminated = false;
	//this.point = 0;
}

Player.prototype.roundReset = function () {
	this.card1 = null;
	this.card2 = null;
	this.active = false;
	this.eliminated = false;
}

Player.prototype.hardReset = function () {
	this.point = 0;
	this.roundReset();
}

//True if card 1, false if card 2
Player.prototype.removeCard = function (iscard1) {
	if(iscard1) {
		this.card1 = this.card2;
		this.card2 = null;
	} else {
		this.card2 = null;
	}
}

var PlayerList = function () {
	this.playerlist = [];
	this.currentplayer = null;
}

PlayerList.prototype.roundReset = function (winner) {
	this.currentplayer = winner;
	for(var i = 0; i <= this.playerlist.length -1; i++) {
		this.playerlist[i].roundReset();
	}
}
PlayerList.prototype.hardReset = function () {
	this.currentplayer = null;
	for(var i = 0; i <= this.playerlist.length -1; i++) {
		this.playerlist[i].hardReset();
	}
}

PlayerList.prototype.nextPlayer = function () {
	do {
		this.currentplayer = ++this.currentplayer % this.playerlist.length;
	} while (this.playerlist[this.currentplayer].eliminated)
}

PlayerList.prototype.findPlayerIndex = function (id) {
	for(var i = 0; i <= this.playerlist.length -1; i++) {
		if(this.playerlist[i].id == id)
			return i;
	}
	return null;
}

PlayerList.prototype.addPlayer = function (name) {
	this.playerlist.push(new Player(name));
}

//True if card1, false if card 2
PlayerList.prototype.removeCard = function (pid, isCard1) {
	this.playerlist[this.findPlayerIndex(pid)].removeCard(isCard1);
}

PlayerList.prototype.addCard = function (pid, cid) {
	this.playerlist[this.findPlayerIntex(pid)].card2 = cid;
}

PlayerList.prototype.winnerExist = function() {
	var winner = false;
	for(var i = 0; i <= this.playerlist.length -1; i++) {
		if(!this.playerlist[i].eliminated) {
			if(winner) {
				return false;
			} else {
			    winner = true;
			}
		}
	}
	
	return winner;
}

PlayerList.prototype.getWinner = function () {
	var remainingPlayers = [];
	for(var i = 0; i <= this.playerlist.length -1; i++) {
		if(!this.playerlist[i].eliminated) {
			remainingPlayers.push(i);
		}
	}
	
	var highest = 0;
	for(var i = 0; i <= this.remainingPlayers.length -1; i++) {
		var current = Deck.cardlist[this.playerlist[this.remainingPlayers[i]].card1].id;
		if( current > highest) {
			highest = current;
			remainingPlayers.splice(0, i);
			i = 0;
		} else {
			remainingPlayers.splice(i, 1);
			i--;
		}
	}
	
	return remainingPlayers;
}

//document.getElementById("playercard1").style.backgroundImage = "url('"+ i.img + "')";