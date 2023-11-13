{



    interface Car {

        make: string;
        model: string;
        year: string;

    }

    interface Driver {

        name: string;
        licenseNumber: string;

    }

 

    const CombinedCarDriver=(car: Car, driver: Driver):object => {

        
        const make=car.make
        const model=car.model 
        const year=car.year
        const name=driver.name
        const licenseNumber= driver.licenseNumber


        return {  make,model ,year,name,licenseNumber}
    }

    const car= {
        make:'BMW',
        model:'AER56',
        year : '2 , November 2018'
    }

    const driver ={
        name:'Mohammad Abdullah',
        licenseNumber : '567-QW-AD'
    }


    console.log(CombinedCarDriver(car,driver))


}