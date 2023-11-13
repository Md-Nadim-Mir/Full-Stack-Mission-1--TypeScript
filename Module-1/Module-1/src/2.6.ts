{

    // Learning Function


    // Normal Function

    function add(num1:number , num2:number =20):number{

        return num1 + num2;
    }

    add(2,5)




    // Arrow Function


    let sub=(num3:number , num4:number):number=>{
        
        return num3 + num4;
    }



    // object ---> Function ---> Method

    const user={
        name:'abdullah',
        balance:0,
        addBalance(balance:number):string{

            return `My balance is ${this.balance+balance}`
        }
    }


    // Array

    const arr : number[]=[4,5,6];

    const newArr= arr.map((a:number):number=>(a*a))
    


}