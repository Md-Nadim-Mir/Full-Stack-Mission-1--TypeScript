{
     // video : 4 start 

      // Type guard using instance of

      class Parani {
        constructor(public name: string , public color:string ){
            this.name=name;
            this.color=color;
        }

        sleep(){
            console.log(`{$this.name} is sleeping.`)
        }

      }

      class Dog extends Parani {

         constructor (name:string , color: string){
            super(name,color)
         }

         DogSound(){
            console.log('Gewwww Gewwww')
         }

      }

      class Cat extends Parani {

        constructor (name:string , color: string){
           super(name,color)
        }

        CatSound(){
           console.log('Mewwww Mewwww')
        }

     }


     const Dog1= new Dog('SDog','green');
     const Cat1 =new Cat('SCat','purple');


    //  smart way  ta use korer jonno funciton use kortay pari

    const isDog=(animal : Parani):animal is Dog=>{
        return animal instanceof Dog
    }

    const isCat=(animal : Parani):animal is Cat=>{
        return animal instanceof Cat
    }

     const getAnimal= (animal : Parani)=>{

        //    if( animal instanceof Cat){
        //     animal.CatSound()
        //    }

        //    else if (animal instanceof Dog){
             
        //       animal.DogSound()
        //    }

        if( isCat(animal)){
            animal.CatSound()
           }

           else if (isDog(animal)){
             
              animal.DogSound()
           }

           else {
               animal.sleep();
           }
     }

     getAnimal(Cat1)
     getAnimal(Dog1)



    // video : 4 end
}