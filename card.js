

class Card{
    constructor(suit, value, clickCallback){
        this._suit = suit;
        this.clickCallback = clickCallback;
        this._value = value;
        this.domPieces = {
            container: null,
            suit: null,
            value: null
        }
        this.handleClick = this.handleClick.bind( this );
    }
    get suit(){
        console.log('automatic get')
        return this._suit;
    }
    set suit( newSuit ){
        var allowed = ['heart','club','diamond','spade'];
        if(allowed.indexOf( newSuit ) === -1 ){
            console.error('cannot set that suit type : ' + newSuit);
            return;
        }
        console.log('automatic set')
        this._suit = newSuit;
    }
    getTotalValue(){
        return this._value + '-' + this._suit;
    }
    handleClick(){
        console.log('child card got clicked');
        this.clickCallback( this );
    }
    changeNewClickHandler( clickHandler ){
        this.clickCallback = clickHandler;
    }
    removeDom(){
        this.domPieces.container.remove();
    }
    render(){
        var translation = {
            'heart': { entity: '&hearts;', color: 'red'},
            'diamond': { entity: '&#9670;', color: 'red'},
            'spade': { entity: '&spades;', color: 'black'},
            'club': { entity: '&clubs;', color: 'black'}
        }
        this.domPieces.container = $("<div>",{
            'class': 'cardContainer'
        });
        this.domPieces.container.click( this.handleClick );
        this.domPieces.suit = $("<div>",{
            'class': 'suit',
            html: translation[this._suit].entity,
            css: {
                color: translation[this._suit].color
            }
        })
        this.domPieces.value = $("<div>",{
            'class': 'value',
            text: this._value,
            css: {
                color: translation[this._suit].color
            }
        })
        this.domPieces.container.append(this.domPieces.suit, this.domPieces.value);
        return this.domPieces.container;
    }
}