
var currentInventory = 
[
    { name: "HTC", stock: 25 }, 
    { name: "Nokia", stock: 1000 }, 
    { name: "Samsung", stock: 50 }, 
    { name: "Sony", stock: 10 }, 
    { name: "Apple", stock: 15 }
];

var newInventory = 
[
    { name: "LG", stock: 5 }, 
    { name: "Sony", stock: 10 }, 
    { name: "Samsung", stock: 5 }, 
    { name: "Apple", stock: 15 }
];

function updateInventory(currentInventory, newInventory){
    console.log('current Inventory', currentInventory);
    console.log('new Inventory', newInventory);
    newInventory.forEach(function(item){
        var itemFound = currentInventory.find(function(currentItem){
          return currentItem.name == item.name;  
        });
        if(itemFound){
            itemFound.stock += item.stock;
        } else {
            currentInventory.push(item);
        }
    });
    return currentInventory;
}
var updatedInventory = updateInventory(currentInventory, newInventory);
console.log(updatedInventory);