{
    // 
    // type assertion / narrowing : that's typescript ka ami bollay dibo ki type hbay

    let anything: any;

    anything= 'Next level developer';

    anything= 222;


    // ami sure bolay dita parbo ki type hbay

    // (anything as string).length


    (anything as number).toFixed



    //  type assertion use for function

    const kgToGm = (value : string | number):string|number|undefined=>{

        if(typeof value==='string'){
            let convertedValue= parseFloat(value)*1000;
            return `The value is ${convertedValue}`
        }

        if(typeof value === 'number'){
            return value*1000;
        }

    }


    const result1= kgToGm(1000) as number
    const result2= kgToGm('1000') as string


    // 

    type customError={

        message : string;

    }

    try{

    }catch(error){
        console.log(( error as customError).message)
    }
}