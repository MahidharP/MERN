var person = {
    //property: value
    //key: value
    //key: string, number, boolean, function, undefined, object, array
    firstName: 'ani',
    lastName: 'srinath',
    city: 'bangalore',
    cities: ['bangalore', 'mysore'],
    skills: ['js', 'py', 'rb'],
    //whenever you assign a function to a property inside an object it is known as a method
    details: function(){
        //console.log(Object.keys(this));
        return this;
    },
    greet: function(type){
        if (type == 'casual'){
            return this.firstName + ' says hi';
        } else if(type == 'formal'){
            return this.firstName + ' says hello';
        }
    },
    // option -1, to use the object inside an function assign this to that and call that inside an function
    languagesKnown: function(){
        var that = this;
        this.skills.forEach(function(skill){
            console.log(that.firstName + ' knows ' + skill);
        })
    },
    // option -2 to use .bind(this) when it has to be referred to the current object instead of global variable.
    livedIn: function(){
        this.cities.forEach(function(city){
            console.log(`${this.firstName} has lived in ${city}`);
        }.bind(this));
    },
    // option -3, ES6
    programming: function(){
        this.skills.forEach((skill)=>{
            console.log(`${this.firstName} knows ${skill}`);
        });
    }
};


console.log(person.details());
console.log(person.greet('casual'));
person.languagesKnown();
person.livedIn();
person.programming();