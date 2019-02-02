/*
    falsy - false, '', undefined, 0, NaN
    truthy - 1,2,'ani', [],{},1,true
*/

var values = [10, 20, 30, '', 40, undefined, 'dct academy', [], {},-1,0,1,true];

values.forEach(function(value){
    if(value){
        console.log(value);
    }
});


function filterValues(value){
    var truthy = [], falsy = [];
    values.forEach(function(value){
        if(value){
            truthy.push(value);
        }else {
            falsy.push(value);
        }
    });
    return [truthy, falsy];
}

console.log(filterValues(values));


function filterObjValues(value){
    var truthy = [], falsy = [];
    values.forEach(function(value){
        if(value){
            truthy.push(value);
        }else {
            falsy.push(value);
        }
    });
    // concise properities and methonds - if property name and variable name is same then you directly can call direclt an varaible name
    // return {truthy: truthy, falsy: falsy}
    return { truthy,falsy }
}

console.log(filterObjValues(values));