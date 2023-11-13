{

    // Mapped types

    const numberArray : number[]=[1,2,3,4];

    const stringArray = numberArray.map(num=> num.toString());

    console.log(stringArray);


    type AreaNumber= {

        width : number;
        height : number;

    }

    // look up type
    type height = AreaNumber['height']

    type AreaString<T> = {
        [key in keyof T]:T[key]
    }


    const area  : AreaString<{height:string , width : number}>={

        width : 50,
        height : '100',
      

    }

    
}