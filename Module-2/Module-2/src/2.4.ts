{

    //  Generic use interface

    interface Developer <T,X=null>{

        name: string;
        computer:{

            brand: string,
            model : string,                  
            releaseYear: number
        }

        smartWatch : T ,
        bike ? : X
    }


    type ValueWatch={
        brand: string,
        price: number,
        model: string
    }


    const poorDeveloper : Developer<ValueWatch>={

         name:'mohammad',
         computer:{
            brand:'HP',
            model:'He24dfd',
            releaseYear: 2019
         },

         smartWatch:{

            brand:'samsang',
            price:2345,
            model: '3sqwa'
         }
    }
    

    interface AppleModel{

        brand:string;
        model: string

    }


    interface BikeModel {

        name: string,
        price : number,
        miles: string

    }



    const richDeveloper : Developer<AppleModel,BikeModel>={

        name:'habib',
        computer:{
           brand:'Asus',
           model:'He24dfd',
           releaseYear: 2013
        },

        smartWatch:{

           brand:'appple',
           model: '3sqwadd'
        },
        bike:{
            name: 'Mt-3',
            price: 354666,
            miles : 'per hour 60 km'
        }
   }



    // 
}