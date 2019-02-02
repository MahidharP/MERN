var items = [
    {
        name: 'Golden Baby Corn',
        price: 214,
        isVeg: true,
        type: 'Quick Bite'
    },{
        name: 'Veg Kadai',
        price: 187,
        isVeg: true,
        type: 'Main Course'
    },{
        name: 'Chicken Lollipop',
        price: 253,
        isVeg: false,
        type: 'Starters'
    },{
        name: 'Chilli Chicken',
        price: 283,
        isVeg: false,
        type: 'Quick Bite'
    }
]

function findOnlyVeg(items){
    var onlyVeg = [];
    items.forEach(function(item){
        if(item.isVeg === true) {
            onlyVeg.push(item);
        }
    });
    return onlyVeg;
}
console.log(findOnlyVeg(items));

function findByType(items, type){
    var result = [];
    items.forEach(function(item){
        if(item.type === type){
            result.push(item);
        }
    });
    return result;
}
console.log('starters', findByType(items, 'Starters'));
console.log('Quick Bite', findByType(items, 'Quick Bite'));

function findByNonVeg(items){
    var onlyNonVeg = [];
    items.forEach(function(item){
        if(item.isVeg === false){
            onlyNonVeg.push(item);
        }
    });
    return onlyNonVeg;
}
console.log(findByNonVeg(items));
