{

    // outline :  Spread operator ,  Rest operator , distructuring


    // Spread Operator

    let bros1:string[]=['Wobaidul','Kayes','Sifat'];
    let bros2: string[]=['Nobin','Ratul','Rabbi'];

    // bros1.push(bros2) 👍 wrong way cause bros2 all element 
    // inside to the bors1 array.

    // Right way 👍 use distructuring
    bros1.push(...bros2)



    let mentors1={
        
        TypeScript : 'Abedin',
        Redux : 'Mir',
        DBMS : 'Mizan'
    }


    let mentors2={

        Prisma : 'Linkon',
        Next :'Tonmoy',
        Cloud : 'Nahid'
    }


    let mentors={
        ...mentors1,
        ...mentors2
    }


    // Learn Rest Operator

    let greetingFriends=(...friends:string[])=>{
      
         friends.forEach((friend:string)=> console.log(`Hi , ${friend}`))
          
    }

    greetingFriends('abul','babul','kabul','sabul')

    
}