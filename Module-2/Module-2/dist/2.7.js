"use strict";
{
    const person = 'ship';
    // example 
    const user = {
        name: 'persian',
        age: 12,
        address: 'ctg'
    };
    const car = {
        name: 'Saudi',
        model: 'ctg'
    };
    const getProperty = (obj, key) => {
        return obj[key];
    };
    let result = getProperty(user, 'name');
    let result1 = getProperty(car, 'model');
}
