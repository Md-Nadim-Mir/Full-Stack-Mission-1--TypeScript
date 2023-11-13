{
    class Cat {

        constructor(public name : string , public color:string){
            name=this.name;
            color=this.color;
        }


        checkCat(){
            console.log(`Yes, it's a cat.`)
        }

    }

    const Pussy = new Cat('CuteCat','White');

    const isCat=(cat : Cat):cat is Cat=>{
        return cat instanceof Cat;
    }

    const getChecking= (cat : Cat)=>{
        
        if(isCat(cat)){
            cat.checkCat();
        }

        else {
            console.log(`no, it's not a cat.`)
        }
    }


    getChecking(Pussy);

    
}