// Handles Adding, Viewing, Deleting Sweets 

class Inventory{
    constructor(){
        this.sweets = []; //Stores all sweets in an array
    }

    addSweet(sweet){
        this.sweets.push(sweet); //Adds new sweet to the list
    }

    viewSweets(){
        return this.sweets; //Returns all sweets
    }
}

module.exports = Inventory;