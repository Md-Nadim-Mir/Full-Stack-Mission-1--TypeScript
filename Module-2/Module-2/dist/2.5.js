"use strict";
{
    // Function with generics
    const createArray = (param) => {
        return [param];
    };
    createArray('Bangladesh');
    const createArrayGenerics = (param) => {
        return [param];
    };
    createArrayGenerics('Bangleadesh');
    createArrayGenerics({ name: 'rasel', age: 45 });
    // tupple generate
    const createArrayGenericsTupple = (param1, param2) => {
        return [param1, param2];
    };
    createArrayGenericsTupple('Bangleadesh', 345);
    createArrayGenericsTupple('Bangladesh', { name: 'rasel', age: 45 });
    //  Example : 
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'rahat', email: 'a@gmail', devType: 'Next' });
    const student2 = addCourseToStudent({ name: 'rddahat', email: 'dda@gmail', devType: 'eee' });
    // 
}
