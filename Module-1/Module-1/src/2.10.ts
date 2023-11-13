{

    //   Outline : Union and Intersection Types
 



    // Union Types


    // it is string literal type
    // cause value is used string

    type FontEndDeveloper= 'FakibazDevloper' | 'JuniorDeveloper'
    type FullStackDeveloper= 'JuniorDeveloper' | 'ExpertDeveloper'

    type Developer=FontEndDeveloper | FullStackDeveloper

    const newDeveloper:FontEndDeveloper='FakibazDevloper'

    const oldDeveloper:Developer='ExpertDeveloper'



    type User={
        name:string,
        email?:string,
        age: number,
        blood: 'o+'|'A+'|'B+'
    }


    let user1 : User={
        name:'Mohammad',
        age:24,
        blood:'o+'
    }




    //  Intersection Type

    type FontEndDeveloper1={

        skill:string[],
        designation1 : 'FontEnd Developer'

    }


    type BankEndDeveloper1={
        skill:string[],
        designation2: 'BackEnd Developer'
    }

    type FullStackDeveloper1= FontEndDeveloper1 & BankEndDeveloper1

    let Developer : FullStackDeveloper1={

        skill:['html','css','js','node','firebase','react'],
        designation1:'FontEnd Developer',
        designation2:'BackEnd Developer'

    }

}