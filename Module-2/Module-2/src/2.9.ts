{

    // Conditional types

    type a= number;
    type b= undefined;

    // single conditional
    type x = a extends null ? true : false

    // nested conditional 
    type y = a extends null ?  true : b extends undefined ? undefined : any



    type Shiekh = {

        bike : string ,
        car : string ,
        plain : string

    }


    type checkVechile <T> =  T extends keyof Shiekh ? true : false

    type hasValue = checkVechile<'motor'>
      

}