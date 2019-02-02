function Player(firstName, lastName, runs){
    // properities
    //methods
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.runs = runs || [];

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

var sachin = new Player('sachin', 'tendulkar', [40,50,60]);
console.log(sachin.fullName());
console.log(sachin.calculateAvg());

var virat = new Player('virat', 'Kohli', [40,90,60]);
console.log(virat.fullName());
console.log(virat.calculateAvg());

var MS = new Player('MS', 'Dhoni', [67,90,102]);
console.log(MS.fullName());
console.log(MS.calculateAvg());