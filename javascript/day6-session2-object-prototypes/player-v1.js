function Player(){
    // properities
    //methods
    this.firstName;
    this.lastName;
    this.runs;

    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    };

    this.calculateAvg = function(){
        var total = 0;
        this.runs.forEach(function(run){
            total += run;
        });
        return total / this.runs.length;
    }
}

var sachin = new Player();
sachin.firstName = 'Sachin';
sachin.lastName = 'Tendulkar';
sachin.runs = [40,50,60];
console.log(sachin.fullName());
console.log(sachin.calculateAvg());


var virat = new Player();
virat.firstName = 'virat';
virat.lastName = 'kohli';
virat.runs = [40,70,90,100];
console.log(virat.fullName());
console.log(virat.calculateAvg());


var dhoni = new Player();
dhoni.firstName = 'dhoni';
dhoni.lastName = 'MS';
dhoni.runs = [80,90,50,100];
console.log(dhoni.fullName());
console.log(dhoni.calculateAvg());