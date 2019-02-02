var tasks =[];
function Task(data){
    this.title = data.title || 'task name';
    this.status = 'open'; // when it has to take default value while creating
    this.createdAt = new Date(); // gives Today's date 
    this.dueDate = data.dueDate || new Date();
    this.save = function(){
        tasks.push(this);
        return this;
    };
    this.destroy = function(){
        index = tasks.indexOf(this);
        tasks.splice(index,1);
    }
    this.markAsComplete = function(){
        this.status = 'completed';
    };
    this.isOverDue = function(){
        return this.dueDate < new Date() && this.status == 'open';
    }

    this.details = function(){
        return `${this.title} - ${this.status} - ${this.dueDate}`;
    }
}

Task.all = function(){
    return tasks;
}

Task.count = function(){
    return tasks.length;
}

Task.openTasks = function(){
    return tasks.filter(function(task){
        return task.status == 'open';
    })
}

Task.listOverDue = function(){
    return tasks.filter(function(task){
        if(task.status == 'open' && task.dueDate < new Date()){
            return tasks;
        }
    })
}


var t1 = new Task({title: 'read a book', status: 'open', dueDate: new Date("9-30-2018")});
t1.markAsComplete();
t1.save();
console.log(t1.isOverDue());

var t2 = new Task({title: 'Meet grandparents', status: 'open', dueDate: new Date("9-29-2018")}); 
t2.save();

var t3 = new Task({title: 'Go for a walk', status: 'open', dueDate: new Date("9-29-2018")});
t3.save();
t3.destroy();
console.log('Total Tasks', Task.count());

Task.all().forEach(function(task){
    console.log(task.details());
});


console.log('Total open tasks', Task.openTasks().length);
// 

console.log('Total OverDue Tasks', Task.listOverDue().length);
