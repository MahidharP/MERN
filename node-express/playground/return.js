function somefunction(){
    return (function(){
        return (function(){
            return 'From inner iffe'
        }())
    }())
}

console.log(somefunction())