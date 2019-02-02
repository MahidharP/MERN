winnerList = [
    { "season": "1999-00", "team": "real madrid", "country": "Spain" }, 
    { "season": "2000-01", "team": "bayern munich", "country": "Germany" },
     { "season": "2001-02", "team": "real madrid", "country": "Spain" }, 
     { "season": "2002-03", "team": "milan", "country": "Italy" }, 
     { "season": "2003-04", "team": "porto", "country": "Portugal" }
];

function countWins(winnerList, country){
    var count = 0;
    winnerList.forEach(function(winner){
        // console.log(winner.country);
        if (winner.country == country){
            count++
        }
    });
    return count;
}

console.log(countWins(winnerList, 'Spain'));