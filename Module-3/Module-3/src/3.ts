{
    // video : 3 start 

    // Type guard using typeof & in


    // typeof use
    type alpha= string|number;

    const add = (param1 :alpha , param2 : alpha):alpha=>{

        if( typeof param1==='number' && typeof param2==='number'){
            return param1+param2
        }


        else {
            return param1.toString() + param2.toString()
        }

        
    }


    console.log(add('34',23))



    // in use 

    type normal={
        name:string;

    }


    type admin={
        name : string;
        role : string;
    }


    const Check=(user : normal | admin)=>{

        if( 'role' in user){
            return `User is ${user.name} and role is ${user.role}`
        }

        else {
            return `User is ${user.name} `
        }

    }

    const NormalUser :normal={
        name:'Normal  User '
    }

    const AdminUser :admin={
        name:'Admin User',
        role:'Administrator'
    }

    console.log(Check(NormalUser));
    console.log(Check(AdminUser));



    // video : 3 end
}