// npm install --save mongodb
// installing this package for getting a method isValid()

const { ObjectID} = require('mongodb');

const validateID = (req, res, next) => {
    let id = req.params.id;
    console.log('1st Function')
    if(!ObjectID.isValid(id)){
        res.send({
            notice: 'Invalid Object ID'
        })
    }
    next();
}


module.exports = {
    validateID
}