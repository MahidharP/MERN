var players = 'virat virat rahul sachin virat dhoni dhoni dhoni';

function wordFrequency(players){
    person = {};
    player = players.split(' ');
    player.forEach(function(play){
        if(person[play]){
            person[play] += 1;
        }else {
            person[play] = 1;
        }
    });
}

