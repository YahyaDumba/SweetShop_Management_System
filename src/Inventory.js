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

    deleteSweet(id){
        this.sweets = this.sweets.filter(sweet => sweet.id !== id); //Deletes sweet by id
    }
}

module.exports = Inventory;