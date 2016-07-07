/**
 * Created by ishi on 7/6/16.
 */



function Deck() {
    //private variable
    var spade = '\u2660';
    var heart = '\u2665';
    var diamond = '\u2666';
    var club = '\u2663';
    //public variable
    this.deck = [];

    function cardshuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    // a method to create a a deck of 52 cards.
    this.createDeck = function() {
        var suits = ['spade', 'heart', 'diamond', 'club'];
        var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        for(var i = 0; i < suits.length; i++) {
            for(var j = 0 ; j < cards.length ; j++) {
                var str = suits[i] +" "+ cards[j];
                this.deck.push(str);
            }
        }
        console.log(this.deck);
        return this.deck;
    };
    this.shuffleDeck = function () {
        this.deck = cardshuffle(this.deck);
        console.log(this.deck);
    };
    this.resetDeck = function () {
        this.deck = [];
        this.createDeck();
    };
    this.dealCard = function () {
        if(this.deck.length > 0) {
            this.shuffleDeck();
            removedcard = this.deck.shift();
            console.log(removedcard);
            return this.deck.shift();
        }
        else
            console.log(null);
    };
    this.draw = function (n) {
        var card;
        if(n > 0 && n < this.deck.length) {
            card = this.deck[n];
            this.deck.splice(n, 1);
        }
        else
            console.log(null);
        console.log(card);
    };


}

Deck.prototype.displayDeck = function () {
    console.log(this.deck)

}



// player constructor class
function PlayerConstructor(name, deck) {
    this.name = name;
    this.hand = [];

    // take card method
    this.takeCard = function () {
        var handCard = deck.dealCard();
        this.hand.push(handCard);
    }

    // discard method
    this.discard = function (n) {
        var card;
        console.log(this.deck);
        if(n > 0 && n < this.hand.length) {
            card = this.hand[n];
            this.hand.splice(n, 1);
        }
        else
            console.log(null);
        console.log(card);
    }
}

var newDeck = new Deck();

var player1 = new PlayerConstructor('Ash', newDeck);
var player2 = new PlayerConstructor('Hoyan', newDeck);

// display deck
console.log('original')
newDeck.createDeck();
newDeck.displayDeck();
console.log('shuffle')
newDeck.shuffleDeck();
console.log('reset');
newDeck.resetDeck();
newDeck.displayDeck();
newDeck.dealCard();
console.log('removed');
newDeck.displayDeck();
console.log('draw');
newDeck.draw();
player1.takeCard();
player1.takeCard();
player1.takeCard();
player1.takeCard();
player1.takeCard();
console.log(player1.hand);
player1.discard(2);
console.log(player1.hand);
player1.discard(3);
console.log(player1.hand);





