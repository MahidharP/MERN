cartLineItems = [
    {
        id: 1,
        name: 'marker',
        quantity: 1
    },
    {
        id: 2,
        name: 'duster',
        quantity: 2
    },
    {
        id: 1,
        name: 'scale',
        quantity: 1
    }
];

function updateCart(cartLineItems, id, prop, quantity){
    var result = cartLineItems.find(function(num){
        return num.id === id;
    });
    if (result){
        result[prop] = quantity;
    }
    return cartLineItems;
}


console.log(updateCart(cartLineItems, 2, 'quantity', 4));