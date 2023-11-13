{

    // Never,unknown and nullable type


    // nullable type
    const searching=(value:string|null)=>{
        if(value){
            console.log('searching')
        }else{
            console.log('No searching')
        }
    }

    // searching('Mohammmad');
    searching('')


    


    // unknown type 

    const getSpeedMeterPerSecond=(value : unknown)=>{

        if(typeof value === 'number'){

              const convertSpeed=(value*1000)/3600;
              console.log(`The speed is ${convertSpeed} ms^-1`)
        }

        else if (typeof value === 'string'){
             
            const [quantity,unit]= value.split(" ")
            // console.log(quantity)

            const convertSpeed= (parseFloat(quantity)*1000)/3600;

            console.log(`The speed is : ${convertSpeed} ms^-1`)

        }else {
            console.log('Wrong input')
        }


    }


    // getSpeedMeterPerSecond(5)
    // getSpeedMeterPerSecond(null)
    getSpeedMeterPerSecond(`1000 km^-1`)




    // Never type 


    const throwError=(message:string):never=>{
  
         throw new Error(message)

    }


    throwError('muskil assan heeyeeee')



}