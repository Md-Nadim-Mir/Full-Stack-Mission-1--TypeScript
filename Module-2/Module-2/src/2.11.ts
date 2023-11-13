{
    // Utility types



    type person={
        name: 'Mohammad',
        age : 25,
        job : 'Developer',
        email: 'mdnadimmir50@gmail.com',
        phone?:number
    }

    // pick type 
   type nameAgeJob = Pick<person,"name"|"age"|"job">

    //  omit type
    type contract = Omit<person,"name"|"age"|"job">  

    // optional property required type
     type personRequired = Required<person>

    //  Partion : required converted partial
     type  partialOptional= Partial<person>


    //  readonly

    type readOnly = Readonly<person>

    // record 

    type obj= Record<string,string>

    const P1: obj = {
        // string : string
        a:'d',
        b:' boolean'
    }


    //  empty object
    const emptyObj : Record<string,unknown>={};

}