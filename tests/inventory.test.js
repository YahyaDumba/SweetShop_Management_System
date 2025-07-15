// Add sweet to Inventory
const Inventory = require ('../src/Inventory.js');
const Sweet = require('../src/Sweet.js');

test('should add a sweet to the Inventory',()=>{
    const inventory = new Inventory();
    const sweet = new Sweet(1001, 'Kaju Katli','Nut-Based', 50, 20);
    inventory.addSweet(sweet);
    const sweets = inventory.viewSweets();
    expect(sweets.length).toBe(1);
});


// Delete Sweet from Inventory
test('should delete a sweet from the Inventory',()=>{
    const inventory = new Inventory();

    const sweet1 = new Sweet(1001, 'Kaju Katli','Nut-Based', 50, 20);
    const sweet2 = new Sweet(1002, 'Gajar Halwa','Vegetable-Based', 30, 15);

    inventory.addSweet(sweet1);
    inventory.addSweet(sweet2);

    inventory.deleteSweet(1001); //Deleting Sweet on the basis of ID

    const sweets = inventory.viewSweets();
    expect(sweets.length).toBe(1);
    expect(sweets[0].id).toBe(1002);
})


// Searching Sweet from Inventory on the basis of Name
test('should search sweets by name',()=>{
    const inventory = new Inventory();

    const sweets = [
        new Sweet(1001, 'Kaju Katli','Nut-Based', 50, 20),
        new Sweet(1002, 'Gajar Halwa','Vegetable-Based', 30, 15),
        new Sweet(1003, 'Kaju Katli','Milk-Based', 10, 50)
    ];
    
    
    sweets.forEach(sweet=>inventory.addSweet(sweet));

    const result = inventory.searchByName('Kaju Katli');

    expect(result.length).toBe(2);
    expect(result[0].name).toBe('Kaju Katli');
});

// Searching Sweet from Inventory on the basis of Category
test('should search sweets by category',()=>{
    const inventory = new Inventory();

    const sweets = [
        new Sweet(1001, 'Kaju Katli','Nut-Based', 50, 20),
        new Sweet(1002, 'Gajar Halwa','Vegetable-Based', 30, 15),
        new Sweet(1003, 'Kaju Katli','Milk-Based', 10, 50)
    ];

    sweets.forEach(sweet=>inventory.addSweet(sweet));

    const result = inventory.searchByCategory('Milk-Based');

    expect(result.length).toBe(1);
    expect(result[0].category).toBe('Milk-Based');
});