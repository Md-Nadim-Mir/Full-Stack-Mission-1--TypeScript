{

    // outline :  Type alias in typescript

    // Type alias in object 

    type Student={
        name:string,
        age: number,
        gender: string,
        location: string,
        phone?:number


    }

    let student1:Student={
        name:'Abdullah',
        age:24,
        gender:'male',
        location:'PR',
        phone: 345555
    }

    let student2 : Student ={
        name:'Mohamad',
        age:25,
        gender:'male',
        location:'PR'

        // phone is optional 
    }

    type A=string;
    type B= boolean;

    let a:A='Mohammad'
    let b:B=true;

    // Function use Alias

    type Add=(num1 : number , num2 : number)=> number;

    let add :Add=  (num1 , num2) => num1 +num2;
}