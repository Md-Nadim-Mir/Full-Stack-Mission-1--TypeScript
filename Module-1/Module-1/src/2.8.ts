{

     // Outline : Learning Destructuring 


    //  object desturcturing
     const user={

        id: 345,
        name:{
            firstName:'Mohammad',
            middleName: 'Yosuf',
            lastName:'Abdullah'
        },
        contractAddress:'Saudi Arab',
        mobileNumber:+880345666
     }


    //  id:string , name:{lastName:string} not give. cause  it is mean alias. alias mean id nicknmae string, lastName nickname string

     const {id, name:{lastName} }=user;


    //  Array destructuring

    let friends= ['Ramjan','Shomir','Hafizur','Abedin','Milon','Shohag'];

    let [, ,BestFriends ,...rest]=friends;

    //  first two comma skip friends array first two friends name
    //  then bestfriends contain 'Hafizur'
    //  then ...rest contain remaining friend









}