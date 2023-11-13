{
    // Basic data types 



    // Preemtive :

    // stirng 
    let a: string = 'Welcome to next level'

    //  number
    let b: number = 2345

    // boolean 
    let c: boolean = true

    // undefined
    let d: undefined = undefined

    // null
    let e: null = null

    // type declare
    let f: number;

    f = 45;
    // f='Abdullah'   string is not allowed  only number
    // f=true         boolean is not allowed  only number



    // any type declare 
    // Remainder larger application any type data declare not good paractice

    let g;

    g = 113;
    g = 'Abdullah'
    g = true;
    g = undefined;
    g = null



    //  Non Preemtive data types 


    // Array 

    let friendList: string[] = ['a', 'b'];
    // friendList.push(3)  ; number is not push cause it is string
    friendList.push('c');


    let classRollList: number[] = [10, 20, 30];
    // classRollList.push('abdullah') : string is not accessible this type is number
    classRollList.push(34);



    // tuple ---> Array --> Order ---> type of Values
    let ageName: [number, string, boolean] = [24, 'abdullah', true];
}