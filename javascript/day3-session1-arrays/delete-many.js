var cities = ['bangalore','mangalore', 'mysore', 'tumkur'];

function deleteMany(cities, names){
    debugger;
    for (var i = 0; i < names.length; i++){
        var item = cities.indexOf(names[i]);
        debugger;
        if (item >= 0){
            cities.splice(item, 1);
        }
    }return cities; 
}

console.log(deleteMany(cities,['mangalore', 'mysore']));

// iffe - immediately invoked function
//immediately exectute.
// repl - read evaluate print loop.