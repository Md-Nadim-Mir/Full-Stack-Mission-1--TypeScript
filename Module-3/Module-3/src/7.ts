{

    // statics in oop

    class Counter{

       static count : number =0;

        increment(){
            Counter.count=Counter.count+1;
            return Counter.count;
        }

        decrement(){
            Counter.count=Counter.count-1;
            return Counter.count;
        }


        // method ka static banano
        static increment_decrement(){

            return (this.count=this.count+5)

        }
    }


    const a= new Counter();

    console.log(a.increment())
    console.log(a.increment())
    console.log(a.increment())
    


    const b= new Counter();

    console.log(b.increment())
    console.log(b.increment())


    // static method call

    console.log(Counter.increment_decrement())
}