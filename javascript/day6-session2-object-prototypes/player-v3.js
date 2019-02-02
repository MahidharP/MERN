function Player(data){
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.runs = data.runs || [];

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

var sachin = new Player({firstName:'sachin', lastName: 'tendulkar', runs: [40,50,60]});
console.log(sachin.fullName());
console.log(sachin.calculateAvg());

var virat = new Player({firstName: 'virat', lastName: 'Kohli', runs: [40,90,60]});
console.log(virat.fullName());
console.log(virat.calculateAvg());

var MS = new Player({firstName: 'MS', lastName: 'Dhoni', runs: [67,90,102]});
console.log(MS.fullName());
console.log(MS.calculateAvg());