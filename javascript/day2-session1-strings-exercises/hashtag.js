var tag = 'eat code sleep';

function makeTag(tag){
    var result = '#';
    var words = tag.split(' ');
    for(i = 0; i < words.length; i++){
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return result;
    words.forEach(function(w){
        result += w.charAt(0).toUpperCase() + w.slice(1);
    });
}

console.log(makeTag(tag));