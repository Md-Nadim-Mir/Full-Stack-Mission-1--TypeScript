{
     // vdieo : 2 start


     class Person {


        constructor(public name:string , public age:number , public address:string){}

        getInfo(){
            console.log(`${this.name} is age : ${this.age} and : ${this.address}`)
        }

    }

    class Student extends Person{

        constructor(public name:string , public age:number , public address:string){
            super(name,age,address)
        }
    }


    const Student1= new Student('Nadim',24,'khulna')
    Student1.getInfo();


    class Teacher extends Person{

        constructor(public name:string ,public age:number , public address:string , public profession:string){
            super(name,age,address);
            this.profession=profession;
        }

        isWork(){
            console.log(`${this.name} is a ${this.profession} of ICE`)
        }
    }


    const Teacher1=new Teacher('Noman',34,'Khulna','Vice-Principle');
    Teacher1.getInfo();
    Teacher1.isWork();



    // vdieo : 2 end
}