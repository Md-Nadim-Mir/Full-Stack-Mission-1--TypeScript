{
    // video : 1  start 

    class Animal {
        // name: string;
        // color: string;
        // sound:string;

        // public modifier use koray simple way declare


  constructor(public name:string,public color:string,public sound:string){
            // this.name=name;
            // this.color=color;
            // this.sound=sound;
        }

        // javascript dist ei method kaj koray na
        makeInfo(){

            console.log(`${this.name} color is ${this.color} and sound is ${this.sound}`)
        }

    }

    const cat=new Animal('Pussy','black','mewww');
    const dog=new Animal('Manik','red','geww gewwwwww gewww')
    cat.makeInfo()
    dog.makeInfo()

    // video : 1  end
}