var players = ['virat', 'rahul', 'sachin'];
function insertAt(players, index, ele){
    players.splice(index, 0, ele);
    return players;
}
console.log(insertAt(players, 1, 'dhoni'));