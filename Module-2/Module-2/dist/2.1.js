"use strict";
{
    // 
    // type assertion / narrowing : that's typescript ka ami bollay dibo ki type hbay
    let anything;
    anything = 'Next level developer';
    anything = 222;
    // ami sure bolay dita parbo ki type hbay
    // (anything as string).length
    anything.toFixed;
    //  type assertion use for function
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            let convertedValue = parseFloat(value) * 1000;
            return `The value is ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm('1000');
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
