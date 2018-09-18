console.log('logger.js is now loaded, Mike -1');

export class Name {
    constructor(firstname, lastame) {
        
        this._lastame = lastame;
        this._firstname = firstname;
    }

    get lastame() {
        return `${this._lastame}-fromJS`;
    }

    set lastame(value) {
        this._lastame = value;
    }



    get firstname() {
        return this._firstname;
    }

}


const name = new Name("Mike", "Mitterer");

console.log(name.firstname);

export function showSomeValues({ text = "This is jus a value"} = {}) {
    return `-${text}-`
}


