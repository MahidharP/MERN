var tag = {
    value: 'travel explore discover',
    generateHashTag: function(){
        var words = this.value.split(' ');
        var output = '#';
        words.forEach(function(word){
            output += word[0].toUpperCase() + word.slice(1);
        });return output;
    }
}

console.log(tag.generateHashTag());