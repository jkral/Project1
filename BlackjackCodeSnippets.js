

//========= Shuffle Algorithm ===============
// $(function () {
//     var serverString = "http://source.tutsplus.com/gamedev/authors/JamesTyner/FisherYates/src/images/";
//     var cards = [];
//     var i;
//     for (i = 1; i <= 13; i++) {
//         cards.push("c" + i);
//     }
//     //console.log(cards);
     
//     function drawCards(){
//       $("#holder").empty();
//         for (i = 0; i < cards.length; i++) {
//         $("#holder").append("<img src=" + serverString + cards[i] + ".png/>");
//     }
//     }
//     drawCards();
//     $("#shuffle").on('click', shuffle);
 
//     var theLength = cards.length - 1;
//     var toSwap;
//     var tempCard;
 
//     function shuffle() {
//         console.log("Cards before shuffle:" + cards);
//         for (i = theLength; i > 0; i--) {
//             toSwap = Math.floor(Math.random() * i);
//             tempCard = cards[i];
//             cards[i] = cards[toSwap];
//             cards[toSwap] = tempCard;
//         }
//         console.log("Cards after shuffle: "+cards);
//         drawCards();
//     }
// });
//=====================================

//============ Deck and shuffle =============


// function card(value, name, suit) {
// 	this.value = value;
// 	this.name = name;
// 	this.suit = suit;
// }

// function deck() {
// 	this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
// 	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
// 	var cards = [];

// 	for (var s = 0;  s < this.suits.length; s++) {
// 		for (var n = 0; n < this.names.length; n++) {
// 			cards.push( new card( n+1, this.names[n], this.suits[s] ) );
// 		};
	
// 	};

// 	return cards;
// }

// var myDeck = new deck();
// console.log(myDeck);

// window.onload = function() {

	// for (var i = 0; i < myDeck.length; i++) {
	// 	div = document.createElement('div');
	// 	div.className = 'card';

	// 	if(myDeck[i].suit == 'Diamonds') {
	// 		var ascii_char = '&diams;';
	// 	} else {
	// 		var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
	// 	}
	// 	div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
	// 	document.body.appendChild(div);
	// };


// }

// function shuffle(o) {
// 	for (var j, x, i = o.length; i; j = parseInt(Math.random() * i ), x = o[--i], o[i] = o[j], o[j] = x);
// 		return o;
// 	};

// 	myDeck = shuffle(myDeck);

//===========================================

//================ Codecademy Deck ==========
// // Our deal function will return a random card
// var deal = function() {
//   card = Math.floor(Math.random()*52+1);
//   return card;
// };

// // Deal out our first hand
// var card1 = deal();
// var card2 = deal();

// // This function takes a card as a parameter and returns the value
// // of that card
// var getValue = function(card) {
//   // if its a face card, number should be set to 10        
//     if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12) {
//         return card = 10; 
//     } else if( card % 13 === 1 ) {
        
//         return card = 11;
//     } else {
        
//         return card % 13;
//   // What if it's an ace?

//   // Otherwise, we just want its number value
// }
// }
        
// // Score the hand
// function score() {
//   return getValue(card1) + getValue(card2);
// };


// console.log("You have cards " + card1 + " and " + card2 +
//         " for a score of " + score(card1, card2));
// ===================








