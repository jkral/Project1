console.log("hi");

var namesRandom = Math.floor(Math.random() * 13 + 1)
var suitsRandom = Math.floor(Math.random() * 4 +1)

var shuffledDeck = {};
var deck = [];
var suits = [' Clubs',' Diamonds',' Hearts',' Spades']
var names = ["2","3","4","5","6","7","8","9","10","JACK","QUEEN","KING","ACE"]

for (var i = 0; i < suits.length; i++) {
	for (var j = 0; j < names.length; j++) {

		var namesRandom = Math.floor(Math.random() * 13)
		var suitsRandom = Math.floor(Math.random() * 4)
		deck.push(names[namesRandom] + suits[suitsRandom])
		
	};
	
};

console.log(deck);












