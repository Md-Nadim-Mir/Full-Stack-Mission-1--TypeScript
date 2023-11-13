{

    const findLengthOrSquare=(value : string | number):number=>{

        if(typeof value == 'string'){

            return value.length

        }

        else {
            return value*value
        }

    }

    const result=findLengthOrSquare('Mohammad Abdullah 12345');
    const result1=findLengthOrSquare(16);

    console.log(result,result1)



}