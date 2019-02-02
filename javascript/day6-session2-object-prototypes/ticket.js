var axios = require('axios');

var url = 'http://dct-api-data.herokuapp.com/tickets';
var key = '90f66164c2fb6511';


function Ticket (data){
    this.name = data.name || '';
    this.department = data.department || '';
    this.priority = data.priority || '';
    this.message = data.message || '';

    this.viewDetails = function (){
        return this.name + ' - ' + this.department + ' - ' + this.priority + ' - ' + this.message;
    };
    this.toJSON = {
        name: this.name,
        department: this.department,
        priority: this.priority,
        message: this.message
    }
    this.save = function(){
        axios.post(`${url}?api_key=${key}`, this.toJSON).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }
}

var t1 = new Ticket({
    name: 'Mahidhar',
    department: 'Technical',
    priority: 'High',
    message: 'Need Support'
});

console.log(t1.viewDetails());
t1.save();