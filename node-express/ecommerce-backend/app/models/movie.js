function Movie(){

}

Movie.data = [
    {id: 1, name: 'Passenger', genre: 'Space'},
    {id: 2, name: 'Vampire Dairies', genre: 'Fiction'}
];

Movie.all = function(){
    return Movie.data;
}

Movie.findById = function(id){
    return Movie.data.find(movie => movie.id == id);
}

module.exports = {
    Movie
};