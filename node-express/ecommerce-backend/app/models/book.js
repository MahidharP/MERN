function Book(){

}

Book.data = [
    {id: 1, name: 'The Monk Who Sold His Ferrari', author: 'Robin Sharma' },
    {id: 2, name: 'Half GirlFriend', author: 'Chetan Bhagat'}
];

Book.all = function(){
    return Book.data;
}

Book.findById = function(id){
    return Book.data.find(book => book.id == id);
}

module.exports = {
    Book
};