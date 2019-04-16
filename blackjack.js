

class BlackJackGame{
    constructor(){
        this.cardConfigData = {
            suits: ['heart','club','spade', 'diamond'],
            values: ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        }
        this.dealerDeck = null;
        
        this.playing = true;
        this.handleDeckCardClick = this.handleDeckCardClick.bind( this );
        this.playerHand = new Deck([],[], $('#playerArea .hand'), this.handleDeckCardClick);
    }
    createDealerDeck(){
        this.dealerDeck = new Deck(this.cardConfigData.suits, this.cardConfigData.values, $("#mainDeck"), function(){});
    }
    handleDeckCardClick( card ){
        console.log('got clicked: ', card);
        this.playerHand.remove( card );
    }
    dealCardsToPlayer( count ){
        for( var cardI = 0; cardI < count; cardI++){
            var cardFromDeck = this.dealerDeck.deal();
            this.playerHand.add( cardFromDeck, this.handleDeckCardClick );
        }
    }
    render(){
        var playerDeckDom = this.playerHand.render();
    }
}