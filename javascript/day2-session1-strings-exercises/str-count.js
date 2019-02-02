// charCount(str, char) ->
// charCount('hello', 'l')

function charCount(str,char){  // parameters
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === char){
            count = count+1;
        }
    }
    return count;
}

var result = charCount('hello','l'); // arguements
console.log(result);