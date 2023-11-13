{
    // interface : object er jonno use koray balo

    // alias jonno type use koray hoy


    type user1 = {
        name: string;
        roll: number
    }

    interface user2 {
        name: string;
        roll: number
    }


    // extend property value use alias use intersection method

    type addAge1 = user1 & { age: string };


    // extent property value use interface

    // interface use for object

    interface addAge2 extends user2 {

        age: string
    }


    const olduser: addAge1 = {
        name: 'nadim',
        roll: 23,
        age: '34'
    }

    const Newuser: addAge2 = {
        name: 'putin',
        roll: 23,
        age: '64'
    }



    //  array ---- > interface ---- > object  use for 

    // interface use for array

    type money = number[];

    interface money1 {
        [index: number]: number
    }

    const amount: money = [2, 34, 56, 35];

    const amount1: money1 = [45, 23, 12, 67]



    //    interface use for function

    type Add = (num1:number , num2:number)=>number
    const add : Add = (num1,num2)=>  (num1+num2);


    interface Sub {

        (num1 : number , num2 : number):number

    }

    const sub:Sub=(num1,num2)=>(num1+num2)



}