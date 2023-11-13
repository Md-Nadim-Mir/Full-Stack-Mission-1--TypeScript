{

    // Introduction to generics use type alias 

    type Generic<T>= Array<T>

    // const rollNumber : number[]= [3,6,8];
    // const rollNumber : Array<number>= [3,6,8];
    const rollNumber : Generic<number>= [3,6,8];

    // const mentors : string[]=['a','b','c'];
    // const mentors : Array<string>=['a','b','c'];
    const mentors : Generic<string>=['a','b','c'];

    // const boolArray : boolean[]= [true,false]
    // const boolArray : Array<boolean>= [true,false]
    const boolArray : Generic<boolean>= [true,false]


    // Generic use koray Array of objects make

    const user:Generic<{name:string,age:number}> =[
        {
            name:'Nadim',
            age:34
        },
        {
            name:'Abdullah',
            age:25
        }
    ]



    //  Generic use koray tupple


    type GenericTuple <x,y>=[x,y]

    const person : GenericTuple <string,string> = ['Mr. x','Mst. y'];

    const userWithId : GenericTuple<number,{name:string,age:number}>= [123455,{name:'mohammad',age:34}]



}