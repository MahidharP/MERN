var items = [
    {
        name: 'Chicken Lollipop',
        price: 253,
        isVeg: false,
        quantity: 2,
        type: 'Starters'
    },{
        name: 'Chilli Chicken',
        price: 283,
        isVeg: false,
        quantity: 3,
        type: 'Quick Bite'
    }
];

function cartTotal(items){
var totalCart = [];
var count = 0;
var total = 0;

items.forEach(function(item){
    count += item.quantity;
    total += item.quantity  * item.price;
});

totalCart.push(count, total);
return totalCart;
}

console.log(cartTotal(items));