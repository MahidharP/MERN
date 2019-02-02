var vehicle = {
    name: 'swift',
    type: 'car',
    currentPosition: 0,
    getPosition: function(){
        return this.currentPosition;
    },
    move: function(){
        this.currentPosition = this.currentPosition  + 1;
        return this.currentPosition
    },
    reset: function(){
        return this.currentPosition =0;
    }
}

console.log(vehicle.getPosition());
console.log(vehicle.move());
console.log(vehicle.reset());