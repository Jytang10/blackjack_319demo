


class Deck{
    constructor(sourceSuits, sourceValues, targetDom, cardClickCallback){
        this.dom = targetDom;
        this.cards = [];

        for(var suitI = 0; suitI < sourceSuits.length; suitI++){
            for( var valueI = 0; valueI < sourceValues.length; valueI++){
                this.makeCard(sourceSuits[suitI], sourceValues[valueI],cardClickCallback);
            }
        }
        this.shuffle();
    }
    makeCard(suit, value, clickCallback){
        var card = new Card(suit, value, clickCallback);
        this.cards.push( card );
    }
    handleChildCardClick( card ){
        
    }
    shuffle(){
        for( var cardI = this.cards.length-1; cardI>0; cardI--){
            var randomIndex = Math.floor(Math.random() * cardI);
            var temp = this.cards[randomIndex];
            this.cards[randomIndex] = this.cards[cardI];
            this.cards[cardI] = temp;
        }
    }
    deal(){
        var card = this.cards.pop();
        return card;
    }
    remove( card ){
        var cardIndex = this.cards.indexOf( card );
        card.removeDom();
        this.cards.splice(1, cardIndex);
    }
    add( newCard, newClickHandler ){
        if(newCard.constructor !== Card){
            console.error('can only accept card objects');
            return false;
        }
        newCard.changeNewClickHandler( newClickHandler );
        this.cards.push( newCard );
    }
    showCards(){
        var cardDisplay = '';
        for( var cardI = 0 ; cardI < this.cards.length; cardI++){
            var theCard = this.cards[cardI]
            cardDisplay+= theCard.getTotalValue() + ' ';
        }
        cardDisplay = cardDisplay.slice(0,-1);
        return cardDisplay;
    }
    render(){
        var cardDomElements = [];
        for( var cardI = 0; cardI < this.cards.length; cardI++){
            var cardDom = this.cards[cardI].render();
            cardDomElements.push( cardDom );
        }
        this.dom.append( cardDomElements );
    }
}