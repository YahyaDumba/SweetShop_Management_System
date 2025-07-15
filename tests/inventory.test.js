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