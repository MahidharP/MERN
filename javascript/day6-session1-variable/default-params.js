//  ES5

var amount = 100;
var discount = 10;

function findTotal(amount, discount){
    console.log(amount, discount)
    // discount = (typeof discount == 'undefined') ? 7 : discount;
    amount = amount || 0;
    discount = discount || 7;

    console.log(amount, discount);
}

findTotal(amount);
findTotal(amount, discount);
findTotal(undefined, discount);

//   ES6

function finalBill(amount = 0, discount = 0){
    console.log(amount, discount)
}

finalBill();
finalBill(amount);
finalBill(amount, discount);
finalBill(undefined, discount);