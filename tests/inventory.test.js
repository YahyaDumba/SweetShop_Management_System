// Add sweet to Inventory
const Inventory = require ('../src/Inventory.js');
const Sweet = require('../src/Sweet.js');

test('should add a sweet to the Inventory',()=>{
    const inventory = new Inventory();
    const sweet = new Sweet(1001, 'Chocolate','Dark', 100, 100);
    inventory.addSweet(sweet);
    const sweets = inventory.viewSweets();
    expect(sweets.length).toBe(1);
});


// Delete Sweet from Inventory
test('should delete a sweet from the Inventory',()=>{
    const inventory = new Inventory();

    const sweet1 = new Sweet(1, 'Chocolate','Dark', 100, 100);
    const sweet2 = new Sweet(2, 'Chocolate','Silk', 200, 50);

    inventory.addSweet(sweet1);
    inventory.addSweet(sweet2);

    inventory.deleteSweet(1); //Deleting Sweet on the basis of ID

    const sweets = inventory.viewSweets();
    expect(sweets.length).toBe(1);
    expect(sweets[0].id).toBe(2);
})
