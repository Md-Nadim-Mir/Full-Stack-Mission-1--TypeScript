{
    // Polymorphism

    class Person{

        getSleep(){
            console.log(`Everyday 10 hours sleeping`)
        }
    }

    class Student extends Person {

        getSleep(){
            console.log(`Everyday 8 hours sleeping`)
        }

    }


    class Developer extends Person {

        getSleep(){
            console.log(`Everyday 6 hours sleeping`)
        }
    }


    const person1 =new Person();
    const person2 =new Student();
    const person3 =new Developer();


    const getSleepingHour= (param : Person)=>{

        param.getSleep();
    }


    getSleepingHour(person1);
    getSleepingHour(person2);
    getSleepingHour(person3);



    //  another example polymorphism


    class Shape {

        getArea(): number {

            return 0;

        }
    }

    //    Circle PI*r*r

    class Circle extends Shape{

        constructor ( public radius : number){
            super();
            this.radius=radius;
        }

        getArea():number {

            return Math.PI*this.radius*this.radius;
            
        }
    }


    // rectangle= width * height

    class Rectangle extends Shape{

        constructor(public height : number , public width: number){
            super();
            height=this.height;
            width=this.width;
        }

        getArea():number {

            return this.height * this.width;
            
        }

    }


    const gettingArea= (param: Shape)=>{
       console.log( param.getArea())
    }


    const area1=new Circle(4.5);
    const area2 =new Rectangle(5,6);


     gettingArea(area1)
     gettingArea(area2)
   


}