//Object Prototype Function

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Product } = require('./product')

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
        maxlength: 55
    }
});
//Static methods or insrance methods should not use Arrow functions


//defining our own static methods, adding our own behaviour in our project
categorySchema.statics.findAllProducts = function(id){
    let categoryId = id;
    return Product.find({category: categoryId})
}

const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}