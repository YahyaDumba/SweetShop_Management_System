// Allows us to create sweet items that we passing in Inventory.js

class Sweet{
    constructor(id,name,type, price,quantity){
        this.id=id;
        this.name=name;
        this.type=type;
        this.price=price;
        this.quantity=quantity;
    }
}

module.exports = Sweet;