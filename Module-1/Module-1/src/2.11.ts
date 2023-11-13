{

    // Outline :  Ternary, optional chaining & nullish coalescing operator


    const age:number=18;

    if(age>=18){
        console.log('Adult')
    }else{
        console.log('Not Adult')
    }


    // Ternary opearator

    const isAdult = age >= 18 ? 'Adult' : 'Not adult';
    console.log({isAdult})



    // nullish coalescing operator

    //  it is used decision making use null or undefined

    
    // const isAuthentic =''
    //  👍 nullish opearator only allow null or undefined 

    const isAuthentic= null;

    const result1= isAuthentic ?? 'Guest'  
    const result2= isAuthentic ? isAuthentic : 'Guest'

    console.log({result1},{result2})



    // optional chaining

    type User={
        name:string,
        address:{
            city:string,
            road: string,
            presentAddress: string
            parmanentAddress?:string
        },
        mobile?:number,
        age:number
    }

  
    const user : User ={
        name: 'Mohammad',
        address:{
            city:'Lake View',
            road: 'Awesome Street',
            presentAddress:'CTG local town'
        },
        mobile:456777,
        age: 25
    }


    // optional chaining use

    const parmanentAddressShow=user?.address?.parmanentAddress ?? 'No Parmanent Address';
    console.log({parmanentAddressShow})



}