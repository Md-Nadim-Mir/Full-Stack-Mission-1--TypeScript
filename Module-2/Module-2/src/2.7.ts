{

    // Constraint using key of opearator


    type vehcle = {

        bike : string;
        car : string;
        ship : string;

    }


    type Owner = 'bike' | 'car' | 'ship'

    type Owner2 = keyof vehcle;


    const person : Owner2 = 'ship'


    // example 

    const user={
        name:'persian',
        age: 12,
        address:'ctg'
    }

    const car={
        name:'Saudi',
        model:'ctg'
    }

    const getProperty =<X,Y extends keyof X> (obj: X , key : Y)=>{

        return obj[key]

    }

    let result=getProperty(user,'name')
    let result1=getProperty(car,'model')



}