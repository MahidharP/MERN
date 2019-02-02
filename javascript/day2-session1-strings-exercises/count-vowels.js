//countVowels(str);

function countVowels(str) {
    var count = 0;
    var vowels = 'aeiou';
    for (var i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

var result = countVowels('bangalore');
console.log(result);