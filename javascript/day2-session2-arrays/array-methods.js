// // push(), unshift()
// //pop(), shift()

// var fruits = ['water melon', 'apple', 'strawberry'];

// // add an element at a certain index
// fruits.splice(1, 0, 'banana');
// console.log(fruits);

// // works well if the index is known
// // removes an element from an certain index 
// fruits.splice(2,1);
// console.log(fruits);

// // If the indec is not known, but the value is known, you first find the index and then use the splice method

// var names = ['ramesh', 'suresh', 'veeresh', 'ganesh', 'mahesh'];
// var index = names.indexOf('ganesh');
// names.splice(index, 1);
// console.log(names);


var players = ['sachin', 'virat', 'dhoni'];

function insertInto(players, name, replace){
    var index = players.indexOf(name); 
    if (index !== -1){
        players.splice(index, 0, replace);
    } else {
        players.push(replace);
    }
    return players;
}
console.log(insertInto(players, 'virat', 'sehwag'));