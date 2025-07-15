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

    searchByName(name){
        return this.sweets.filter(sweet=>sweet.name && sweet.name.toLowerCase() === name.toLowerCase()); //Searches sweets by name
    }

    searchByCategory(category){
        return this.sweets.filter(sweet=>sweet.category && sweet.category.toLowerCase() === category.toLowerCase()); //Searches sweets by category
    }

    searchByPriceRange(minPrice, maxPrice){
        return this.sweets.filter(sweet=>typeof sweet.price =='number' && sweet.price >= minPrice && sweet.price <= maxPrice); //Searches sweets by price
    }
}

module.exports = Inventory;