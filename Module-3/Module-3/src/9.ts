{

    // Abstraction in OOP
     // abstraction  : 1. interface 2. abstract

    interface Vehicle{

        startEngine():void;
        stopEngine():void;
        move():void;


    }


    class Car implements Vehicle{

        startEngine(): void {
            console.log(`Start enginge`)
        }

        stopEngine(): void {
            console.log(`Stop engine`)
        }

        move(): void {
            console.log(`Move to dhaka`)
        }
    }


    const c1=new Car();
    c1.move();
    c1.startEngine();
    c1.stopEngine();



    
    // idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("I am starting the car  engine toyta");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving  the car");
    }
  }

   const hondaCar = new ToyotaCar();
   hondaCar.startEngine();

  //



}