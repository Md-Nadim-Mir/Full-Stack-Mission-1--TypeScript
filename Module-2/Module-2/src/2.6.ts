{

    //  Constraints in typescript

    const addCourseToStudent= <T extends {   id: number; name: string;email:string;}> (student : T)=>{

        const course = 'Next Level Web Development'


        return {
            ...student , course
        }

    }


    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({id:23,name:'rahat',email:'a@gmail',devType: 'Next'})


    const student2 = addCourseToStudent({id:45,name:'rddahat',email:'dda@gmail',falseType: 'eee'})

}