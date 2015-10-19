// console.log("hi");

//================create deck then shuffle===========
var deck = [];
var suits = ['Clubs','Diamonds','Hearts','Spades'];
var names = ["2","3","4","5","6","7","8","9","10"];
var faces = ["JACK","QUEEN","KING"];
var aces = ['ACE']

for (var s = 0; s < suits.length; s++) {
	for (var n = 0; n < names.length; n++) {
		deck.push( { name: names[n], suit: suits[s], value: n + 2 } )
	};	

	for (var f = 0; f < faces.length; f++) {
		deck.push( { name : faces[f], suit: suits[s], value: 10})
	};

	deck.push( { name: "ACE", suit: suits[s], value: 1});

};

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var shuffledDeck = shuffle(deck);

console.log(shuffledDeck);
//==============deck is shuffled and ready to use======================


//========== HIT PLAY BUTTON TO START GAME =====================
var play = function() {

//=========starting hands are created - one card for dealer and two cards for player===============
var dealerHand = [];
var playerHand = [];
var playerValue = 0;
var dealerValue = 0;

var deal = function() {

	dealerHand.push(shuffledDeck.pop());
	playerHand.push(shuffledDeck.pop());
	playerHand.push(shuffledDeck.pop());
}

deal();

console.log(playerHand);
console.log(dealerHand);

for (var i = 0; i < playerHand.length; i++) {	
	playerValue += playerHand[i].value;
};
	console.log(playerValue);


	for (var i = 0; i < dealerHand.length; i++) {	
	dealerValue += dealerHand[i].value;
};
	console.log(dealerValue);
//========= starting hands are createdd and hand values are logged ====================

var hitButton = document.getElementById('hitButton');
                                      
hitButton.addEventListener("click", function(e) {
    
	playerHand.push(shuffledDeck.pop());

	var playerValue = 0;
	for (var i = 0; i < playerHand.length; i++) {	
	playerValue += playerHand[i].value;
};
	console.log(playerValue);

	if(playerValue > 21) {
		alert("You Lose");
		console.log(playerValue);
		play();
	} 
});


var stayButton = document.getElementById('stayButton');
                                      
stayButton.addEventListener("click", function(e) {
    
	while(dealerValue < 17) {

	dealerHand.push(shuffledDeck.pop());
	dealerValue = 0;
	for (var i = 0; i < dealerHand.length; i++) {	
	dealerValue += dealerHand[i].value;
};
	console.log(dealerValue);


// check for winner

	if(dealerValue > 21) {

		console.log(dealerValue)
		alert("You win! Dealer busted!");
		
	};

	if(dealerValue > 16 && dealerValue < 22) {

		if(dealerValue > playerValue) {

			console.log(dealerValue);
			alert("Dealer wins. Dealer has higher value.");

		} else if( dealerValue === playerValue ) {

			console.log(dealerValue);
			alert("PUSH!")
		} else {

			console.log(dealerValue);
			alert("Player wins. Player has higher value.");
			
		}
	}
}
});

// $('#hitButton').addEventListener('click', function () {

// 	playerHand.push(shuffledDeck.pop());

// 	var playerValue = 0;
// 	for (var i = 0; i < playerHand.length; i++) {	
// 	playerValue += playerHand[i].value;
// };
// 	console.log(playerValue);

// 	if(playerValue > 21) {
// 		alert("You Lose");
// 		console.log(playerValue);
// 		// play();
// 	} 
// });


//====== when hit button is clicked =================
// var hit = function() {

// 	while(playerHand < 17 & playerHand < 22) {

// 	playerHand.push(shuffledDeck.pop());

// 	var playerValue = 0;
// 	for (var i = 0; i < playerHand.length; i++) {	
// 	playerValue += playerHand[i].value;
// };
// 	console.log(playerValue);

// 	if(playerValue > 21) {
// 		alert("You Lose");
// 		console.log(playerValue);
// 		// play();
// 	} 
// }
// }

// hit();

//=========== hit button ========================


//============ STAY button starts dealer loop =============

// var stay = function() {

// 	while(dealerValue < 17 & dealerValue < 22) {

// //  pop a card and update dealer value
// 	dealerHand.push(shuffledDeck.pop());
// 	dealerValue = 0;
// 	for (var i = 0; i < dealerHand.length; i++) {	
// 	dealerValue += dealerHand[i].value;
// };
// 	console.log(dealerValue);


// check for winner

// 	if(dealerValue > 21) {

// 		console.log("You win! Dealer busted!");
// 	};

// 	if(dealerValue > 16 & dealerValue < 22) {

// 		if(dealerValue > playerValue) {

// 			alert("Dealer wins. Dealer has higher value.");
// 		} else if(dealerValue === playerValue) {

// 			alert("PUSH!")
// 		} else {
// 			alert("Player wins. Player has higher value.");
// 		}
// 	}
// }
// };

// stay();






// play();


// var stay = function() {

// 	while(dealerHand)
// }

// var bankroll = 1000

// var placeBet = function() {} whole game inside this function



// 	for (var i = 0; i < playerHand.length; i++) {	
// 	playerValue += playerHand[i].value;
	
// };
// 	// playerValue();
// 	console.log(playerValue);

	
	// for (var i = 0; i < dealerHand.length; i++) { 
	// dealerValue += dealerHand[i].value;	
	// };

// deals two cards to player and one card to dealer


// var playerValue = 0
// for (var i = 0; i < playerHand.length; i++) {	
// 	playerValue += playerHand[i].value;
	
// };
// 	console.log(playerValue);

// 	check for blackjack?

// 	var blackjack = function() {

// 		announce winner
// 		bankroll goes up 1.5 of bet
// 	}



// 	var checkForBlackjack = function() {
// 		if(playerValue === 21) {
// 			blackjack();
// 		} else {

// 		}
// 	}

// console.log(dealerHand);

// var playerValue = function() {

// 	for (var i = 0; i < playerHand.length; i++) {
// 	var getValue = 0 
// 	getValue += playerHand[i].value;
// 	return getValue;
// 	}
// 	};

// 	playerValue();
// 	console.log(playerValue);

// 	hit();

// 	playerValue = 0
// 	for (var i = 0; i < playerHand.length; i++) {	
// 	playerValue += playerHand[i].value;
// };
// 	console.log(playerValue);





	// stay function or button?

	// dealer while loop

	

	// console.log(dealerValue);

	// while(dealerValue <= 21 & dealerValue < 17) {

	// 	dealerHand.push(shuffledDeck.pop());
	// }


// var count = 0;
//    for(var i=0, n=array.length; i < n; i++) 
//    { 
//       count += array[i]; 
//    }



// var checkWinner = function() {

// 	if(player[va])
// }

// var hit = function() {

// 	player gets another card
// }

// dealer while loop

// check for winner function

// first is all the player making moves

// dealer if 17 or over it stops

// var deck = [
// 	        { name: "", suit: "", value: 0 }
// 	        //52
// 	       ]

// {
// 	2 Clubs : 2




};

play();






