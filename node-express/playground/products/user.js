function User(dat){
    this.username = dat.username;
    this.name = dat.email;
    this.details = function(){
        return `${this.username} ${this.name}`;
    }
}

module.exports = {
    User
}

