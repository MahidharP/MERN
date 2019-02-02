require('../ecommerce-backend/config/db');

const faker = require('faker');
const { Category } = require('../ecommerce-backend/app/models/category');
const { Product } = require('../ecommerce-backend/app/models/product');


Category.find().then((categories) => {
    let category
  for(let i = 0; i < 1000; i++){
    category = categories[faker.random.number(categories.length - 1)];
    // console.log(category);
    let fakerProduct = {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      stock: faker.random.number(100),
      codeEligible: faker.random.boolean(),
      category: category._id
    }
    let product = new Product(fakerProduct);
    product.save()
      .then(product => console.log(product))
      .catch(err => console.log(err))
  }
})