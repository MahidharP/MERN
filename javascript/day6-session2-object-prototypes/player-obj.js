var sachin = {
    firstName: 'sachin',
    lastName: 'tendulkar',
    runs: [40, 50, 60],
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    calculateAvg: function(){
        var total = 0;
        this.runs.forEach(function(run){
            total += run;
        })
        return total / this.runs.length;
    }
};

console.log(typeof sachin); // 'object'

console.log(sachin.fullName());
console.log(sachin.calculateAvg());

var virat = {
    firstName: 'virat',
    lastName: 'kohli',
    runs: [40, 70, 60],
    fullName: function(){
        return this.firstName + ' ' + this.lastName;
    },
    calculateAvg: function(){
        var total = 0;
        this.runs.forEach(function(run){
            total += run;
        })
        return total / this.runs.length;
    }
};

console.log(virat.fullName());
console.log(virat.calculateAvg());