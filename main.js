

$(document).ready( initializeApp );

var blackjack;

function initializeApp(){
    blackjack = new BlackJackGame();
    blackjack.createDealerDeck();
    blackjack.dealCardsToPlayer(2);
    blackjack.render();
}