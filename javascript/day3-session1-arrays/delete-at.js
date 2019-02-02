var players = ['virat', 'rahul', 'sachin'];
function deleteAt(players, index){
    players.splice(index, 1);
    return players;
}
console.log(deleteAt(players, 1));


var cities = ['bangalore','mangalore', 'mysore', 'tumkur'];

function deleteCity(cities, cityName){
    var item = cities.indexOf(cityName);
    if (item >= 0){
        cities.splice(item, 1);
    }return cities;
}

console.log(deleteCity(cities, 'mysore'));