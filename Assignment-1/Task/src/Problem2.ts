{

    interface Person{
        address?:Address,
        phone?:number
    }

   interface Address{
        city:string,
        street:string
    }

    const getAddressCity =(person : Person)=>{

        return person.address?.city;

    }

    const Check : Person ={
        address :{
            city:'Dhaka',
            street:'23D block'
        },
        phone:45677
    }


  
   console.log(getAddressCity(Check));


}