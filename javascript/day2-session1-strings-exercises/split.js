// var sentence = 'now is the time for all good people'

// console.log(sentence.split(' '));

// var taggings = 'travel, food, tourism, recreation, activity';
// var tags = taggings.split(', ');
// console.log(tags);

// var languages = 'js rb py';
// console.log(languages.split('-'));


function countWords(sentence) {
    var words = sentence.split(' ');
    return words.length;
}
var sentence = 'now is the time for all good people'
console.log(countWords(sentence));



function countChar(sentence) {
    var words = sentence.split('');
    return words.length;
}
var sentence = 'now is the time for all good people'
console.log(countChar(sentence));