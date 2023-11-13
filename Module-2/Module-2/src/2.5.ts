{

    // Function with generics

    const createArray = (param : string) : string []=>{
        return [param]
    }

    createArray('Bangladesh')


    const createArrayGenerics= <T>(param: T) : T[]=>{

         return [param]
    }



    createArrayGenerics<string>('Bangleadesh')


    type user={name:string,age:number}

    createArrayGenerics<user>({name:'rasel',age:45})





    // tupple generate

       
    
    
        const createArrayGenericsTupple= <T,Q>(param1: T , param2 : Q) : [T,Q]=>{
    
             return [param1,param2]
        }
    
    
    
        createArrayGenericsTupple<string,number>('Bangleadesh',345)
    
    
        type user1={name:string,age:number}
    
        createArrayGenericsTupple<string,user1>('Bangladesh',{name:'rasel',age:45})



        //  Example : 

        const addCourseToStudent= <T> (student : T)=>{

            const course = 'Next Level Web Development'


            return {
                ...student , course
            }

        }


        const student1 = addCourseToStudent({name:'rahat',email:'a@gmail',devType: 'Next'})


        const student2 = addCourseToStudent({name:'rddahat',email:'dda@gmail',devType: 'eee'})


        
  



    // 
}