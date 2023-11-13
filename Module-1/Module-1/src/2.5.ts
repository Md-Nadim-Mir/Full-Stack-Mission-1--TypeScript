{
    // Reference type Object 👍

    const user : {

                    // companyName defined literal that mean 'PH' type is defined
                    companyName:'PH',
                    FirstName: string,
                    // MiddleName is optional
                    MiddleName?: string,
                    LastName:  string,
                    // age is readOnly no change
         readonly   Age:number


    }={

        companyName:'PH',
        FirstName:'Mohammad',
        MiddleName:'',
        LastName:'Abdullah',
        Age:24

    }


    // user.Age=34  👍 can't assign value beacuse it is reand only property
    // user.companyName='ph'  👍 "ph"' is not assignable to type of 'PH'
    
    user.FirstName='Rassuel'




}