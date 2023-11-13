"use strict";
{
    //  Constraints in typescript
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 23, name: 'rahat', email: 'a@gmail', devType: 'Next' });
    const student2 = addCourseToStudent({ id: 45, name: 'rddahat', email: 'dda@gmail', falseType: 'eee' });
}
